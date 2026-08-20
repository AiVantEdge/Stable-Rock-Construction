/* Vercel serverless function: receives the website quote form (same-origin) and
   creates/updates the contact in GoHighLevel with service tags + a note.
   Creating the contact fires the sub-account's existing "Contact Created"
   workflow (acknowledgement SMS, welcome email, internal new-lead alert).

   Server-side env vars (set in Vercel — never in the browser):
     GHL_PIT          Private Integration Token for the Stable Rock sub-account
     GHL_LOCATION_ID  the sub-account/location id (SVd9yS1sbfuk24oQQdqB)
*/

const GHL = 'https://services.leadconnectorhq.com';
const HEADERS = (token) => ({
  Authorization: `Bearer ${token}`,
  Version: '2021-07-28',
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  const token = process.env.GHL_PIT;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) return res.status(500).json({ ok: false, error: 'not_configured' });

  try {
    const d = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});

    // Honeypot — bots fill this; humans never see it.
    if (d.company) return res.status(200).json({ ok: true });
    if (!d.full_name || (!d.phone && !d.email)) {
      return res.status(400).json({ ok: false, error: 'missing_fields' });
    }

    // Services the visitor selected (canonical labels), for tags + the "Services Requested" field.
    const services = Array.isArray(d.services) ? d.services.filter(Boolean) : [];

    // 1) Upsert the contact (create if new, match on phone/email). Tags + source set here.
    const upsertBody = {
      locationId,
      firstName: d.first_name || d.full_name,
      lastName: d.last_name || '',
      name: d.full_name,
      email: d.email || undefined,
      phone: d.phone || undefined,
      city: d.city || undefined,
      source: d.source || 'Website Quote Form',
      tags: Array.isArray(d.tags) ? d.tags : [],
      // Writes the chosen services into the GHL contact custom field
      // "Services Requested" ({{contact.services_requested}}) for a clean merge
      // in the internal new-lead SMS/email.
      customFields: services.length
        ? [{ key: 'contact.services_requested', field_value: services.join(', ') }]
        : undefined,
    };
    const upsertRes = await fetch(`${GHL}/contacts/upsert`, {
      method: 'POST',
      headers: HEADERS(token),
      body: JSON.stringify(upsertBody),
    });
    if (!upsertRes.ok) {
      const text = await upsertRes.text().catch(() => '');
      return res.status(502).json({ ok: false, error: 'ghl_upsert_failed', detail: text.slice(0, 300) });
    }
    const upsert = await upsertRes.json();
    const contactId = upsert?.contact?.id || upsert?.id;

    // 2) Add the project-details note (best-effort — don't fail the lead if this errors).
    if (contactId && d.note) {
      await fetch(`${GHL}/contacts/${contactId}/notes`, {
        method: 'POST',
        headers: HEADERS(token),
        body: JSON.stringify({ body: d.note }),
      }).catch(() => {});
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ ok: false, error: 'server_error' });
  }
}
