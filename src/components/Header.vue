<template>
  <div class="g-header" :style="headerSty">
      <div id="header">
          <div class="g-wrap">
              <a id="logo" href=""></a>
              <ul id="nav">

                <li :class="['i-nav',{'more':!!nav.sub,'w2': nav.name.length == 2 }]" v-for="nav in home.navs">
                  <a href="" class="a-nav"><span>{{nav.name}}</span><span class="bkg"></span></a>
                  <span class="sub-nav" v-if="nav.sub">
                          <a href="" class="i-snav" v-for="s in nav.sub">{{s.name}}</a>
                      </span>
                </li>

              </ul>
              <div id="shop">
                  <a class="btn-lang tmp-unselect" href="javascript:void(0);">中/EN</a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  import {mapState,mapGetters} from "vuex";
export default {
  props: [],
  data () {
    return {
      headerSty: 'background-color:rgba(255,255,255,0);color:#fff'
    }
  },
  computed: {
    ...mapState(['home']),
    ...mapGetters(['navs'])
  },
  mounted: function () {
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
    })
  },
  methods: {
    onScroll () {
      let _sTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      this.setHeaderBgOpty(_sTop);
    },
    setHeaderBgOpty(_sTop){
      let _ov = Math.floor(_sTop / 2) / 100;
      if (_ov > 0.9 && this._tov == 0.9) {
        return;
      } else if (_ov > 0.9) {
        this._tov = 0.9;
      } else if (_ov >= 0) {
        this._tov = _ov;
      }
      if (this._tov > 0.6) {
        this.noTextShadow = true;
      } else {
        this.noTextShadow = false;
      }
      this.headerSty = ['background-color:rgba(255,255,255,', this._tov, ');color:rgb(', Math.floor((1 - this._tov) * 255), ',', Math.floor((1 - this._tov) * 255), ',', Math.floor((1 - this._tov) * 255), ');', this.noTextShadow ? 'text-shadow:none;font-weight:bold;' : ''].join('');
    }
  }
}
</script>

<style scoped lang="scss">
    .g-header {
      position: fixed;
      z-index: 1000;
      width: 100%;
      background-color: #fff;
      color: #fff;
      text-shadow: 1px 0px 1px #000;
      #header {
        display: block;
        margin: 0 auto;
        width: 1280px;
        position: relative;
        z-index: 5;
        height: 79px;
      }
      #logo {
        position: absolute;
        top: 15px;
        left: 60px;
        width: 100px;
        height: 54px;
        background: url('../assets/icons/logo.png') no-repeat;
      }
      #nav {
        position: absolute;
        top: 0;
        right: 120px;
        z-index: 4;
        height: 100%;
        .i-nav {
          position: relative;
          display: block;
          float: left;
          width: 90px;
          height: 100%;
          -webkit-transition: background-color 700ms;
          transition: background-color 700ms;
          &.w2 {
            width: 70px;
          }
          .a-nav {
            position: relative;
            z-index: 2;
            display: block;
            width: 100%;
            height: 100%;
            font-size: 13px;
            line-height: 79px;
            text-align: center;
            overflow: hidden;
            &.on {
              /*border-bottom: solid 2px #489427;*/
              &:before{
                content: "";
                display: block;
                position: relative;
                height: 3px;
                width: 80%;
                left: 11%;
                top:60px;
                background-color: #489427;
              }
            }
            & > span {
              position: absolute;
              left: 0;
              top: 0;
              z-index: 2;
              width: 100%;
              height: 100%;
            }
            .bkg {
              top: 100%;
              z-index: 1;
              background-color: #489427;
              -webkit-transition: top 200ms;
              transition: top 200ms;
            }

          }
          &:hover .a-nav {
            & > span {
              color: #fff;
            }
            .bkg {
              top: 0;
            }
          }
          .sub-nav {
            position: absolute;
            height: 50px;
            min-width: 100%;
            background-color: #999;
            background-color: rgba(100, 100, 100, .7);
            white-space: nowrap;
            color: #fff;
            bottom: -50px;
            transition: all ease .2s;
            left: 60px;
            opacity: 0;
            visibility: hidden;
            .i-snav {
              display: inline-block;
              height: 50px;
              min-width: 70px;
              text-align: center;
              line-height: 50px;
              padding: 0 20px;
              transition: all ease .15s;
              &:hover {
                background-color: #ccc;
                color: #489427;
              }
            }
          }
          &.more:hover .sub-nav {
            bottom: -50px;
            left: 0;
            opacity: 1;
            visibility: visible;
          }
        }

      }

      #shop {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 5;
        width: 100px;
        height: 100%;
        .btn-lang {
          position: absolute;
          top: 0;
          right: 30px;
          padding: 0 10px;
          width: auto;
          height: 100%;
          font-weight: bold;
          font-size: 13px;
          line-height: 76px;
          &:hover {
            color: #489427;
          }
        }
      }
    }
</style>
