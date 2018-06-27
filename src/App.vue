<template>
    <div id="app">
        <g-header></g-header>
        <router-view></router-view>
        <g-footer></g-footer>
    </div>
</template>

<script>
import gHeader from './components/Header.vue'
import gFooter from './components/Footer.vue'
export default {
    name: 'app',
    components: {
        'g-header': gHeader,
        'g-footer': gFooter
    },
    methods: {
    }
}
</script>
<style>
    html, body, div, span, applet, object, iframe, h1, h2, h3,
    h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address,
    big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var, dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend, table, caption, tbody, tfoot,
    thead, tr, th, td, input, select {margin:0; padding:0; border:0 none; outline:0; color:inherit;}
    html, body {width:100%; height:100%;}
    body {margin:0 auto; font:12px/1 "Microsoft Yahei", "微软雅黑", sans-serif; vertical-align:baseline; overflow-y:scroll;}
    h1 {font-weight:bold; font-size:18px; line-height:18px; color:#474545;}
    h3 {font-weight:normal; font-size:12px; color:#746969;}
    h2, h4, h5, h6 {font-weight:normal; font-size:100%;}
    table {border-collapse:separate; border-spacing:0;}
    caption, th, td {text-align:left;font-weight:normal;}
    a {text-decoration:none;}
    p {line-height:22px; text-align:justify;}
    a img, iframe {border:none;}
    a:link {color:inherit;}
    :focus {outline:0;}
    /*img{ vertical-align:top;}*/
    ol, ul {list-style:none;}
    input, textarea, select, button {font-weight:inherit; font-size:inherit; *font-size:100%; font-family:inherit;}
    /* == clearfix == */
    .clearfix:after {display:block; height:0; clear:both; content:"\200B";}
    .clearfix {*zoom:1;}/*IE/7/6*/
    /* == 以上 reset Css == */
    body{
        background-color: #fff;
    }
</style>
