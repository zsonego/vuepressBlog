<template><div><h1 id="github-ci-cd-教程-上传华为云" tabindex="-1"><a class="header-anchor" href="#github-ci-cd-教程-上传华为云"><span>github CI CD 教程 (上传华为云)</span></a></h1>
<ul>
<li>
<p>将代码上传到 github</p>
</li>
<li>
<p>到当前项目里添加 secrets</p>
</li>
</ul>
<p align="center">
  <img src="http://www.zstop.top:3000/uploads/1761272168907-128380186.png" alt="添加secrets" width="500">
</p>
<blockquote>
<p>PRIVATE_KEY 是服务器上生成的私钥 通过 ssh-keygen -m PEM -t rsa -b 4096 该命令生成 <a href="https://github.com/easingthemes/ssh-deploy" target="_blank" rel="noopener noreferrer">github 地址</a>
REMOTE_HOST 是服务器 ip 地址</p>
</blockquote>
<ul>
<li>
<p>服务器通过 ssh-keygen -m PEM -t rsa -b 4096 命令生成公钥和私钥 公钥需要放到生成密钥的目录下的 authorized_keys 里面 私钥放在 github secrets 里</p>
</li>
<li>
<p>然后配置 github 的 actions 配置</p>
</li>
</ul>
<p align="center">
  <img src="http://www.zstop.top:3000/uploads/1761272615701-820422350.png" alt="github actions 配置" width="500">
</p>
<ul>
<li>actions 配置</li>
</ul>
<code>
<pre><code>name: Deploy to Huawei Cloud

on:
push:
branches: - main # 当你推送到 main 分支时触发

jobs:
build-and-deploy:
runs-on: ubuntu-latest

steps:
  - name: Checkout code
    uses: actions/checkout@v4

  - name: Setup Node.js
    uses: actions/setup-node@v4
    with:
      node-version: 21

  - name: Install dependencies
    run: npm install

  - name: Build project
    run: npm run docs:build

  - name: Clear target directory
    uses: appleboy/ssh-action@v1.0.3
    with:
      host: ${ { secrets.REMOTE_HOST } } # 用的时候花括号中间的空格去掉
      username: root
      key: ${ { secrets.PRIVATE_KEY } } # 用的时候花括号中间的空格去掉
      script: |
        rm -rf /usr/share/nginx/html/*
        rm -rf /usr/share/nginx/html/.*

  - name: Deploy to server
    uses: easingthemes/ssh-deploy@v2.2.11
    env:
      SSH_PRIVATE_KEY: ${ { secrets.PRIVATE_KEY } } # 用的时候花括号中间的空格去掉
      REMOTE_HOST: ${ {secrets.REMOTE_HOST} } # 用的时候花括号中间的空格去掉
      REMOTE_USER: root
      TARGET: /usr/share/nginx/html/
      SOURCE: docs/.vuepress/dist/
</code></pre>
</code>
</div></template>


