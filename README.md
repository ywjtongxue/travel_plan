# 冬日旅行攻略 · GitHub Pages 上传包

此文件夹可直接部署到 GitHub Pages，无须安装软件或执行编译命令。

## 上传

1. 在电脑上解压 ZIP，打开 travel-github-pages 文件夹。
2. GitHub 新建名为 travel 的 Public 仓库，勾选 Add a README file。
3. 仓库首页 Add file → Upload files。
4. 把本文件夹里的 index.html、maps 文件夹一起拖入上传区。README.md 可选。
5. 注意：上传内容本身，不要把 travel-github-pages 外层文件夹上传进去。仓库根目录应直接能看到 index.html 和 maps。
6. 点击 Commit changes。不要只上传 ZIP，GitHub 不会自动解压。

## 发布

仓库 Settings → Pages → Build and deployment：

- Source：Deploy from a branch
- Branch：main
- Folder：/ (root)
- 点击 Save

等待部署完成，在 Settings → Pages 点击 Visit site。
若仓库名是 travel，网址一般为 https://你的用户名.github.io/travel/。

## 手机打开

把部署成功后的网页链接发给朋友。iPhone 建议复制链接到 Safari 打开；不要下载 HTML 后放到备忘录预览。

## 文件说明

- index.html：首页和全部交互，约254KB。
- maps/：10张独立WebP手绘图，均已使用相对路径，可部署在任意仓库名下。
- 所有单文件均小于25MiB，可通过GitHub网页上传。
- 保留每日行程、酒店切换、可编辑预算、备选景点、手绘图放大及PNG导出。
- 酒店选择、预算和勾选等状态保存在各自浏览器本地，不会同步给其他人。
- 景点、餐厅实景照片和部分字体仍使用原有外部链接，首次加载需要网络；本包不是完整离线照片库。
- GitHub Pages发布内容公开可见；本包不包含账号凭据、部署密钥或预订凭证。
- 若出现404：检查index.html是否位于发布根目录，Pages是否选main与/(root)。
- 若手绘图不显示：检查maps文件夹是否上传，且没有改名。

以后更新：替换index.html和有变化的maps图片并提交，仍使用原来的网址。
