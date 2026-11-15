import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Floater花上',
  description: '思考的间隙便是幸福。关于个人、生活与技能的记录。',
  base: '/',
  cleanUrls: false,
  appearance: false,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: 'Floater花上' }]
  ],
  sitemap: { hostname: 'https://floaterhs.github.io' },
  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      { text: '首页', link: '/', activeMatch: '^/$' },
      { text: '文档', link: '/docs/', activeMatch: '^/docs/' }
    ],
    sidebar: {
      '/docs/': [
        { text: '文档', items: [{ text: '从这里开始', link: '/docs/' }] },
        { text: '个人', items: [
          { text: '深度思考', link: '/docs/personal/thinking' },
          { text: '日常生活', link: '/docs/personal/life' }
        ] },
        { text: '技能', items: [
          { text: '编程开发', link: '/docs/skills/development' },
          { text: '音乐制作', link: '/docs/skills/music' },
          { text: '拍摄剪辑', link: '/docs/skills/film' }
        ] }
      ]
    },
    outline: { label: '本页内容', level: [2, 3] },
    socialLinks: [{ icon: 'github', link: 'https://github.com/floaterhs', ariaLabel: 'Floater花上的 GitHub' }],
    docFooter: { prev: '上一篇', next: '下一篇' },
    sidebarMenuLabel: '文档目录',
    darkModeSwitchLabel: '切换外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    returnToTopLabel: '回到顶部',
    lastUpdated: { text: '最后更新' },
    notFound: { title: '这一页还没写到', quote: '换个方向，继续看看吧。', linkLabel: '回到首页', linkText: '回到首页' },
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            tokenize: (text: string) => {
              const normalized = text.toLowerCase()
              if (typeof Intl.Segmenter === 'function') {
                return Array.from(new Intl.Segmenter('zh-CN', { granularity: 'word' }).segment(normalized)).filter(s => s.isWordLike).map(s => s.segment)
              }
              return normalized.match(/[a-z0-9]+|[\u3400-\u9fff]/g) || []
            }
          }
        },
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清空搜索',
            displayDetails: '显示详细内容',
            backButtonTitle: '关闭搜索',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    }
  }
})
