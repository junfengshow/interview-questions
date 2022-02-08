import { defineConfig } from 'umi'
export default defineConfig({
  // 站点模式
  mode: 'site',
  outputPath: 'doc-dist',

  title: '面试题',
  logo: '//www.junfengshow.com/static/assets/logo.png',
  favicon: '//www.junfengshow.com/static/favicon.png',

  resolve: {
    includes: ['./docs'],
    previewLangs: ['jsx', 'tsx'],
  },

  base: '/',
  navs: [
    { path: '/base', title: '基础' },
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
