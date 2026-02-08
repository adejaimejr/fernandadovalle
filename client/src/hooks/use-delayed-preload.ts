
import { useEffect } from 'react';

const IMAGES_TO_PRELOAD = [
  '/images/portrait-smiling.webp',
  '/images/institute-logo.webp',
  '/images/fernanda-books-leaning.webp',
  '/images/fernanda-footer.webp'
];

export function useDelayedPreload() {
  useEffect(() => {
    // Wait 1 second before starting preload
    const timer = setTimeout(() => {
      // Preload images
      IMAGES_TO_PRELOAD.forEach(src => {
        const img = new Image();
        img.src = src;
      });
      console.log('Delayed preload started for below-the-fold images');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
}
