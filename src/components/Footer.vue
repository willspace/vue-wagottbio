<template>
    <div class="g-footer">
        <div class="u-server">
            <ul>
                <li><i class="i-logo i-24h"></i><p>7 X 24小时客户支持</p></li>
                <li><i class="i-logo i-1v1"></i><p>1 V 1 大客户服务</p></li>
            </ul>
        </div>
        <div class="container">
            <div class="u-contact">
                <ul class="u-about">
                    <li class="tlt">关于</li>
                    <li><a href="">公司介绍</a></li>
                    <li><a href="">产品中心</a></li>
                    <li><a href="">联系我们</a></li>
                    <li><a href="">加入我们</a></li>
                </ul>
                <ul class="u-cont">
                    <li class="tlt">联系方式</li>
                    <li>电话：+86-028-88678999</li>
                    <li>传真：+86-028-88678999</li>
                    <li>邮箱：info@wagottbio.com</li>
                </ul>
                <ul class="u-links">
                    <li class="tlt">友情链接</li>
                    <li><a href="http://www.customs.gov.cn/">中国海关</a></li>
                    <li><a href="http://www.cccmhpie.org.cn/">中国医药保健品商会</a></li>
                    <li><a href="http://www.scciq.gov.cn/">四川入境检验检疫局</a></li>
                </ul>
                <ul class="u-wx">
                    <li class="tlt">关注高华</li>
                    <li><i class="i-logo-wx"></i>&nbsp;微信公众号</li>
                    <li><img class="img-wxqrcode" src="../assets/images/wxqrcode.jpg" alt=""></li>
                </ul>
            </div>
            <div class="u-cpy">
                <p>成都市蒲江县寿安镇迎宾大道628号</p>
                <p>成都华高生物制品有限公司版权所有 &copy; 2012-{{new Date().getFullYear()}}&nbsp;&nbsp;·&nbsp;&nbsp;浙ICP备17006647号-2</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    props: [],
    data () {
        return {
        }
    }
}
</script>

<style scoped lang="scss">
    .g-footer {
        display: block;
        width: 100%;
        min-width: 1280px;
        background-color: #3f4640;
        .u-server{
            display: block;
            height: 140px;
            width: 100%;
            border-bottom: solid 1px #555;
            &>ul{
                display: block;
                height: 100%;
                width: 800px;
                padding: 0 240px;
                margin: 0 auto;
                &>li{
                    display: block;
                    position: relative;
                    float: left;
                    width: 400px;
                    height: 100%;
                    .i-logo{
                        position: absolute;
                        width: 50px;
                        height: 50px;
                        left: 50%;
                        margin-left: -25px;
                        top:30px;
                        background-size: 100%;
                        &.i-24h{
                            background-image: url(../assets/icons/24h.png);
                        }
                        &.i-1v1{
                            background-image: url(../assets/icons/1v1.png);
                        }
                    }
                    &>p{
                        display: block;
                        position: absolute;
                        top:100px;
                        width: 100%;
                        color:#fff;
                        font-size: 16px;
                        text-align: center;
                    }
                }
            }
        }
        .container{
            display: block;
            position: relative;
            margin: 0 auto;
            height: 100%;
            width: 1280px;
            color: #999;
            font-size: 14px;
            .u-contact{
                display: block;
                height: 300px;
                margin-top: 50px;
                &>ul{
                    display: block;
                    float: left;
                    line-height: 40px;
                    height: 230px;
                    padding-top: 30px;
                    padding-left: 70px;
                    &.u-about{
                        width: 180px;
                    }
                    &.u-cont, &.u-links{
                        width: 240px;
                        border-left: solid 1px #555;
                    }
                    &.u-wx{
                        width: 300px;
                        border-left: solid 1px #555;
                        .i-logo-wx{
                            display: inline-block;
                            height: 20px;
                            width: 20px;
                            vertical-align: middle;
                            background: url(../assets/icons/weixin_icon.png) no-repeat -20px 0;
                        }
                        .img-wxqrcode{
                            width: 120px;
                            height: 120px;
                        }
                        &:hover .i-logo-wx{
                            background-position: 0 0;
                        }
                    }
                    & > li {
                        display: block;
                        &.tlt {
                            font-size: 16px;
                            color:#ccc;
                        }
                        &>a:hover{
                            color:#ddd;
                        }
                    }
                }
            }
            .u-cpy {
                height: 86px;
                padding-top: 20px;
                &> p {
                    display: block;
                    line-height: 32px;
                    text-align: center;
                }
            }

        }
    }
</style>
