<script setup lang="ts">
import { ref } from 'vue'

const selected = ref('全部')
const filters = ['全部', '个人', '技能']
const topics = [
  { group: '个人', name: '深度思考', en: 'Thoughts', description: '给问题一点时间，给想法一个落点。', link: '/docs/personal/thinking.html', symbol: 'thought' },
  { group: '个人', name: '日常生活', en: 'Life', description: '留住日常里那些值得记下的片刻。', link: '/docs/personal/life.html', symbol: 'life' },
  { group: '技能', name: '编程开发', en: 'Development', description: '从一个想法开始，在代码里慢慢实现。', link: '/docs/skills/development.html', symbol: 'code' },
  { group: '技能', name: '音乐制作', en: 'Music', description: '关于声音、旋律，还有创作的过程。', link: '/docs/skills/music.html', symbol: 'music' },
  { group: '技能', name: '拍摄剪辑', en: 'Visuals', description: '用镜头观察，用剪辑整理故事。', link: '/docs/skills/film.html', symbol: 'film' }
]
</script>

<template>
  <div class="floater-home">
    <section class="home-intro" aria-labelledby="home-title">
      <div class="intro-main">
        <h1 id="home-title"><span>思考的间隙</span><span>便是幸福</span></h1>
        <div class="intro-details">
          <div class="profile-identity">
            <img class="profile-avatar" src="/avatar.png" width="80" height="80" alt="Floater花上的黑白插画头像" fetchpriority="high">
            <div><p class="intro-name">我是 Floater花上。</p><a class="profile-handle" href="https://github.com/floaterhs" target="_blank" rel="noreferrer">@floaterhs</a></div>
          </div>
          <p class="intro-description">在这里，记录思考与生活，<br class="desktop-break">也记录编程、音乐和影像的探索。</p>
          <div class="intro-actions">
            <a class="primary-link" href="/docs/">阅读文档 <span aria-hidden="true">↗</span></a>
            <a class="github-link" href="https://github.com/floaterhs" target="_blank" rel="noreferrer">在 GitHub 找到我</a>
          </div>
        </div>
      </div>
    </section>

    <section id="explore" class="explore-section" aria-labelledby="explore-title">
      <div class="explore-heading">
        <div><h2 id="explore-title">慢慢积累，随时翻阅。</h2><p>关于我的日常，也关于我正在探索的事。</p></div>
        <div class="topic-filters" role="group" aria-label="筛选文档分类">
          <button v-for="filter in filters" :key="filter" type="button" :aria-pressed="selected === filter" :class="{ active: selected === filter }" @click="selected = filter">{{ filter }}</button>
        </div>
      </div>
      <div class="topic-list" aria-live="polite">
        <a v-for="topic in topics.filter(t => selected === '全部' || t.group === selected)" :key="topic.name" class="topic-row" :href="topic.link">
          <span class="topic-title">{{ topic.name }}<span class="topic-en" lang="en">{{ topic.en }}</span></span>
          <span class="topic-description">{{ topic.description }}</span>
          <span class="topic-group">{{ topic.group }}</span>
          <svg class="topic-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
        </a>
      </div>
      <p class="collection-note">文档正在慢慢整理，欢迎随时回来看看。</p>
    </section>

    <footer class="home-footer">
      <a class="footer-name" href="/">Floater花上<span>思考的间隙便是幸福</span></a>
      <div><a href="/docs/">文档</a><a href="https://github.com/floaterhs" target="_blank" rel="noreferrer">GitHub</a><span>© {{ new Date().getFullYear() }} Floater花上</span></div>
    </footer>
  </div>
</template>
