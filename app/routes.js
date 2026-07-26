/* Route -> URL map. Every in-app link is a real <a href>, so crawlers and
   middle-click both work; the SPA state is only used for the quote scroll. */
var SR_SLUG = {
  "roofing": "roofing",
  "plumbing": "plumbing",
  "hvac": "mechanical-hvac",
  "general": "general-construction",
  "windows": "impact-windows-doors",
  "remodels": "remodels"
};
function SR_URL(route) {
  if (!route || route === 'home') return '/';
  if (route === 'quote') return '/#quote';
  if (route.indexOf('service:') === 0) return '/' + (SR_SLUG[route.split(':')[1]] || 'roofing');
  return '/';
}
window.SR_URL = SR_URL;
