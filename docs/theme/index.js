import Comment from "./components/Comment.vue";

export default {
  enhanceApp({ app, router, siteData }) {
    app.component("Comment", Comment);
  },
};