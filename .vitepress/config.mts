import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "ABCC",
  description: "An obvious rule structure to accelerate collaboration between humans and AI assistants.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/abcc' }
    ],

    sidebar: [
      {
        text: 'Codebase Architecture',
        items: [
          { text: '¿Qué es abbc?', link: '/abcc' },
          { text: 'App', link: '/app' },
          { text: 'Base', link: '/base' },
          { text: 'Common', link: '/common' },
          { text: 'Config', link: '/config' }
        ]
      },
      {
        text: 'Frameworks',
        items: [
          { text: 'Angular', link: '/' },
          { text: 'Flutter', link: '/' },
          { text: 'React', link: '/' },
          { text: 'Vue', link: '/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
