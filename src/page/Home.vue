<template>
  <div class="g-body">
    <top-banner></top-banner>
    <div class="u-news">
      <a href="" class="hot-new">
        <p class="tlt">植物提取物全球主要植物提取物生产企业简介</p>
        <p class="sub-tlt">国内（东北地区）：
          大兴安岭林格贝寒带生物产业集团：是一家专业生产蓝莓花青素，果粉以及各种植物提取物的企业。90%以上的产品出口美国，日本，欧洲等地。
          国内（陕西地区）：
          1、陕西嘉禾植物化工有限责任公司：原老总曾销售原料，起步较早，发展较快，主导产品为贯叶连翘、枳实、育亨宾等。 ···</p>
      </a>
      <div class="u-list">
        <div class="u-tab">
          <span class="i-tab">公司新闻</span>
          <span class="i-tab">行业动态</span>
          <span class="i-tab">提取物顾问</span>
          <div class="sub-line"><span class="slide-bar"></span></div>
        </div>
        <div class="u-box">
          <ul>
            <li><a href=""><span class="i-time">2017.05.05</span>日内瓦 VITA FOOD 2017</a></li>
            <li><a href=""><span class="i-time">2017.03.29</span>FIC 2017 展会回顾</a></li>
            <li><a href=""><span class="i-time">2017.03.10</span>美国天然有机食品展览会</a></li>
            <li><a href=""><span class="i-time">2017.03.03</span>上海2017FIC展会</a></li>
            <li><a href=""><span class="i-time">2017.03.03</span>上海2017FIC展会</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="u-certificate">
      <ul>
        <li class="first-li">
          <i class="ic-eco"></i>
          <p>欧盟ECOCERT有机认证</p>
        </li>
        <li>
          <i class="ic-cqc"></i>
          <p>食品安全管理体系认证</p>
        </li>
        <li>
          <i class="ic-cccm"></i>
          <p>植物提取物优质供应商</p>
        </li>
        <li>
          <i class="ic-halal"></i>
          <p>印尼清真认证</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import topBanner from '../components/Banner.vue'
export default {
    name: 'indexBody',
    components: {
        'top-banner': topBanner
    },
    data(){
        return {}
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .u-news{
    display: block;
    width: 1280px;
    height: 166px;
    margin: 20px auto;
    .hot-new{
      display: block;
      float: left;
      height: 144px;
      padding: 10px 40px;
      width: 580px;
      margin-left: 15px;
      &:hover{
        outline: solid 1px #eee;
        background-color: #f6f6f6;
      }
      .tlt{
        display: block;
        font-weight: bold;
        font-size: 16px;
        color:#555;
        line-height: 26px;
        margin: 10px 0;
      }
      .sub-tlt{
        color:#666;
        font-size: 14px;
        height: 88px;
        overflow: hidden;
        line-height: 22px;
        word-break: break-word;
      }
    }
    .u-list{
      display: block;
      float: right;
      width: 580px;
      height: 164px;
      .u-tab{
        display: block;
        height:50px;
        font-size: 14px;
        .i-tab{
          display: block;
          float: left;
          width: 100px;
          height: 40px;
          line-height: 40px;
          margin-top: 5px;
          text-align: center;
          color:#333;
          cursor: pointer;
          &:hover{
            background-color: #f0f7f1;
          }
        }
        .sub-line{
          display: block;
          position: relative;
          clear: both;
          height: 2px;
          background: #ccc;
          .slide-bar{
            display: inline-block;
            position: absolute;
            width: 100px;
            height: 2px;
            background-color: #489427;
            top:0;
          }
        }
      }
      .u-box{
        display: block;
        height: 98px;
        padding-top:14px;
        font-size: 13px;
        &>ul{
          display: block;
          height: 100%;
          width: 100%;
          overflow: hidden;
          &>li{
            display: block;
            height: 24px;
            line-height: 24px;
            a{
              color:#777;
              padding-top:16px;
              &:hover{
                color:#489427;
              }
              .i-time{
                display: inline-block;
                width: 80px;
              }
            }
          }
        }
      }
    }
  }
  .u-certificate{
    display: block;
    height:200px;
    min-width: 1280px;
    background-color:#f0f3f7;
    &>ul{
      display: block;
      width: 1280px;
      margin: 0 auto;
      &>li{
        display: block;
        width: 24%;
        height: 60px;
        float: left;
        margin-top: 80px;
        border-left: solid 1px #dedede;
        &.first-li{border-left: none;}
        &>i{
          display: block;
          height: 50px;
          width: 75px;
          margin: 0 auto;
          background-repeat: no-repeat;
          background-size: 75px 50px;
          margin-top: -15px;
          &.ic-eco{
            background-image: url(../assets/images/cf-eco.png);
          }
          &.ic-cqc{
            background-image: url(../assets/images/cf-cqc.jpg);
          }
          &.ic-cccm{
            background-image: url(../assets/images/cf-cccm.jpg);
          }
          &.ic-halal{
            background-image: url(../assets/images/cf-halal.jpeg);
          }
        }
        &>p {
          text-align: center;
          font-size: 16px;
          margin-top: 20px;
          color: #666;
        }
      }
    }
  }
</style>
