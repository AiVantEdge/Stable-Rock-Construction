/* Central SEO/structured-data source. Phase 1 preserves the existing schema
   (LocalBusiness + Service + Breadcrumb + FAQ). Phase 2 will extend this with
   Person (owner/inspector), aggregateRating, and sameAs profiles. */
import { SERVICE_CONTENT, SR_SLUG } from './services.js';
import { SERVICE_CONTENT_ES } from '../i18n/services.es.js';
import { HOME } from '../i18n/home.js';
import { localizedPath } from '../i18n/ui.js';

const CRUMB = { en: { home: 'Home', services: 'Services', areas: 'Service Areas', guides: 'Guides' }, es: { home: 'Inicio', services: 'Servicios', areas: 'Áreas de Servicio', guides: 'Guías' } };

export const SITE = 'https://stablerockconstruction.com';
export const BUSINESS_ID = SITE + '/#business';
export const OG_IMAGE = SITE + '/assets/imagery/hero-truck.webp';

/* Measurement — fill these in to activate (both are inert while empty). */
export const GA_MEASUREMENT_ID = ''; // e.g. 'G-XXXXXXXXXX' from a GA4 property
export const GSC_VERIFICATION = ''; // content value of the Search Console meta tag

/* Quote form posts to /api/lead (a Vercel serverless function) which creates the
   contact in GoHighLevel (with service tags + a note), firing the sub-account's
   "Contact Created" follow-up workflow. Server-side Vercel env vars (never in the
   browser): GHL_PIT (Private Integration Token) and GHL_LOCATION_ID. */

const AREA_SERVED = [
  { '@type': 'AdministrativeArea', name: 'Miami' },
  { '@type': 'AdministrativeArea', name: 'Miami-Dade County' },
  { '@type': 'AdministrativeArea', name: 'Florida Keys' },
  { '@type': 'AdministrativeArea', name: 'Southwest Florida' },
];

/* Florida DBPR certifications held by the owner/qualifier (Chapter 489). */
export const LICENSES = [
  { name: 'Florida Certified General Contractor', id: 'CGC1521744' },
  { name: 'Florida Certified Roofing Contractor', id: 'CCC1332548' },
  { name: 'Florida Certified Plumbing Contractor', id: 'CFC1433873' },
  { name: 'Florida Certified Mechanical Contractor', id: 'CMC1251627' },
];

const CREDENTIALS = LICENSES.map((l) => ({
  '@type': 'EducationalOccupationalCredential',
  credentialCategory: 'license',
  name: `${l.name} (${l.id})`,
  recognizedBy: { '@type': 'GovernmentOrganization', name: 'Florida Department of Business and Professional Regulation' },
}));

export const FOUNDER_ID = SITE + '/#abner-nunez';

/* The owner/qualifying contractor. Strong E-E-A-T / authority entity for AI. */
export const founderNode = {
  '@type': 'Person',
  '@id': FOUNDER_ID,
  name: 'Abner Nunez',
  jobTitle: 'Owner & Qualifying Contractor',
  worksFor: { '@id': BUSINESS_ID },
  hasCredential: CREDENTIALS,
};

/* The shared business node, referenced by @id from every page graph. */
export const businessNode = {
  '@type': ['LocalBusiness', 'RoofingContractor', 'GeneralContractor', 'HVACBusiness', 'Plumber'],
  '@id': BUSINESS_ID,
  name: 'Stable Rock Construction LLC',
  description: 'Veteran-owned South Florida builder, Florida state-certified in general construction, roofing, plumbing, and mechanical/HVAC. Roofing, plumbing, HVAC, general construction, impact windows, and remodels under one license.',
  url: SITE,
  telephone: '+1-786-622-7663',
  email: 'info@stablerockconstruction.com',
  image: OG_IMAGE,
  logo: SITE + '/assets/logo/stable-rock-logo-white-bg.png',
  priceRange: '$$',
  // Service-area business: city/region only, no public street address.
  address: { '@type': 'PostalAddress', addressLocality: 'Miami', addressRegion: 'FL', addressCountry: 'US' },
  areaServed: AREA_SERVED,
  founder: { '@id': FOUNDER_ID },
  hasCredential: CREDENTIALS,
  knowsAbout: ['Roofing', 'Plumbing', 'HVAC', 'General construction', 'Impact windows and doors', 'Kitchen and bath remodels'],
};

