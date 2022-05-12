<template>
  <div id="gitalk-container"></div>
</template>

<script>
import Gitalk from 'gitalk';
  export default {
    name: "blog-comments",
    mounted() {
      const commentConfig = {
        // 是否开启
        enable: true,
        // clientID
        clientID: "2214c4c44457eea10226",
        // clientSecret
        clientSecret: "29f52de4029644023ba047d54671c9c921d6ffd4",
        // 评论项目名
        repo: 'study-record',
        owner: 'CrazyMrYan',
        admin: ['CrazyMrYan'],
        githubID:'CrazyMrYan',
        id: decodeURI(window.location.pathname),
        language:'zh-CN',
        distractionFreeMode: true
      };
      const gitalk = new Gitalk(commentConfig);
      gitalk.render("gitalk-container");
    },
  };
</script>

<style>
  @import url('https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css');
</style>