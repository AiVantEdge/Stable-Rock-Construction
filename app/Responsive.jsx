/* Viewport hooks for the inline-styled components. Because every style in this
   app is an inline object, media queries can't reach them — so components read
   these hooks and switch layout values at render time instead.
   Registered on window.SRKit so the other files can use them without imports. */

function useMediaQuery(query) {
  const get = () => (typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(query).matches : false);
  const [matches, setMatches] = React.useState(get);
  React.useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    if (mql.addEventListener) mql.addEventListener('change', onChange);
    else mql.addListener(onChange);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', onChange);
      else mql.removeListener(onChange);
    };
  }, [query]);
  return matches;
}

/* Breakpoints: phones collapse to a single column and get the hamburger nav;
   tablets keep two columns for the denser card grids. */
const useIsMobile = () => useMediaQuery('(max-width: 760px)');
const useIsTablet = () => useMediaQuery('(max-width: 1024px)');

window.SRKit = Object.assign(window.SRKit || {}, { useMediaQuery, useIsMobile, useIsTablet });
