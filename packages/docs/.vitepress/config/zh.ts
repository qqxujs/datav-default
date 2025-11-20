import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import datav from './datav/zh'

export const META_URL = 'https://pinia.vuejs.org'
export const META_TITLE = 'Pinia 🍍'
export const META_DESCRIPTION = '值得你喜欢的 Vue Store'
// TODO: translation of this
// 'Intuitive, type safe, light and flexible Store for Vue'

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
      pattern: 'https://github.com/vuejs/pinia/edit/v3/packages/docs/:path',
      text: '对本页提出修改建议',
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
            text: '博客专栏',
            link: '//blog.qqxu.com',
          },
        ],
      },
      {
        text: 'v3.x',
        items: [{ text: 'v2.x', link: 'https://v2.pinia.vuejs.org' }],
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
