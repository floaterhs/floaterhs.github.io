# Floater花上 · 个人网站

思考的间隙便是幸福。

网站包含个人首页与文档区。文档分为个人（深度思考、日常生活）和技能（编程开发、音乐制作、拍摄剪辑），使用 VitePress 生成静态页面。

访问网站：[floaterhs.github.io](https://floaterhs.github.io/) · [文档](https://floaterhs.github.io/docs/)

## 本地运行

在项目根目录执行：

```bash
npm install
npm run dev
```

打开终端中显示的本地地址。修改 Markdown 或页面样式后，预览会自动更新。

## 构建与检查

```bash
npm run build
npm run preview
```

构建结果位于 `site/.vitepress/dist`。发布前可通过预览检查首页、文档链接、搜索及手机端布局。

重新构建后，请停止并重新运行 `npm run preview`，让预览服务加载新的资源。日常编辑建议使用带自动更新的 `npm run dev`。

## 修改内容

| 内容 | 位置 |
| --- | --- |
| 首页入口 | `site/index.md` |
| 文档概览 | `site/docs/index.md` |
| 个人栏目 | `site/docs/personal/` |
| 技能栏目 | `site/docs/skills/` |
| 网站标题、导航、侧栏、搜索 | `site/.vitepress/config.ts` |
| 自定义主题与样式 | `site/.vitepress/theme/` |
| 首页头像 | `site/public/avatar.svg` |

现有栏目尚未发布文章。添加真实内容后，请同步修改对应栏目中的空状态说明。

### 新增文章

1. 在合适的栏目目录下新增 `.md` 文件，例如 `site/docs/personal/first-note.md`。
2. 填写标题与正文。
3. 在 `site/.vitepress/config.ts` 的 `themeConfig.sidebar` 中加入文章链接。
4. 在所属栏目页面添加文章入口，方便读者浏览。
5. 运行 `npm run build` 检查，再提交修改。

文章示例结构：

```md
---
title: 文章标题
description: 文章的一句话介绍。
---

# 文章标题

从这里开始写正文。

## 一个小节

小节内容会自动生成页内目录。
```

图片可放在 `site/public/images/`，然后使用 `![图片说明](/images/example.jpg)` 引用。请在发布前确认图片可以公开使用。

## GitHub Pages 部署

网站已部署到 <https://floaterhs.github.io/>，公开仓库为 [floaterhs/floaterhs.github.io](https://github.com/floaterhs/floaterhs.github.io)。

仓库的 **Settings → Pages → Source** 已设为 **GitHub Actions**。默认分支为 `main`，部署工作流位于 `.github/workflows/deploy.yml`。每次推送网站修改后，工作流会安装依赖、构建网站并发布构建产物；可在 [Actions](https://github.com/floaterhs/floaterhs.github.io/actions) 查看部署结果。

之后更新文章或样式并推送到 `main`，即可由 GitHub Actions 自动重新部署。

该仓库用于账号同名站点，站点基路径应保持 `/`。请勿把 `node_modules`、本地缓存或密钥提交到仓库。
