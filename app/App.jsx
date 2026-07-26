function App() {
  const route = window.SR_ROUTE || 'home';
  const { Header, Footer, HomeScreen, ServiceScreen } = window.SRKit;
  /* Links navigate for real via href; this only handles the on-page quote scroll. */
  const go = (r) => {
    if (r !== 'quote') return;
    const el = document.getElementById('quote');
    if (el) window.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' });
  };
  const isService = route.indexOf('service') === 0;
  const trade = isService ? (route.split(':')[1] || 'roofing') : null;
  return (
    <div style={{ position: 'relative' }}>
      <Header route={route} onNavigate={go} />
      {isService ? <ServiceScreen trade={trade} onNavigate={go} /> : <HomeScreen onNavigate={go} />}
      <Footer onNavigate={go} />
    </div>
  );
}
window.SRKit = Object.assign(window.SRKit || {}, { App });
