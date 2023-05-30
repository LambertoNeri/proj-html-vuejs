<script>
    export default {
        data() {
            return{

            };
        },
    }
</script>

<template>

    <div class="bg-container">
        <div class="max-width-container">

            <div class="container-one">
                <div class="side left">
                <div class="first card">
                    <img src="../assets/img/anime-fashion.webp" alt="">
                    <div class="pills-container">
                        <span class="pill one">Fashion</span>
                        <span class="pill two">Lifestyle</span>
                    </div>
                    <div class="infos">
                        <span class="demo">
                            <font-awesome-icon class="fa" icon="fa-solid fa-user" /> demo
                            <font-awesome-icon class="fa" icon="fa-solid fa-calendar-days" /> December 25, 2022
                        </span>
                        <span class="title">Fashion Trend Now A Days</span>
                    </div>
                </div>
                <div class="second card">
                    <img src="../assets/img/travel-alone.webp" alt="">
                    <div class="pills-container">
                        <span class="pill one">Stories</span>
                        <span class="pill two">Travel</span>
                    </div>
                    <div class="infos">
                        <span class="demo">
                            <font-awesome-icon class="fa" icon="fa-solid fa-user" /> demo
                            <font-awesome-icon class="fa" icon="fa-solid fa-calendar-days" /> December 26, 2022
                        </span>
                        <span class="title">Traveling Alone Is Awesome</span>
                    </div>
                </div>
            </div>


            <div class="central">
                <div class="pills-container">
                    <div class="pill one">
                        Lifestyle
                    </div>
                    <div class="pill two">
                        Stories
                    </div>
                    <div class="pill three">
                        Travel
                    </div>
                </div>
                <img src="../assets/img/best-places.webp" alt="">
                <div class="infos">
                        <span class="demo">
                            <font-awesome-icon class="fa" icon="fa-solid fa-user" /> demo
                            <font-awesome-icon class="fa" icon="fa-solid fa-calendar-days" /> December 25, 2022
                        </span>
                        <span class="title">Music The Love Of My Life</span>
                    </div>
            </div>


            <div class="side right">
                <div class="first card">
                    <img src="../assets/img/external-pic/music-love.webp" alt="">
                    <div class="pills-container">
                        <span class="pill one">Culture</span>
                        <span class="pill two red">Lifestyle</span>
                    </div>
                    <div class="infos">
                        <span class="demo">
                            <font-awesome-icon class="fa" icon="fa-solid fa-user" /> demo
                            <font-awesome-icon class="fa" icon="fa-solid fa-calendar-days" /> December 25, 2022
                        </span>
                        <span class="title">Music The Love Of My Life</span>
                    </div>
                </div>
                <div class="second card">
                    <img src="../assets/img/visit-france.webp" alt="">
                    <div class="pills-container">
                        <span class="pill one">Lifestyle</span>
                        <span class="pill two">Travel</span>
                    </div>
                    <div class="infos">
                        <span class="demo">
                            <font-awesome-icon class="fa" icon="fa-solid fa-user" /> demo
                            <font-awesome-icon class="fa" icon="fa-solid fa-calendar-days" /> December 26, 2022
                        </span>
                        <span class="title">Reasons To Visit France</span>
                    </div>
                </div>
            </div> 
            </div>

            <div class="container-two">
                <div class="two-header">
                    <span>LIFESTYLE & STORIES</span>
                    <div class="pills-container">
                        <div class="pill one">ALL</div>
                        <div class="pill two">LIFESTYLE</div>
                        <div class="pill three">STORIES</div>
                    </div>
                </div>
                <div class="two-main">
                    <div class="left">
                        <img src="../assets/img/success-story.webp" alt="">
                        <div class="pill">Culture</div>
                        <div class="infos">
                            <span class="demo">
                                <font-awesome-icon class="fa" icon="fa-solid fa-user" /> demo
                                <font-awesome-icon class="fa" icon="fa-solid fa-calendar-days" /> December 26, 2022
                            </span>
                            <span class="title">The Best Success Stories</span>
                        </div>
                    </div>
                    <div class="right">

                        <div class="section">
                            <div class="pic one">
                                <span class="pill-one">Stories</span>
                                <img src="../assets/img/travel-alone-300x200.webp" alt="">
                            </div>
                            <div class="infos">
                                <span class="demo">
                                    <font-awesome-icon class="fa" icon="fa-solid fa-user" /> demo
                                    <font-awesome-icon class="fa" icon="fa-solid fa-calendar-days" /> December 26, 2022
                                </span>
                                <span class="title">The Best Success Stories</span>
                            </div>
                        </div>

                        <div class="section">
                            <div class="pic">
                                <span class="pill">Lifestyle</span>
                                <img src="../assets/img/best-places-300x200.webp" alt="">
                            </div>
                            <div class="infos">
                                <span class="demo">
                                    <font-awesome-icon class="fa" icon="fa-solid fa-user" /> demo
                                    <font-awesome-icon class="fa" icon="fa-solid fa-calendar-days" /> December 26, 2022
                                </span>
                                <span class="title">The Best Success Stories</span>
                            </div>
                        </div>

                        <div class="section">
                            <div class="pic">
                                <span class="pill">Culture</span>
                                <img src="../assets/img/external-pic/music-love.webp" alt="">
                            </div>
                            <div class="infos">
                                <span class="demo">
                                    <font-awesome-icon class="fa" icon="fa-solid fa-user" /> demo
                                    <font-awesome-icon class="fa" icon="fa-solid fa-calendar-days" /> December 26, 2022
                                </span>
                                <span class="title">The Best Success Stories</span>
                            </div>
                        </div>
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
    .bg-container{
        background-color: $white;
        .max-width-container{
            @include width-1250;
           .container-one {
                display: flex;
                gap: 0.7rem;
                padding-top: 3rem;
                height: 550px;
                .side{
                flex: 0 0 calc(25% - 0.5rem);
                display: flex;
                flex-direction: column;
                gap: 0.7rem;
                .card{
                    height: calc(50% - 0.35rem);
                    position: relative;
                    img{
                        display: block;
                        height: 100%;
                        border-radius: 5px;
                        width: 100%;
                        filter: brightness(60%);
                    }
                    .pills-container{
                        position: absolute;
                        top: 0.8rem;
                        left: calc(25% );
                        @include flex-center;
                        gap: 0.5rem;
                        .pill{
                            @include pill;
                            padding-bottom: 0.3rem;
                            padding-top: 0.3rem;
                            font-weight: 600;
                            color: rgb(100, 100, 100);
                        }
                        .red{
                            color: rgb(191, 29, 46, 70%);
                        }
                    }
                    .infos{
                        @include info;
                        .demo{
                            .fa{
                                margin-bottom: 0.1rem;
                            }
                        }
                        .title{
                            font-weight: 800;
                        }             
                    }
                }
            }
            .central{
                flex: 0 0 calc(50% - 0.35rem);
                background-color: orange;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: brightness(60%);
                }
                .pills-container{
                    display: flex;
                    position: absolute;
                    z-index: 1000;
                    top: 0.8rem;
                    gap: 0.5rem;
                    left: calc(25% + 1rem);
                    .pill{
                        @include pill;
                        padding-bottom: 0.3rem;
                        padding-top: 0.3rem;
                        font-weight: 600;
                        color: rgb(100, 100, 100);
                    }
                }
                .infos{
                    @include info;
                }
                
            }
            }
            .container-two{
                margin-top: 3rem;
                .two-header{
                    display: flex;
                    justify-content: space-between;
                    span {
                        font-size: 1.5rem;
                        font-weight: 600;
                        word-spacing: 0.3rem;
                        letter-spacing: 0.07rem
                    }
                    .pills-container{
                        @include flex-center;
                        gap: 1.3rem;
                        .pill{
                            @include pill;
                            background-color: rgb(95, 95, 95);
                            padding-bottom: 0.4rem;
                            padding-top: 0.4rem;
                            padding-inline: 1.5rem;
                            font-weight: 400;
                            color: white;
                        }
                    }
                }
                .two-main{
                    padding-top: 2rem;
                    display: flex;
                    gap: 1rem;
                    .left{
                        flex: 0 0 calc(60% - 0.5rem);
                        height: 450px;
                        position: relative;
                        .pill{
                            @include pill;
                            position: absolute;
                            left: 1rem;
                            top: 1rem;
                            padding-top: 0.3rem;
                            padding-bottom: 0.3rem;
                            padding-inline: 1rem;
                            font: 600;
                            font-size: 1rem;
                            color: rgb(100, 100, 100);
                        }
                        img{
                            height: 450px;
                            width: 100%;
                            border-radius: 5px;
                            filter: brightness(60%);                                                        
                        }
                        .infos{
                            @include info;
                            left: -33%;
                            .demo{
                                .fa{
                                margin-bottom: 0.2rem;
                                }
                            }
                        }
                    }
                    .right{
                        height: 450px;
                        flex: 0 0 calc(40% - 0.5rem);
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        margin-bottom: 3rem;
                        .section{
                            border-bottom: 1px solid black;
                            height: 33.2%;
                            position: relative;
                            display: flex;
                            .pic{
                                display: flex;
                                align-items: center;
                                height: 100%;
                                position: relative;
                                .pill-one{
                                    @include pill;
                                    position: absolute;
                                    top: 0.5rem;
                                    left: 1rem;
                                    color: rgb(102, 102, 102);
                                    z-index: 1000;
                                    padding-top: 0.25rem;
                                    padding-bottom: 0.25rem;
                                    padding-inline: 0.9rem;
                                }
                                .pill{
                                    @include pill;
                                    position: absolute;
                                    top: 1.5rem;
                                    left: 1rem;
                                    color: rgb(102, 102, 102);
                                    z-index: 1000;
                                    padding-top: 0.25rem;
                                    padding-bottom: 0.25rem;
                                    padding-inline: 0.9rem;
                                }
                                img{
                                    height: 80%;
                                    width: auto;
                                    border-radius: 5px;
                                    filter: brightness(60%);
                                }
                            }
                            .one{
                                align-items: start;
                            }
                            .infos{
                                position: absolute;
                                @include info;
                                left: 16%;
                                bottom: 0;
                                color: black;
                                .demo{
                                    .fa{
                                    margin-bottom: 0.2rem;
                                    }
                                }
                                .title{
                                font-weight: 800;
                                }
                            }
                        } 
                    }
                }
            }
        }
    }
</style>