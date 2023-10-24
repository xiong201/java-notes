const baiduCode = require('./config/baiduCode.js'); // 百度统计hm码
// const htmlModules = require('./config/htmlModules.js');


module.exports = {
  base:'/java-notes/',

  // theme: 'vdoing', // 使用依赖包主题
  theme: require.resolve('../../vdoing'), // 使用本地主题 (先将vdoing主题文件下载到本地：https://github.com/xugaoyi/vuepress-theme-vdoing)

  // title: "xiong201的个人知识库",
  description: '知识管理',
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: 'vuepress,theme,blog,vdoing' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  ],

  // 主题配置
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {text:'Java 知识体系', items:[
          {
            text:'计算机基础',items:[
              {
                text: '数据结构', items: [
                  { text: '线性数据结构——数组、链表、栈、队列', link: '/pages/0e35d1/' },
                  { text: '哈希表', link: '/pages/beb561/' },
                  { text: '图', link: '/pages/8751ef/' },
                  { text: '树', link: '/pages/d2ac96/' },
                  { text: '红黑树', link: '/pages/b5322d/' }
                ]
              },
              {
                text:'操作系统',items:[
                  {
                    text: 'Linux',  items: [
                      {text:'Linux',link:'/pages/ee514b/'},
                      {text:'Linux 常用命令',link:'/pages/74b53c/'}
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: '数据库',  items: [
              {text:'数据库基础与SQL',link:'/pages/67462f/'},
              {
                text: 'MySQL', items: [
                  { text: 'MySQL简介', link: '/pages/c9b13a/' },
                  { text: 'MySQL体系结构', link: '/pages/198df0/' },
                  { text: 'MySQL索引', link: '/pages/17d468/' },
                  { text: 'MySQL调优', link: '/pages/ec5067/' },
                  { text: 'MySQL命令大全', link: '/pages/f7fcac/' }
                ]
              }
            ]
          },
          {
            text: 'Java', items: [
              {
                text: 'Java 基础', items: [
                  { text: 'BigDecimal 详解', link: '/pages/f7214d/' },
                  { text: 'Java 异常体系', link: '/pages/8f19aa/' }
                ]
              },
              {
                text: 'Java 容器', items: [
                  { text: 'Java 集合常用使用技巧', link: '/pages/33fb2e/' },
                  { text: 'ArrayList 源码分析及扩容机制', link: '/pages/528ca4/' },
                  { text: 'HashMap 源码及底层数据结构分析', link: '/pages/a794bb/' }
                ]
              },
              {
                text: 'Java 并发', items: [
                  { text: '并发编程基础', link: '/pages/571a8d/' },
                  { text: 'Java 线程池详解', link: '/pages/adbda5/' },
                  { text: 'CompletableFuture 详解', link: '/pages/77c217/' }
                ]
              },
              {
                text: 'Java 新特性', items: [
                  { text: 'Java 8 新特性', link: '/pages/b6b76e/' }
                ]
              },
              {
                text: 'JVM', items: [
                  { text: 'Java 内存区域', link: '/pages/ecd0f2/' },
                  { text: 'JVM 垃圾收集', link: '/pages/5bf174/' },
                  { text: 'JVM 常用参数', link: '/pages/c5dfa7/' },
                  { text: 'JVM 常用的调优工具', link: '/pages/2cdbc6/' },
                  { text: 'JVM 调优', link: '/pages/b8b917/' },
                  { text: 'JVM 问题排查及调优', link: '/pages/7bbf36/' }
                ]
              }
            ]
          }, 
          {
            text: '系统设计', items: [
              {
                text: '常用框架', items: [
                  {
                    text: 'Spring', items: [
                      { text: 'Spring Bean', link: '/pages/47235b/' },
                      { text: 'Spring事务总结', link: '/pages/5fcbaa/' }
                    ]
                  },
                  {text:'Dubbo',link:'/pages/80c6b1/'}
                ]
              },
              {
                text: '分布式', items: [
                  {
                    text: '分布式锁', items: [
                      { text: '分布式锁介绍', link: '/pages/4418d1/' },
                      { text: '分布式锁常见实现方案总结', link: '/pages/d51c58/' }
                    ]
                  },
                  {
                    text: '幂等性', items: [
                      { text: '幂等性介绍', link: '/pages/8c09c7/' }
                    ]
                  },
                  {text:'RPC介绍',link:'/pages/126fc8/'}
                ]
              },
              {
                text: '微服务',  items: [
                  {
                    text: 'SpringCloud', items: [
                      { text: 'SpringCloud', link: '/pages/d2a1d0/' }
                    ]
                  },
                  {
                    text: 'SpringCloudAlibaba', items: [
                      { text: 'SpringCloudAlibaba', link: '/pages/a8e8ff/' }
                    ]
                  },
                  {text:'链路追踪SkyWalking',link:'/pages/01d62e/'}
                ]
              },
              {
                text: '定时任务', items: [
                  { text: 'Java 定时任务大全', link: '/pages/ae063e/' },
                  { text: '分布式定时任务——Quartz', link: '/pages/ada754/' }
                ]
              },
              {
                text: 'Web服务器',  items: [
                  {text:'Nginx',link:'/pages/dd97c6/'}
                ]
              }
            ]
          },
          {
            text: '代码质量',  items: [
              {
                text: '设计模式', items: [
                  {text:'设计模式简介',link:'/pages/56a50e/'},
                  {text:'责任链模式',link:'/pages/62b3c2/'},
                  {text:'模版方法模式',link:'/pages/a2e658/'}
                ]
              },
              {text:'Java 命名规范',link:'/pages/d83c14/'},
              {text:'代码优化',link:'/pages/6281f2/'}
            ]
          }
        ]
      }
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    // logo: '/img/logo.png', // 导航栏logo
    repo: 'https://github.com/xiong201', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

    // docsDir: 'docs', // 编辑的文件夹
    // editLinks: true, // 编辑链接
    // editLinkText: '编辑',

    // 以下配置是Vdoing主题改动的和新增的配置
    sidebar: { mode: 'structuring', collapsable: true }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
    updateBar: { // 最近更新栏
      showToArticle: false, // 显示到文章页底部，默认true
      // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    pageButton: false,
    pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

    // contentBgStyle: 1,

    category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: 'Xiong', // 必需
      // href: 'https://github.com/xugaoyi' // 可选的
    },
    social: { // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      // icons: [
      //   {
      //     iconClass: 'icon-youjian',
      //     title: '发邮件',
      //     link: 'mailto:894072666@qq.com'
      //   },
      //   {
      //     iconClass: 'icon-github',
      //     title: 'GitHub',
      //     link: 'https://github.com/xugaoyi'
      //   },
      //   {
      //     iconClass: 'icon-erji',
      //     title: '听音乐',
      //     link: 'https://music.163.com/#/playlist?id=755597173'
      //   }
      // ]
    },
    footer: { // 页脚信息
      createYear: 2023, // 博客创建年份
      copyrightInfo: 'xiong201 | MIT License', // 博客版权信息，支持a标签
    },
    // htmlModules,
  },

  // 插件
  plugins: [
    // [require('./plugins/love-me'), { // 鼠标点击爱心特效
    //   color: '#11a8cd', // 爱心颜色，默认随机色
    //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    // }],

    ['fulltext-search'], // 全文搜索

    // ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
    //   thirdparty: [ // 可选，默认 []
    //     {
    //       title: '在GitHub中搜索',
    //       frontUrl: 'https://github.com/search?q=', // 搜索链接的前面部分
    //       behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
    //     },
    //     {
    //       title: '在npm中搜索',
    //       frontUrl: 'https://www.npmjs.com/search?q=',
    //     },
    //     {
    //       title: '在Bing中搜索',
    //       frontUrl: 'https://cn.bing.com/search?q='
    //     }
    //   ]
    // }],

    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode || '01293bffa6c3962016c08ba685c79d78'
      }
    ],

    ['one-click-copy', { // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false // 是否展示为横向样式
      }
    }],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs') // https://day.js.org/
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      }
    ]
  ],

  markdown: {
    // lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.js',
    // '.vuepress/config/htmlModules.js',
  ]
}