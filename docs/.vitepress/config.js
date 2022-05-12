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
      text: "Package",
      children: [{ text: "压缩包在线预览", link: "/study/package/js_zip/" }]
    },
    {
      text: "GitHub",
      children: [{ text: "快速搭建 gitalk 评论", link: "/study/github/gitalk-Study" }]
    },
    {
      text: "Nodejs",
      children: [{ text: "讯飞语音小助手", link: "/study/node/node-xunfei" }]
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
