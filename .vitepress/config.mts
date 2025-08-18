import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: "/abcc/",
  
  title: "abcc - Codebase Architecture for Frontend and Mobile Applications",
  description: "Una estructura de reglas obvia para acelerar la colaboración entre humanos y asistentes de IA.",

  head: [['link', { rel: 'icon', href: '/abcc/favicon.ico' }]],
  
  // Configuración de idiomas
  locales: {
    root: {
      label: 'Español',
      lang: 'es',
      title: "abcc",
      description: "Una estructura de reglas obvia para acelerar la colaboración entre humanos y asistentes de IA.",
      themeConfig: {
        nav: [
          { text: 'Guía', link: '/guia' }
        ],
        sidebar: [
          {
            text: 'Fundamentos',
            items: [
              { text: '¿Qué es abcc?', link: '/guia' },
            ]
          },
          {
            text: 'Arquitectura Base',
            items: [
              { text: 'App', link: '/app' },
              { text: 'Base', link: '/base' },
              { text: 'Common', link: '/common' },
              { text: 'Config', link: '/config' }
            ]
          }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      title: "abcc",
      description: "An obvious rule structure to accelerate collaboration between humans and AI assistants.",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Docs', link: '/en/abcc' }
        ],
        sidebar: [
          {
            text: 'Codebase Architecture',
            items: [
              { text: 'What is ABCC?', link: '/en/abcc' },
              { text: 'App', link: '/en/app' },
              { text: 'Base', link: '/en/base' },
              { text: 'Common', link: '/en/common' },
              { text: 'Config', link: '/en/config' }
            ]
          }
        ]
      }
    }
  },
  
  themeConfig: {
    logo: {
      dark: "/images/icon_base_dark.png",
      light: "/images/icon_base_light.png"
    },
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present <a href="https://github.com/johnv1977" target="_blank"> John Valencia</a>'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/johnv1977/abcc' }
    ]
  }
})
