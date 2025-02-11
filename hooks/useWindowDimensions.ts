import { useState, useEffect, useCallback } from 'react';

export default function useWindowDimensions() {

  const hasWindow = typeof window !== 'undefined';

  const getWindowDimensions: () => {
    width: number | null,
    height: number | null,
  } = useCallback(
    () => {
      const width = hasWindow ? window.innerWidth : null;
      const height = hasWindow ? window.innerHeight : null;
      return {
        width,
        height,
      }
    },
    [hasWindow],
  )

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [getWindowDimensions, hasWindow]);

  return windowDimensions;
}