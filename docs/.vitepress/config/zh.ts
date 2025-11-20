import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import datav from './datav/zh'

export const META_URL = 'https://cubex.qqxu.com'
export const META_TITLE = 'CubeX 🍍'
export const META_DESCRIPTION = '值得你喜欢的低代码构建平台'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: META_DESCRIPTION,
  head: [
    ['meta', { property: 'og:url', content: META_URL }],
    ['meta', { property: 'og:description', content: META_DESCRIPTION }],
    ['meta', { property: 'twitter:url', content: META_URL }],
    ['meta', { property: 'twitter:title', content: META_TITLE }],
    ['meta', { property: 'twitter:description', content: META_DESCRIPTION }],
  ],

  themeConfig: {
    editLink: {
      pattern: 'https://github.com/cubexjs/datav-default/tree/main/packages/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },

    outline: {
      label: '本页内容',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    nav: [
      {
        text: '手册',
        link: '/zh/datav/datav-7-0',
        activeMatch: '^/zh/datav/datav-7-0',
      },
      {
        text: '相关链接',
        items: [
          {
            text: '演示',
            link: 'cubex.qqxu.com',
          },
          {
            text: '博客专栏',
            link: 'blog.qqxu.com',
          },
        ],
      },
      {
        text: '生态系统',
        items: [
          { text: 'CubeX Core', link: 'https://github.com/cubexjs/cubex-core' },
          { text: 'CubeX Design', link: 'https://github.com/cubexjs/cubex-design' },
          { text: 'CubeX Default', link: 'https://github.com/cubexjs/cubex-default' },
          { text: 'CubeX Server', link: 'https://github.com/cubexjs/cubex-ui' },
          { text: 'CubeX Cli', link: 'https://github.com/cubexjs/cubex-cli' },
          { text: 'CubeX Board', link: 'https://github.com/cubexjs/cubex-board' },
          { text: 'CubeX EventEmitter', link: 'https://github.com/cubexjs/cubex-event-emitter' },
        ],
      },
    ],
    sidebar: {
      '/': [
        {
          text: '介绍',
          items: [
            {
              text: 'Pinia 是什么？',
              link: '/introduction.html',
            },
            {
              text: '开始',
              link: '/getting-started.html',
            },
          ],
        },
        datav,
      ],
    },
  },
}

export const zhSearch: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档',
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消',
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除',
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接',
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索供应商',
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈',
        },
      },
    },
  },
}
