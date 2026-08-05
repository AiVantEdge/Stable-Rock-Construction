import { useState, useEffect } from 'react';

/* Viewport hooks used by the hydrated islands to switch layout at runtime. */
export function useMediaQuery(query) {
  // Initialize to a stable default (false) on BOTH server and first client render so
  // the hydrated markup matches the SSR markup. The real value is applied in the
  // effect below, which triggers a re-render into the correct (e.g. mobile) layout.
  const [matches, setMatches] = useState(false);
  useEffect(() => {
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

export const useIsMobile = () => useMediaQuery('(max-width: 760px)');
export const useIsTablet = () => useMediaQuery('(max-width: 1024px)');
