<script>
    export default {
        data(){
            return{
                linkArr: [
                     {
                        title: 'GET STARTED',
                        link1: 'Resources',
                        link2: 'Tutorials',
                        link3: 'Examples',
                        link4: 'Docs',
                     },
                     {
                        title: 'ABOUT',
                        link1: 'Stories',
                        link2: 'Community',
                        link3: 'Blog',
                        link4: 'Brand Assets',
                     },
                     {
                        title: 'FEATURES',
                        link1: 'Overview',
                        link2: 'Design',
                        link3: 'Code',
                        link4: 'Collaborate',
                     },
                     {
                        title: 'QUICK LINKS',
                        link1: 'Stories',
                        link2: 'Community',
                        link3: 'Blog',
                        link4: 'Brand Assets',
                     },
                ],
            }
        }
        
    }
</script> 

<template>
    <div class="black-bg">
        <div class="red-bg">
            <div class="triangle-down"></div>
            <div class="container-width">
                <div class="upper-footer">
                    <div class="links">
                        <ul v-for="(linko, i) in linkArr" :key="i">
                            <li class="title"><a href="#">{{ linko.title }}</a></li>
                            <li class="norm"><a href="#">{{ linko.link1 }}</a></li>
                            <li class="norm"><a href="#">{{ linko.link2 }}</a></li>
                            <li class="norm"><a href="#">{{ linko.link3 }}</a></li>
                            <li class="norm"><a href="#">{{ linko.link4 }}</a></li>
                        </ul>
                    </div>
                    <div class="form">
                        <span>SUBSCRIBE TO NEWSLETTER</span>
                        <div class="inputs">
                            <input type="text" placeholder="Email">
                            <button>SUBSCRIBE</button>
                        </div>
                       
                    </div>
                </div>
                <div class="lower-footer">
                    <div class="logo">
                        <img src="../assets/img/anime-whitelogo-300x89.png" alt="">
                    </div>
                    <div class="copyrights">
                        <span>&copy; Anime Tech, Theme by LamboDev</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>



<style lang="scss" scoped>
    @use '../assets/styles/partials/variables.scss' as *;
    $red: #BF1D2E;
    $white: #FFFFFF;
    $gray: #F3F3F3;
    $black: #333333;
    .black-bg{
        height: 38vh;
        background-color: $black;
        position: relative;
        .red-bg{
            height: 37.5vh;
            background-color: $red;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            .triangle-down {
                width: 0; 
                height: 0; 
                border-left: 13px solid transparent;
                border-right: 13px solid transparent;
                border-top: 11px solid $black;
                position: absolute;
                top: 0;
                left: 49.3%;
            }
            .container-width{
                @include width-1250;
                .upper-footer{
                    display: flex;
                    .links{
                        margin-top: 3rem;
                        flex: 0 0 70%;
                        display: flex;
                        gap: 1rem;
                        ul{
                            flex: 0 0 calc(25%);
                            list-style-type: none;
                            color: white;
                            .title{
                                margin-bottom: 1rem;
                                font-size: 1.2rem
                            }
                            .norm{
                                margin-bottom: 0.5rem;
                            }
                            a{
                                text-decoration: none;
                                color: white
                            }
                        };
                    }
                    .form {
                        flex: 0 0 30%;
                        margin-top: 3rem;
                        display: flex;
                        flex-direction: column;
                        font-size: 1.2rem;
                        color: white;
                        align-items: center;
                        position: relative;
                        .inputs{
                            width: 20rem ;
                            position: absolute;
                            top: 16%;
                            left: 15%;
                            input{
                                height: 3rem;
                                width: 100%;
                                border-radius: 5px;
                                border: 1px solid $black;
                                margin-top: 1rem;
                                padding-inline: 1rem;
                                font-size: 1.1rem;
                            }
                            button{
                                width: 100%;
                                height: 3rem;
                                border-radius: 5px;
                                border: 1px solid $black;
                                background-color: #545454;
                                margin-top: 0.5rem;
                                padding-inline: 1rem;
                                font-size: 1.1rem;
                                color: white;
                            }
                        }
                    }
                }
                .lower-footer{
                    margin-top: 3rem;
                    border-top: 1px solid white;
                    height: 11.4vh;
                    display: flex;
                    justify-content: space-between;
                    .logo{
                        height: 100%;
                        display: flex;
                        align-items: center;
                        img{
                            height: 75px;
                            width: auto;
                        }
                    }
                    .copyrights{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                    }
                }
            }
        }
    }
</style>