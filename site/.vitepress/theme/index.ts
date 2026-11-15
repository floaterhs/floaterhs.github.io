import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import HomePage from './HomePage.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    'home-hero-before': () => h(HomePage),
    'doc-before': () => h('p', { class: 'doc-kicker' }, 'Floater 的文档')
  })
}
