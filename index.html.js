export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"modules\":[\"BannerBrand\",\"MdContent\"],\"bannerBrand\":{\"bgImage\":\"/bg.svg\",\"title\":\"里海\",\"description\":\"点亮对生活的好奇心\",\"tagline\":\"很多人30岁就死了，等到80岁才埋，你不要当这样的人\",\"buttons\":[{\"text\":\"计算机书籍\",\"link\":\"/docs/theme-reco/\"},{\"text\":\"业余书籍\",\"link\":\"/docs/books/\",\"type\":\"plain\"}],\"socialLinks\":[{\"icon\":\"LogoGithub\",\"link\":\"https://github.com/vuepress-reco/vuepress-theme-reco\"}]},\"blog\":{\"socialLinks\":[{\"icon\":\"LogoGithub\",\"link\":\"https://github.com/recoluan\"}]},\"isShowTitleInHome\":true,\"actionText\":\"About\",\"actionLink\":\"/views/other/about\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
