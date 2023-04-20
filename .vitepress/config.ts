import { getThemeConfig, defineConfig } from '@sugarat/theme/node'
import { SearchPlugin } from 'vitepress-plugin-search'

const blogTheme = getThemeConfig({
  author: '树深遇鹿',
  friend: [
    {
      nickname: '粥里有勺糖',
      des: '你的指尖用于改变世界的力量',
      avatar:
        'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
      url: 'https://sugarat.top'
    },
    {
      nickname: 'Vitepress',
      des: 'Vite & Vue Powered Static Site Generator',
      avatar:
        'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTI2NzY1Ng==674995267656',
      url: 'https://vitepress.vuejs.org/'
    }
  ],
  search: false
})

export default defineConfig({
  extends: blogTheme,
  ignoreDeadLinks: true,
  lang: 'zh-cn',
  title: '树深遇鹿',
  description: '生活不可能像你想象的那么好，但也不会像你想象的那么糟',
  vite: {
    optimizeDeps: {
      include: ['element-plus'],
      exclude: ['@sugarat/theme']
    },
    plugins: [SearchPlugin()]
  },
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/png' }],
    [
      'link',
      {
        rel: 'alternate icon',
        href: '/favicon.ico',
        type: 'image/png',
        sizes: '16x16'
      }
    ],
    ['meta', { name: 'author', content: '粥里有勺糖' }],
    ['link', { rel: 'mask-icon', href: '/favicon.ico', color: '#ffffff' }],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/favicon.ico', sizes: '180x180' }
    ]
  ],
  lastUpdated: true,
  themeConfig: {
    // footer: {
    //   message: '自定义底部内容',
    //   copyright:
    //     'MIT Licensed | <a target="_blank" href="https://theme.sugarat.top/"> @sugarat/theme </a>'
    // },
    nav: [
      {
        text: '随笔',
        link: '/blogs/informal-essay/'
      },
      { text: 'HTML', link: '/blogs/html/' },
      { text: 'JavaScript', link: '/blogs/javascript/' },
      { text: 'TypeScript', link: '/blogs/typeScript/' }
    ],
    lastUpdatedText: '上次更新于',
    editLink: {
      pattern:
        'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
      text: '去 GitHub 上编辑内容'
    },
    logo: '/logo.png',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/wzwdream'
      }
    ]
  },
})