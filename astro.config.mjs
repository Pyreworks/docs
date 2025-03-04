// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://pyre-docs.vercel.app', // Switch to custom domain ?
  integrations: [
      starlight({
          title: 'Pyre Documentation',
          description: 'Documentation for Pyre',
          social: {
              github: 'https://github.com/Pyreworks/docs',
          },
		  logo: {
			src: './src/assets/logo.png'
		  },
          sidebar: [
              {
                  label: '1 - Introduction & Setup',
                  items: [
                      { label: '1.1 | Getting Started', slug: 'intro/getting-started' },
                  ],
              },
          ],
		  customCss: [
			'./src/styling/pyre.css'
		  ]
      }),
	],

  vite: {
    plugins: [tailwindcss()], // https://github.com/withastro/starlight/issues/2862
  },
});