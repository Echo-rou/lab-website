# lab-website · 实验室分享网站

XX实验室的分享站：经验分享、发展历程、成员介绍、相册。
纯 HTML/CSS 静态网站，由 **GitHub Pages** 免费托管，无需服务器、无需安装任何构建工具。

- **线上地址**：<https://echo-rou.github.io/lab-website/>
- **仓库地址**：<https://github.com/Echo-rou/lab-website>
- **如何发布内容**：见 [`如何上传分享.md`](如何上传分享.md) 或站内「我要上传」页面

## 目录结构

```
lab-website/
├── index.html        首页（最新分享 + 简介 + 入口）
├── shares.html       分享列表页（新分享在这里加卡片）
├── history.html      发展历程（时间线）
├── members.html      成员与学长学姐
├── gallery.html      相册
├── guide.html        「我要上传」网页版指南
├── shares/
│   ├── template.html           新分享的模板（复制它来写新分享）
│   └── 2026-example-welcome.html  示例分享
├── assets/
│   ├── css/style.css 全站样式（改色只需改文件开头的变量）
│   ├── js/main.js    菜单/高亮小脚本
│   └── images/       图片（gallery/ 子目录放相册照片）
├── 如何上传分享.md    文字版上传指南
└── README.md         本文件
```

## 首次定制清单（建站后做一次）

1. **实验室名称**：全仓库搜索 `XX实验室`，替换成真实名称
   （各页面 `<title>`、导航 `.brand-name`、hero 标题、页脚）。
2. **首页简介**：编辑 `index.html` 的「关于我们」部分，写 100~200 字实验室介绍。
3. **发展历程**：把 `history.html` 里的占位时间线替换成真实大事记。
4. **成员名单**：替换 `members.html` 里的示例卡片。
5. **相册**：往 `assets/images/gallery/` 传照片并更新 `gallery.html`。
6. **统计数字**：更新 `index.html` 数据条里的分享数/届数/照片数。
7. （可选）把示例分享 `shares/2026-example-welcome.html` 删除或保留作示范。

## 本地预览

双击 `index.html` 即可在浏览器直接预览；
或在本目录起一个本地服务（可避免个别浏览器限制）：

```bash
python -m http.server 8000   # 然后访问 http://localhost:8000
```

## 部署原理

仓库 `main` 分支即线上版本：GitHub Pages 已配置为从 `main` 分支根目录发布，
任何提交（网页端 `Commit changes` 或 `git push`）后约 1~2 分钟自动上线。

## 日常维护

- 新增分享 / 照片 / 成员 / 历程：全部在 GitHub 网页上完成，见上传指南。
- 添加协作者：仓库 `Settings → Collaborators`（需要仓库管理员权限）。
- 恢复误改：文件页面 `History` 可查看并回滚任意历史版本。
