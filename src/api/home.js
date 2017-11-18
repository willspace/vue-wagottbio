/**
 * Mocking client-server processing
 */
const _navs = [
  {name:"首页"},
  {name:"公司介绍",sub:[{name:"关于我们"},{name:"企业理念"},{name:"荣誉资质"}]},
  {name:"新闻咨询",sub:[{name:"公司新闻"},{name:"行业动态"},{name:"提取物顾问"}]},
  {name:"产品中心",sub:[{name:"Sub 1"},{name:"Sub 2"}]},
  {name:"质量管理",sub:[{name:"Sub 1"}]},
  {name:"种植基地"},
  {name:"在线办公"},
  {name:"联系我们"}
];

export default {
  getHomeNavs (cb) {
    setTimeout(() => cb(_navs), 100)
  }
}
