/* Vercel serverless function: receives the website quote form (same-origin) and
   forwards it to the GoHighLevel Inbound Webhook. The GHL URL lives only here,
   in the GHL_WEBHOOK_URL env var — never in the browser. */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  const url = process.env.GHL_WEBHOOK_URL;
  if (!url) return res.status(500).json({ ok: false, error: 'not_configured' });

  try {
    const data = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});

    // Honeypot: real users never fill this. Pretend success so bots get no signal.
    if (data.company) return res.status(200).json({ ok: true });

    // Minimal validation — need at least a name and one way to reach them.
    if (!data.full_name || (!data.phone && !data.email)) {
      return res.status(400).json({ ok: false, error: 'missing_fields' });
    }

    const upstream = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, received_at: new Date().toISOString() }),
    });

    if (!upstream.ok) return res.status(502).json({ ok: false, error: 'upstream_error' });
    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ ok: false, error: 'server_error' });
  }
}
