import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: "/abcc/",
  
  title: "ABCC",
  description: "An obvious rule structure to accelerate collaboration between humans and AI assistants.",
  
  // Configuración de idiomas
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: "ABCC",
      description: "An obvious rule structure to accelerate collaboration between humans and AI assistants.",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Docs', link: '/abcc' }
        ],
        sidebar: [
          {
            text: 'Codebase Architecture',
            items: [
              { text: 'What is ABCC?', link: '/abcc' },
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
    es: {
      label: 'Español',
      lang: 'es',
      title: "ABCC",
      description: "Una estructura de reglas obvia para acelerar la colaboración entre humanos y asistentes de IA.",
      themeConfig: {
        nav: [
          { text: 'Inicio', link: '/es/' },
          { text: 'Documentación', link: '/es/abcc' }
        ],
        sidebar: [
          {
            text: 'Arquitectura de Código',
            items: [
              { text: '¿Qué es ABCC?', link: '/es/abcc' },
              { text: 'App', link: '/es/app' },
              { text: 'Base', link: '/es/base' },
              { text: 'Common', link: '/es/common' },
              { text: 'Config', link: '/es/config' }
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
