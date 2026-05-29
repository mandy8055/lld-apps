import { useEffect, useState } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('scroll', progressHandler);

    return () => {
      window.removeEventListener('scroll', progressHandler);
    };
  }, []);

  function progressHandler() {
    const scrolled = window.scrollY;
    const totalScrollableDistance =
      document.documentElement.scrollHeight - window.innerHeight;
    const clampedProgress = Math.min(
      (scrolled / totalScrollableDistance) * 100,
      100,
    );
    setProgress(clampedProgress);
  }

  return progress;
}
