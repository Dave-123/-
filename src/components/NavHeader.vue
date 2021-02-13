<template>
    <div class="header">
       <div class="nav-topbar">
           <div class="container">
               <div class="nav-right">
                   <a href="#">小米商城</a>
                   <a href="#">MIU</a>
                   <a href="#">CLI</a>
                   <a href="#">服务</a>
               </div>
               <div class="nav-left">
                   <a href="#">登录</a>
                   <a href="#">注册</a>
                   <a href="#"><span class="mycart"><div class="shopping-cart"></div>购物车</span></a>
               </div>
           </div>
       </div>
       <div class="nav-header">
           <div class="container">
               <div class="header-logo">
                   <a href="#"></a>
               </div>
               <div class="header-menu">
                   <div class="item-menu">
                       <span>小米手机</span>
                       <div class="children"></div>
                   </div>
                   <div class="item-menu">
                       <span>红米</span>
                       <div class="children"></div>
                   </div>
                   <div class="item-menu">
                       <span>电视</span>
                       <div class="children"></div>
                   </div>
               </div>
               <div class="header-search"></div>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import '../assets/scss/base.scss';
    .header{
        .nav-topbar{
            height: 39px;
            line-height: 39px;
            text-align: center;
            background-color: black;
            .container{
                display: flex;
                justify-content:space-between;
                align-items: center;
                .nav-right{
                    a{
                        line-height: 39px;
                        text-align: center;
                        color:#ffffff;
                        margin-right:7px;
                    }
                }
                .nav-left{
                    a{
                        display: inline-block;
                        color:#ffffff;
                        margin-left: 17px;
                        .mycart{
                            display: inline-block;
                            width: 110px;  
                            background-color: #FF6600;         
                            .shopping-cart{
                            display: inline-block;
                            align-items: center;
                            width: 16px;
                            height: 12px;
                            background:url('../public/imgs/icon-cart.png') no-repeat center;
                            background-size: contain;
                            margin-right: 4px;
                            }
                        }
                        
                    }
                }
            }
        }
        .nav-header{
            .container{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 110px;
                .header-logo{
                    width: 55px;
                    height: 55px;
                    background-color:#FF6600;
                    a{
                        display: inline-block;
                        width: 110px;
                        height: 55px;
                        overflow: hidden;
                        &:before{    
                            content: ' ';
                            width: 55px;
                            height: 55px;
                            display: inline-block;
                            background:url('../public/imgs/mi-logo.png') no-repeat center;
                            background-size: contain;
                            display: inline-block;
                            transition: margin .2s;
                            
                        }
                        &:after{
                            content: ' ';
                            width: 55px;
                            height: 55px;
                            display: inline-block;
                            background:url('../public/imgs/mi-home.png') no-repeat center;
                            background-size: contain;
                        }
                        &:hover:before{
                            margin-left:-55px;
                        }
                    }
                }
                
            }
        }
    }
</style>