/* Per-page <title>/<meta description>, carried over from the current site. */
export const PAGE_META = {
  home: {
    path: '/',
    title: 'Stable Rock Construction | Roofing, Plumbing & HVAC in Miami & the Keys',
    description: 'Veteran-owned South Florida builder run by an active Florida State inspector. Roofing, plumbing, HVAC, impact windows, and remodels under one license. Free quotes: 786-622-ROOF.',
  },
  roofing: {
    path: '/roofing',
    title: 'Roofing in Miami & the Florida Keys | Stable Rock Construction',
    description: 'Flat and low-slope roofing, re-roofs, tear-offs, torch-down, metal, and coatings across Miami-Dade, the Keys, and Southwest Florida. Free roof inspection.',
  },
  plumbing: {
    path: '/plumbing',
    title: 'Plumbing & Repipes in Miami | Stable Rock Construction',
    description: 'Whole-home repipes, slab leak detection, drain cleaning, water heaters, and full rough-in across Miami-Dade, the Keys, and Southwest Florida.',
  },
  hvac: {
    path: '/mechanical-hvac',
    title: 'A/C & HVAC Installation in Miami | Stable Rock Construction',
    description: 'A/C installs and replacements sized by load calculation, duct sealing and replacement, and mini-splits across South Florida.',
  },
  general: {
    path: '/general-construction',
    title: 'General Contractor in Miami | Additions & New Builds | Stable Rock',
    description: 'Ground-up residential construction, additions, structural repair, and permit management in Miami-Dade, the Keys, and Southwest Florida.',
  },
  windows: {
    path: '/impact-windows-doors',
    title: 'Impact Windows & Doors in Miami | Stable Rock Construction',
    description: 'NOA-compliant impact windows and doors, full-frame and retrofit installs, with wind mitigation paperwork for your insurance credit.',
  },
  remodels: {
    path: '/remodels',
    title: 'Kitchen & Bath Remodels in Miami | Stable Rock Construction',
    description: 'Full kitchen and bathroom remodels with in-house plumbing, electrical, tile, and finishes. One crew, one schedule, one bill.',
  },
};

/* Spanish page metadata (same paths; the /es prefix is applied at render). */
export const PAGE_META_ES = {
  home: { path: '/', title: 'Stable Rock Construction | Techos, Plomería y A/C en Miami y los Cayos', description: 'Constructor del sur de Florida, empresa de veteranos dirigida por un inspector activo del Estado de Florida. Techos, plomería, A/C, ventanas de impacto y remodelaciones bajo una sola licencia. Cotizaciones gratis: 786-622-ROOF.' },
  roofing: { path: '/roofing', title: 'Techos en Miami y los Cayos de Florida | Stable Rock Construction', description: 'Techos planos y de baja pendiente, retechos, remociones, torch-down, metal y recubrimientos en Miami-Dade, los Cayos y el suroeste de Florida. Inspección de techo gratis.' },
  plumbing: { path: '/plumbing', title: 'Plomería y Recambio de Tubería en Miami | Stable Rock Construction', description: 'Recambios completos de tubería, detección de fugas en losa, limpieza de drenajes, calentadores y rough-in en Miami-Dade, los Cayos y el suroeste de Florida.' },
  hvac: { path: '/mechanical-hvac', title: 'Instalación de A/C y HVAC en Miami | Stable Rock Construction', description: 'Instalación y reemplazo de A/C dimensionado por cálculo de carga, sellado y reemplazo de ductos, y mini-splits en todo el sur de Florida.' },
  general: { path: '/general-construction', title: 'Contratista General en Miami | Ampliaciones y Obra Nueva | Stable Rock', description: 'Construcción residencial desde cero, ampliaciones, reparación estructural y gestión de permisos en Miami-Dade, los Cayos y el suroeste de Florida.' },
  windows: { path: '/impact-windows-doors', title: 'Ventanas y Puertas de Impacto en Miami | Stable Rock Construction', description: 'Ventanas y puertas de impacto conformes a NOA, instalación de marco completo y retrofit, con papeleo de mitigación de viento para su crédito de seguro.' },
  remodels: { path: '/remodels', title: 'Remodelación de Cocinas y Baños en Miami | Stable Rock Construction', description: 'Remodelaciones completas de cocina y baño con plomería, electricidad, baldosa y acabados internos. Un equipo, un cronograma, una factura.' },
};

export function getMeta(key, lang = 'en') {
  return (lang === 'es' ? PAGE_META_ES : PAGE_META)[key];
}

