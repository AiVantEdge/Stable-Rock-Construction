/* Central SEO/structured-data source. Phase 1 preserves the existing schema
   (LocalBusiness + Service + Breadcrumb + FAQ). Phase 2 will extend this with
   Person (owner/inspector), aggregateRating, and sameAs profiles. */
import { SERVICE_CONTENT, SR_SLUG } from './services.js';

export const SITE = 'https://stablerockconstruction.com';
export const BUSINESS_ID = SITE + '/#business';
export const OG_IMAGE = SITE + '/assets/imagery/hero-truck.webp';

/* Measurement — fill these in to activate (both are inert while empty). */
export const GA_MEASUREMENT_ID = ''; // e.g. 'G-XXXXXXXXXX' from a GA4 property
export const GSC_VERIFICATION = ''; // content value of the Search Console meta tag

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

const HOME_FAQS = [
  ['What areas does Stable Rock serve?', 'We work across Miami and Miami-Dade County, the Florida Keys, and Southwest Florida. Roofing, plumbing, HVAC, general construction, impact windows, and remodels.'],
  ['Can one contractor really handle roofing, plumbing, HVAC, and remodels?', 'Yes. Every trade is in-house under one license, so we run your whole project and you deal with one point of contact instead of coordinating a pile of subcontractors.'],
  ['Why does it matter that the owner is a state inspector?', 'Because he knows what inspectors look for. Work gets done to code the first time, and you deal with fewer failed inspections and callbacks.'],
  ['How do I get a free quote?', "Call 786-622-ROOF (786-622-7663) or fill out the form. We'll get back to you within one business day with a free estimate. No pressure."],
];

/* Home page graph: business + website + FAQ. */
export function homeSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      businessNode,
      founderNode,
      { '@type': 'WebSite', '@id': SITE + '/#website', url: SITE, name: 'Stable Rock Construction LLC', publisher: { '@id': BUSINESS_ID } },
      {
        '@type': 'FAQPage',
        mainEntity: HOME_FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      },
    ],
  };
}

/* Service page graph: business + Service (offer catalog from scope) + breadcrumb. */
export function serviceSchema(trade) {
  const c = SERVICE_CONTENT[trade];
  const meta = PAGE_META[trade];
  const url = SITE + meta.path;
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
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: c.label,
          itemListElement: c.scope.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s } })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: url },
          { '@type': 'ListItem', position: 3, name: c.crumb, item: url },
        ],
      },
    ],
  };
}
