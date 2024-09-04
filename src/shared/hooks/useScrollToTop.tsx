import { useCallback } from 'react';

export default function useScrollToTop() {
  const scrollSmooth = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const scrollRough = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return { scrollSmooth, scrollRough };
}
