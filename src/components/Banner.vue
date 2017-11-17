<template>
  <div class="g-banner" @mouseover="bannerMouseOver" @mouseout="bannerMouseOut">
      <ul class="pics">
          <template v-for="(item, index) in banners">
              <li class="i-bn"  :style="'background-image: url('+item.imgUrl+'); opacity:'+ (bannerShowIndex === index ?'1':'0')+';'">
                  <a :href="item.aUrl" v-if="item.aUrl"></a>
              </li>
          </template>
      </ul>
      <div class="btns">
          <a :class="'prev'+(mouseOver?' on':'')" href="javascript:void(0);" @click="bannerPrev"><span class="off"></span><span class="on"></span></a>
          <a :class="'next'+(mouseOver?' on':'')" href="javascript:void(0);" @click="bannerNext"><span class="off"></span><span class="on"></span></a>
      </div>
      <div class="g-wrap">
          <ul class="idxs">
              <template v-for="(item, index) in banners">
                  <li v-if="bannerShowIndex == index" class="on"></li>
                  <li v-else @click="jumpToIndex(index)"></li>
              </template>
          </ul>
      </div>
  </div>
</template>

<script>
import imgBanner1 from '../assets/images/banner1.jpg'
import imgBanner2 from '../assets/images/banner2.jpg'
import imgBanner3 from '../assets/images/banner3.jpg'
import imgBanner4 from '../assets/images/banner4.jpg'
export default {
    props: [],
    data () {
        return {
            banners: [
                {imgUrl: imgBanner1, aUrl: ''},
                {imgUrl: imgBanner2, aUrl: ''},
                {imgUrl: imgBanner3, aUrl: ''},
                {imgUrl: imgBanner4, aUrl: ''}
            ],
            bannerShowIndex: 0,
            mouseOver:0
        }
    },
    watch: {
        bannerShowIndex() {

        }
    },
    mounted() {
        this.bannerAnitStart();
    },
    methods: {
        jumpToIndex(index) {
            this.bannerShowIndex = index;
        },
        bannerAnitStart(){
            this.bannerAnit = setInterval(()=>{
                this.bannerNext();
            },5000);
        },
        bannerAnitStop(){
            clearInterval(this.bannerAnit);
        },
        bannerNext(){
            var _i = this.bannerShowIndex + 1;
            if( _i >= this.banners.length){
                _i = 0;
            }
            this.jumpToIndex(_i);
        },
        bannerPrev(){
            var _i = this.bannerShowIndex - 1;
            if( _i < 0){
                _i = this.banners.length -1;
            }
            this.jumpToIndex(_i);

        },
        bannerMouseOver(){
            this.bannerAnitStop();
            this.mouseOver = 1;
        },
        bannerMouseOut(){
            this.bannerAnitStart();
            this.mouseOver = 0;
        }
    }
}

</script>

<style scoped lang="scss">
    .g-banner {
        display: block;
        position: relative;
        margin: 0 auto;
        width: 100%;
        min-width: 1280px;
        max-width: 2600px;
        height: 500px;
        background-color: #eee;
        overflow:hidden;
        z-index:2;
        .pics {position:relative; width:100%; height:100%;
            .i-bn {
                position:absolute; top:0; left:0; z-index:2; width:100%; height:100%; background-repeat:no-repeat;background-size: cover;background-position: center;transition: opacity ease 1s;
                a {display:block; width:100%; height:100%;}
            }
        }
        .btns {
            &>a {position:absolute; top:50%; z-index:4; margin-top:-25px; width:50px; height:50px; transition:left 400ms, right 400ms;}
            .prev {left:-50px;}
            .next {right:-50px;}
            .prev.on {left:120px;}
            .next.on {right:120px;}
            &>a span {position:absolute; top:0; left:0; width:100%; height:100%;  transition:opacity 300ms; cursor:pointer;
                &.off {opacity:1; display:block\9;}
                &.on {opacity:0; display:none\9;}
            }
            .prev .off {background:url(../assets/icons/arrow-left2.png) no-repeat 0 0;}
            .prev .on  {background:url(../assets/icons/arrow-left.png) no-repeat 0 0;}
            .next .off {background:url(../assets/icons/arrow-right2.png) no-repeat 0 0;}
            .next .on {background:url(../assets/icons/arrow-right.png) no-repeat 0 0;}
            &>a:hover{
                .off {opacity:0; display:none\9;}
                .on {opacity:1; display:block\9;}
            }
        }

        .g-wrap {position: absolute; left: 100px; bottom: 0; z-index: 2; width: 200px; height: 30px; overflow: hidden;
            .idxs {float:left; height:100%;
                &>li {float:left; margin:0px 7px 0 0; width:9px; height:9px; border-radius:13px; border:2px solid #fff; cursor:pointer; -ms-transition:background-color 1000ms, margin-top 500ms, border-color 1000ms; transition:background-color 1000ms, margin-top 500ms, border-color 1000ms; -webkit-transition:background-color 1000ms, margin-top 500ms, border-color 1000ms; -moz-transition:background-color 1000ms,  margin-top 500ms, border-color 1000ms; -o-transition:background-color 1000ms, margin-top 500ms, border-color 1000ms;}
                &>li.on {background-color:#489427; border-color:#489427;}
            }
        }
    }
</style>
