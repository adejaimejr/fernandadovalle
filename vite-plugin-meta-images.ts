import type { Plugin } from 'vite';

export function metaImagesPlugin(): Plugin {
  return {
    name: 'vite-plugin-meta-images',
    transformIndexHtml(html) {
      // Disabled to prevent overriding custom domain SEO tags
      return html;
    },
  };
}
