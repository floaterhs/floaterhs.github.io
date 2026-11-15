# Floater花上 · 个人网站

思考的间隙便是幸福。

网站包含个人首页与文档区。文档分为个人（深度思考、日常生活）和技能（编程开发、音乐制作、拍摄剪辑），使用 VitePress 生成静态页面。

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

## 修改内容

| 内容 | 位置 |
| --- | --- |
| 首页入口 | `site/index.md` |
| 文档概览 | `site/docs/index.md` |
| 个人栏目 | `site/docs/personal/` |
| 技能栏目 | `site/docs/skills/` |
| 网站标题、导航、侧栏、搜索 | `site/.vitepress/config.ts` |
| 自定义主题与样式 | `site/.vitepress/theme/` |

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

目标仓库为公开的 `floaterhs/floaterhs.github.io`，目标访问地址为 <https://floaterhs.github.io/>。目标地址不代表当前已经完成上线。

仓库创建并上传代码后：

1. 打开仓库的 **Settings → Pages**。
2. 将 **Build and deployment → Source** 设为 **GitHub Actions**。
3. 确认默认分支为 `main`，且 `.github/workflows/` 中的网站部署工作流已提交。
4. 推送到 `main` 后，工作流会安装依赖、构建网站并发布构建产物。
5. 在 **Actions** 中确认部署成功，再访问正式地址检查页面。

之后更新文章或样式并推送到 `main`，即可由 GitHub Actions 自动重新部署。

该仓库用于账号同名站点，站点基路径应保持 `/`。请勿把 `node_modules`、本地缓存或密钥提交到仓库。
