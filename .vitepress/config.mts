import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: "/abcc/",
  
  title: "ABCC",
  description: "Una estructura de reglas obvia para acelerar la colaboración entre humanos y asistentes de IA.",
  
  // Configuración de idiomas
  locales: {
    root: {
      label: 'Español',
      lang: 'es',
      title: "ABCC",
      description: "Una estructura de reglas obvia para acelerar la colaboración entre humanos y asistentes de IA.",
      themeConfig: {
        nav: [
          { text: 'Inicio', link: '/' },
          { text: 'Documentación', link: '/abcc' }
        ],
        sidebar: [
          {
            text: 'Arquitectura de Código',
            items: [
              { text: '¿Qué es ABCC?', link: '/abcc' },
              { text: 'App', link: '/app' },
              { text: 'Base', link: '/base' },
              { text: 'Common', link: '/common' },
              { text: 'Config', link: '/config' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/johnv1977/abcc' }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      title: "ABCC",
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
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/johnv1977/abcc' }
        ]
      }
    }
  },
  
  themeConfig: {
    // Configuración global del tema
    socialLinks: [
      { icon: 'github', link: 'https://github.com/johnv1977/abcc' }
    ]
  }
})
