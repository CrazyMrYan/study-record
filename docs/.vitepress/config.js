// vitepress/config.js
module.exports = {
  title: "study-record", // 网站标题
  description: "学习的记录", //网站描述
  base: "/", //  部署时的路径 默认 /  可以使用二级地址 /base/
  // lang: 'en-US', //语言
  head: [
    // 改变title的图标
    [
      "link",
      {
        rel: "icon",
        href: "/images/link-three.png" //图片放在public文件夹下
      }
    ]
  ],
  // 主题配置
  themeConfig: {
    docsDir: "docs",
    repo: "CrazyMrYan/study-record",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "去GitHub编辑",
    lastUpdated: "最后更新于",
    nav: [
      { text: "首页", link: "/", activeMatch: "^/$|^/study/" },
      {
        text: "关于",
        link: "/about/"
      }
    ],
    sidebar: {
      "/about/": getConfigSidebar(),
      "/": getHomeSidebar()
    }
  }
};

function getHomeSidebar() {
  return [
    {
      text: "Vue",
      children: [
        { text: "自己动手写一个render函数", link: "/study/vue/api/vue-Render" },
        { text: "学习使用 render", link: "/study/vue/api/vue-RenderStudy" },
        { text: "Vue 奇淫技巧", link: "/study/vue/api/vue-technique" },
        { text: "从0到1 搭建一个UI组件库", link: "/study/vue/component/2021-03-31Vuecomponents" },
        { text: "深入 vue 组件库的按需引入", link: "/study/vue/component/2021-04-01" },
        { text: "如何优化 祖传代码", link: "/study/vue/optimize/vue-Optimize" },
      ]
    },
    {
      text: "Package",
      children: [
        { text: "压缩包在线预览", link: "/study/package/js_zip/" },
        { text: "Vue", children: [
          {text: '推荐一些奇奇怪怪的好东西', link: "/study/package/vue/vue-PlugIn"},
          {text: '详解 vue-tree-color  ', link: "/study/package/vue/vue-TreeColor"}
        ] },
        { text: "Baidu Map", link: "/study/package/baidu-map/vue-BaiduMap" },
        { text: "Echarts", children: [
            {
              text: "Vue 项目使用 Echarts",
              link: "/study/package/echarts/echarts-Map"
            },
            {
              text: "Echarts Map",
              link: "/study/package/echarts/vue-Echarts"
            }]
       }
      ]
    },
    {
      text: "Nodejs",
      children: [{ text: "讯飞语音小助手", link: "/study/node/node-xunfei" }]
    },
    {
      text: "JS",
      children: [
        { text: "与后台对接SSE记录", link: "/study/js/sse/" },
        { text: "深浅拷贝", link: "/study/js/es6/depth-Copy" },
        {
          text: "网站监控",
          children: [
            {
              text: "网站监控1",
              link: "/study/js/es5/website-Monitoring"
            },
            {
              text: "网站监控2",
              link: "/study/js/es5/website-Monitoring2"
            }
          ]
        }
      ]
    },
    {
      text: "GitHub",
      children: [{ text: "快速搭建 gitalk 评论", link: "/study/github/gitalk-Study" }]
    },
    {
      text: "Raspberry",
      children: [{ text: "安装系统", link: "/study/raspberry-pi/Raspberry-Pi" }]
    },
    {
      text: 'Svelte',
      children: [
        { text: "初识Svelte", link: "/study/Svelte/svelte-Study" },
      ]
    }
  ];
}

function getConfigSidebar() {
  return [
    {
      text: "关于",
      children: [{ text: "个人介绍", link: "/about/" }]
    }
  ];
}