const HOME_FAQS = [
  ['What areas does Stable Rock serve?', 'We work across Miami and Miami-Dade County, the Florida Keys, and Southwest Florida. Roofing, plumbing, HVAC, general construction, impact windows, and remodels.'],
  ['Can one contractor really handle roofing, plumbing, HVAC, and remodels?', 'Yes. Every trade is in-house under one license, so we run your whole project and you deal with one point of contact instead of coordinating a pile of subcontractors.'],
  ['Why does it matter that the owner is a state inspector?', 'Because he knows what inspectors look for. Work gets done to code the first time, and you deal with fewer failed inspections and callbacks.'],
  ['How do I get a free quote?', "Call 786-622-ROOF (786-622-7663) or fill out the form. We'll get back to you within one business day with a free estimate. No pressure."],
];

/* Home page graph: business + website + FAQ (localized). */
export function homeSchema(lang = 'en') {
  const faqs = HOME[lang].faq.items;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      businessNode,
      founderNode,
      { '@type': 'WebSite', '@id': SITE + '/#website', url: SITE, name: 'Stable Rock Construction LLC', publisher: { '@id': BUSINESS_ID } },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      },
    ],
  };
}

/* Blog post graph: business + BlogPosting (authored by the owner) + breadcrumb. */
export function blogPostSchema({ title, description, slug, datePublished, dateModified, author, lang = 'en' }) {
  const cr = CRUMB[lang];
  const url = SITE + localizedPath(`/blog/${slug}`, lang);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      businessNode,
      {
        '@type': 'BlogPosting',
        headline: title,
        description,
        inLanguage: lang,
        datePublished,
        dateModified: dateModified || datePublished,
        author: { '@type': 'Person', '@id': FOUNDER_ID, name: author },
        publisher: { '@id': BUSINESS_ID },
        mainEntityOfPage: url,
        image: OG_IMAGE,
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: cr.home, item: SITE + localizedPath('/', lang) },
          { '@type': 'ListItem', position: 2, name: cr.guides, item: SITE + localizedPath('/blog', lang) },
          { '@type': 'ListItem', position: 3, name: title, item: url },
        ],
      },
    ],
  };
}

/* Per-city landing page title + meta description (localized). */
export function cityMeta(city, lang = 'en') {
  const path = `/service-areas/${city.slug}`;
  if (lang === 'es') {
    return {
      path,
      title: `Contratista en ${city.name} — Techos y Construcción | Stable Rock Construction`,
      description: `Techos, plomería, A/C, ventanas de impacto y remodelaciones en ${city.name}. Empresa de veteranos, certificada por el Estado de Florida, una sola empresa para cada oficio. Cotizaciones gratis: 786-622-ROOF.`,
    };
  }
  return {
    path,
    title: `${city.name} Roofing & General Contractor | Stable Rock Construction`,
    description: `Licensed, veteran-owned roofing, plumbing, HVAC, impact windows, and remodels in ${city.name}, ${city.region}. Florida state-certified, one company for every trade. Free quotes: 786-622-ROOF.`,
  };
}

/* City page graph: business + founder + breadcrumb (localized). */
export function citySchema(city, lang = 'en') {
  const cr = CRUMB[lang];
  const path = `/service-areas/${city.slug}`;
  const url = SITE + localizedPath(path, lang);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      businessNode,
      founderNode,
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: cr.home, item: SITE + localizedPath('/', lang) },
          { '@type': 'ListItem', position: 2, name: cr.areas, item: SITE + localizedPath('/service-areas', lang) },
          { '@type': 'ListItem', position: 3, name: city.name, item: url },
        ],
      },
    ],
  };
}

/* Service page graph: business + Service (offer catalog from scope) + breadcrumb (localized). */
export function serviceSchema(trade, lang = 'en') {
  const content = lang === 'es' ? SERVICE_CONTENT_ES : SERVICE_CONTENT;
  const c = content[trade];
  const meta = getMeta(trade, lang);
  const cr = CRUMB[lang];
  const url = SITE + localizedPath(meta.path, lang);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      businessNode,
      founderNode,
      {
        '@type': 'Service',
        serviceType: c.label,
        name: meta.title.split('|')[0].trim(),
        description: meta.description,
        url,
        provider: { '@id': BUSINESS_ID },
        areaServed: AREA_SERVED,
        inLanguage: lang,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: c.label,
          itemListElement: c.scope.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s } })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: cr.home, item: SITE + localizedPath('/', lang) },
          { '@type': 'ListItem', position: 2, name: cr.services, item: url },
          { '@type': 'ListItem', position: 3, name: c.crumb, item: url },
        ],
      },
      ...(c.faqs ? [{
        '@type': 'FAQPage',
        mainEntity: c.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      }] : []),
    ],
  };
}
