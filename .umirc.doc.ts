import { defineConfig } from 'umi'
export default defineConfig({
  // 站点模式
  mode: 'site',
  outputPath: 'doc-dist',

  title: '空明百问',
  logo: '//www.junfengshow.com/static/assets/logo.png',
  favicon: '//www.junfengshow.com/static/favicon.png',

  resolve: {
    includes: ['./docs'],
    previewLangs: ['jsx', 'tsx'],
  },

  base: '/',
  navs: [
    { path: '/base', title: '基础' },
    { path: '/network', title: '网络' },
    { path: '/frame', title: '框架' },
    { path: '/tools', title: '工具' },
    { path: '/coding', title: '编程题' },
    { path: '/synthesize', title: '综合' },
    { path: '/list', title: '题单' },
  ],
  // menus: {
  // },

  // 默认是中文，index.md index.en-US.md必须要存在的
  locales: [['zh-CN', '中文'], ['en-US', 'English'], ['en', 'English']],
  
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    // 设置 alias
    memo.entry('umi').add('./docs/app.ts')
  },
  hash: true
})
