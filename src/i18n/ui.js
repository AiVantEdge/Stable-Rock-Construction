/* Shared UI strings by locale. Content copy lives with the data (services,
   locations) and in home.js; this covers chrome + reused section labels. */

export const LOCALES = ['en', 'es'];

/* Localized trade labels (used in footer, service links, city pages). */
export const TRADE_LABELS = {
  en: {
    roofing: 'Roofing', plumbing: 'Plumbing', hvac: 'Mechanical & HVAC',
    general: 'General Construction', windows: 'Impact Windows & Doors', remodels: 'Remodels',
  },
  es: {
    roofing: 'Techos', plumbing: 'Plomería', hvac: 'Mecánica y A/C',
    general: 'Construcción General', windows: 'Ventanas y Puertas de Impacto', remodels: 'Remodelaciones',
  },
};

export const UI = {
  en: {
    nav: { services: 'Services', advantage: 'Advantage', guides: 'Guides', faq: 'FAQ', quote: 'Free Quote', call: 'Call 786-622-ROOF', langSwitch: 'ES' },
    util: { veteran: 'Veteran-Owned', licensed: 'Licensed & Insured', region: 'Miami · Florida Keys · SWFL' },
    footer: {
      blurb: 'Veteran-owned. Roofing, plumbing, mechanical, and general contracting under one licensed roof.',
      certified: 'Florida State Certified · Licensed & Insured',
      services: 'Services', contact: 'Contact', serviceAreas: 'Service Areas', guides: 'Guides',
      region: 'Miami · Florida Keys · SWFL', rights: 'Stable Rock Construction LLC', tagline: 'Veteran-Owned · Built Rock Solid.',
    },
    common: { learnMore: 'Learn more', freeQuote: 'Get a free quote', home: 'Home' },
    service: {
      straightAnswer: 'Straight Answer', whatWeHandle: 'What We Handle', howItGoes: 'How It Goes',
      fourSteps: 'Four steps, no surprises.', beforeAfter: 'Before & After', otherTrades: 'Other Trades',
      whileOut: 'While we’re out there.', commonQuestions: 'Common Questions', crumbServices: 'Services',
      questionsAnswered: (label) => `${label} questions, answered.`,
    },
    city: {
      serving: (c) => `Serving ${c}`, localHeading: 'Local work, built to code the first time.',
      whatWeDo: (c) => `What We Do in ${c}`, oneCompany: 'One licensed company for every trade.',
      permitCode: 'Permitting & Code', nearby: 'Nearby Areas We Serve', serviceAreas: 'Service Areas',
      permitLine: (c, a) => `${c} projects permit through ${a}. We pull the permits, build to code, and walk every inspection so you are not chasing paperwork.`,
      heroH1: (c) => `${c} contractor, every trade under one roof.`,
      heroSub: (c, r) => `Veteran-owned and Florida state-certified in roofing, plumbing, mechanical, and general construction — serving ${c} and ${r}.`,
      ctaHeading: (c) => `Get a free quote in ${c}.`,
    },
    blog: { title: 'Guides', readGuide: 'Read guide', allGuides: 'All guides' },
  },
  es: {
    nav: { services: 'Servicios', advantage: 'Ventajas', guides: 'Guías', faq: 'Preguntas', quote: 'Cotización Gratis', call: 'Llame al 786-622-ROOF', langSwitch: 'EN' },
    util: { veteran: 'Empresa de Veteranos', licensed: 'Con Licencia y Asegurado', region: 'Miami · Cayos de Florida · SWFL' },
    footer: {
      blurb: 'Empresa de veteranos. Techos, plomería, mecánica y contratación general bajo una sola licencia.',
      certified: 'Certificado por el Estado de Florida · Con Licencia y Asegurado',
      services: 'Servicios', contact: 'Contacto', serviceAreas: 'Áreas de Servicio', guides: 'Guías',
      region: 'Miami · Cayos de Florida · SWFL', rights: 'Stable Rock Construction LLC', tagline: 'Empresa de Veteranos · Construido Sólido Como una Roca.',
    },
    common: { learnMore: 'Ver más', freeQuote: 'Solicite una cotización gratis', home: 'Inicio' },
    service: {
      straightAnswer: 'Respuesta Directa', whatWeHandle: 'Lo Que Hacemos', howItGoes: 'Cómo Funciona',
      fourSteps: 'Cuatro pasos, sin sorpresas.', beforeAfter: 'Antes y Después', otherTrades: 'Otros Servicios',
      whileOut: 'Ya que estamos ahí.', commonQuestions: 'Preguntas Frecuentes', crumbServices: 'Servicios',
      questionsAnswered: (label) => `Preguntas sobre ${label}, respondidas.`,
    },
    city: {
      serving: (c) => `Servicio en ${c}`, localHeading: 'Trabajo local, hecho a código a la primera.',
      whatWeDo: (c) => `Lo Que Hacemos en ${c}`, oneCompany: 'Una sola empresa con licencia para cada oficio.',
      permitCode: 'Permisos y Código', nearby: 'Áreas Cercanas Que Atendemos', serviceAreas: 'Áreas de Servicio',
      permitLine: (c, a) => `Los proyectos en ${c} se permiten a través de ${a}. Nosotros sacamos los permisos, construimos a código y acompañamos cada inspección para que usted no tenga que perseguir papeleo.`,
      heroH1: (c) => `Contratista en ${c}, cada oficio bajo un mismo techo.`,
      heroSub: (c, r) => `Empresa de veteranos, certificada por el Estado de Florida en techos, plomería, mecánica y construcción general — al servicio de ${c} y ${r}.`,
      ctaHeading: (c) => `Solicite una cotización gratis en ${c}.`,
    },
    blog: { title: 'Guías', readGuide: 'Leer guía', allGuides: 'Todas las guías' },
  },
};

/* Region names, localized (used on city pages). */
export const REGION_LABELS = {
  en: { 'Miami-Dade County': 'Miami-Dade County', 'Florida Keys': 'Florida Keys', 'Southwest Florida': 'Southwest Florida' },
  es: { 'Miami-Dade County': 'el Condado de Miami-Dade', 'Florida Keys': 'los Cayos de Florida', 'Southwest Florida': 'el Suroeste de Florida' },
};

/* Prefix a path for a locale. English stays at root; Spanish under /es. */
export function localizedPath(path, lang) {
  if (lang === 'en') return path;
  return path === '/' ? '/es' : '/es' + path;
}
