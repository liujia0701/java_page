import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "study_road",
  description: "study java springboot",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '开始学习', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'java之路',
        items: [
          { text: '参考', link: '/markdown-examples' },
          { text: '安装', link: '/markdown-examples' },
          { text: '入门', link: '/api-examples' },
          { text: '反射', link: '/反射' },
          { text: '泛型', link: '/泛型' },
          { text: '注解', link: '/注解' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'http://mingzhu.shop' }
    ]
  }
})
