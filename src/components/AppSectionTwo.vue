<script>
    export default {
        data() {
            return{
                cardsArr: [
                    {
                        img: 'src/assets/img/external-pic/ideas-anime.webp',
                        style: 'Culture',
                        style2: 'Stories',
                        title: 'Live Ideas You Might Be Anime',
                        date: 'December 26, 2022',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae id aliquid, amet optio adipisci, odio...',
                    },
                    {
                        img: 'src/assets/img/visit-france.webp',
                        style: 'Lifestyle',
                        style2: 'Travel',
                        title: 'Reasons To Visit France',
                        date: 'December 26, 2022',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae id aliquid, amet optio adipisci, odio...',
                    },
                    {
                        img: 'src/assets/img/travel-alone.webp',
                        style: 'Stories',
                        style2: 'Travel',
                        title: 'Traveling Alone is Awesome',
                        date: 'December 26, 2022',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae id aliquid, amet optio adipisci, odio...',
                    },
                ],
                playlistArr: [
                    {
                        img: 'src/assets/img/default.webp',
                        description: 'Overlord Season 4 - Official Trailer 3 | AniTv',
                    },
                    {
                        img: 'src/assets/img/hqdefault (1).jpg',
                        description: 'Rent A Girlfriend Season 2 - Official Trailer | AniTv',
                    },
                    {
                        img: 'src/assets/img/uncle.jpeg',
                        description: 'Uncle From Another World - Official Trailer 2 | AniTv',
                    },
                    {
                        img: 'src/assets/img/primaDoll.webp',
                        description: 'Prima Doll - Official Trailer Season 2 | AniTv',
                    },
                    {
                        img: 'src/assets/img/Alice_Synthesis_Thirty.webp',
                        description: 'Sword Art Online Alicization - Official Trailer | AniTv',
                    },
                    {
                        img: 'src/assets/img/shoot!.jpeg',
                        description: 'Shoot! Goal To The Future - Official Trailer | AniTv',
                    },

                ],

                bannerArr: [
                    {
                        img: 'src/assets/img/anime-fashion.webp',
                        description: 'FASHION',
                        postNumber: '4 POSTS', 
                    },
                    {
                        img: 'src/assets/img/success-story.webp',
                        description: 'CULTURE',
                        postNumber: '3 POSTS', 
                    },  
                    {
                        img: 'src/assets/img/healthy-foods.webp',
                        description: 'FOOD',
                        postNumber: '1 POST', 
                    },
                    {
                        img: 'src/assets/img/visit-france.webp',
                        description: 'LIFESTYLE',
                        postNumber: '4 POSTS', 
                    },
                    {
                        img: 'src/assets/img/travel-alone.webp',
                        description: 'STORIES',
                        postNumber: '5 POSTS', 
                    },
                    {
                        img: 'src/assets/img/best-places.webp',
                        description: 'TRAVEL',
                        postNumber: '1991 POSTS', 
                    },
                ],

                videoIndex: 4,
            };
        },
        methods: {
            clicked(element) {
                this.videoIndex = this.playlistArr.indexOf(element)
            },
        },
    }
</script>

<template>
    <div class="container-bg">
        <div class="container-width">
            <div class="section-two-carousel">
                <div class="carousel-commands">
                    <span>FEATURED POSTS</span>
                    <div class="chevrons">
                        <font-awesome-icon class="fa" icon="fa-solid fa-circle-chevron-left" />
                        <font-awesome-icon class="fa" icon="fa-solid fa-circle-chevron-right" />
                    </div>
                </div>
                <div class="carousel-main">
                    <div v-for="(card, i) in cardsArr" :key="i" class="card">
                        <img :src="card.img" alt="">
                        <div class="text">
                            <h3 class="title">{{ card.title }}</h3>
                            <span class="date">{{ card.date }}</span>
                            <span class="description">{{ card.description }}</span>
                            <button class="button">Read More</button>
                        </div>
                        <div class="pills-container">
                            <div class="pill one">{{ card.style }}</div>
                            <div class="pill two">{{ card.style2 }}</div>
                        </div>
                        
                    </div>
                </div>
              
            </div>


            <div class="ani-player">
                <div class="video-container">
                    <div class="video-header">
                        <div class="logo">
                            <img src="../assets/img/channels4_profile.jpg" alt="">
                            <span>{{ playlistArr[videoIndex].description }}</span>
                        </div>
                        <div class="controls">
                            <div class="clickable">
                                <font-awesome-icon icon="fa-solid fa-clock" />
                                <span>Guarda piu...</span>
                            </div>
                            <div class="clickable">
                                <font-awesome-icon icon="fa-solid fa-share" />
                                <span>Condividi</span>
                            </div>
                        </div>
                    </div>
                    <img :src="playlistArr[videoIndex].img" alt="">
                    <div class="youtube-logo">
                        <font-awesome-icon icon="fa-brands fa-youtube" style="color: #f00000;" />
                    </div>
                    <div class="white-square"></div>
                    <div class="watch-youtube">
                        <span>Guarda su <font-awesome-icon class="fa" icon="fa-brands fa-youtube"/> <span class="special">YouTube</span></span>
                    </div>
                </div>
                <div class="selection-list">
                    <ul>
                        <li class="special">
                            <font-awesome-icon class="fa" icon="fa-solid fa-play" />
                            <div class="text">
                                <span>Video Playlist</span>
                                <span class="video-counter">  {{ videoIndex + 1 }}  / {{ playlistArr.length }} Videos</span>
                            </div>
                        </li>
                        <li v-for="(playlist, i) in playlistArr" :key="i" class="playlist" @click="clicked(playlist)">


                            <div class="container" v-if="i  == videoIndex ">
                                <div class="square-red">{{ i + 1 }}</div>
                                <div class="pic">
                                    <img :src="playlist.img" alt="">
                                </div>
                                <span class="title-red">{{ playlist.description }}</span>
                            </div>

                            <div class="container" v-else>
                                <div class="square">{{ i + 1 }}</div>
                                <div class="pic">
                                    <img :src="playlist.img" alt="">
                                </div>
                                <span class="title">{{ playlist.description }}</span>
                            </div>
                           
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="end-banner">
            <div v-for="(banner, i) in bannerArr" :key="i" class="card">
                <img :src="banner.img" alt="">
                <span>{{ banner.description }}</span>
                <div class="post-bg">
                    <div class="post-container">
                        <div class="post-number">
                            <span>{{ banner.postNumber }}</span>
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
    .container-bg{
        background-color: white;
        padding-top: 2.5rem;
        .container-width{
            @include width-1250;
            .section-two-carousel{
                .carousel-commands{
                    display: flex;
                    justify-content: space-between;
                    margin-right: 1rem;
                    padding-bottom: 0.5rem;
                    span{
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: $black;
                    }
                    .chevrons{
                        font-size: 2.2rem;
                        display: flex;
                        gap: 1.5rem;
                        color: $black;
                        .fa{
                            cursor: pointer;
                            &:hover{
                                color: $red;
                            }
                        }
                    }
                }
                .carousel-main{
                    display: flex;
                    gap: 0.5rem;
                    .card{
                        height: 450px;
                        width: calc(33% - .25rem);
                        display: flex;
                        flex-direction: column;
                        position: relative;
                        img{
                            height: 60%;
                            border-top-left-radius: 5px;
                            border-top-right-radius: 5px;
                        }
                        .text{
                            height: 40%;
                            background-color: $gray;
                            @include flex-center;
                            flex-direction: column;
                            gap: 0.5rem;
                            padding-inline: 1rem;
                            span{
                                text-align: center;
                            }
                            .date{
                                font-weight: 600;
                                color: #333333;
                            }
                            .description{
                                font-size: 0.9rem;
                            }
                            .button{
                                @include pill;
                                background-color: $red;
                                color: $gray;
                                font-size: 1rem;
                                padding-top: 0.3rem;
                                padding-bottom: 0.3rem;
                                padding-inline: 2rem;
                                border-radius: 30px;
                                cursor: pointer;
                                margin-top: 0.8rem;
                                border: none;
                                &:hover{
                                    background-color: $black;
                                    color: white;
                                }
                            }
                        }
                        .pills-container{
                            position: absolute;
                            top: 0.5rem;
                            left: 26%;
                            display: flex;
                            gap: 1rem;
                            .pill{
                                @include pill;
                                padding-top: 0.2rem;
                                padding-bottom: 0.2rem;
                                padding-inline: 0.8rem;
                                color: $black;
                            }
                        }
                    }
                }
                    
                
                
            }
            .ani-player{
                margin-top: 3rem;
                height: 600px;
                display: flex;
                .video-container{
                    height: 100%;
                    flex: 0 0 70%;
                    overflow: hidden;
                    position: relative;
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px;
                    .video-header{
                        opacity: 90%;
                        position: absolute;
                        height: 4rem;
                        top: 0;
                        left: 0;
                        right: 0;
                        z-index: 1000;
                        display: flex;
                        justify-content: space-between;
                        color: $red;
                        align-items: center;
                        .logo{
                            height: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            gap: 1rem;
                            padding-left: 1rem;
                            font-weight: 600;
                            img{
                                height: 70%;
                                width: auto;
                                border-radius: 100%;
                            }
                        }
                        .controls{
                            padding-right: 1rem;
                            display: flex;
                            justify-content: space-between;
                            gap: 1rem;
                            .clickable{
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                                gap: 0.5rem;
                            }
                        }
                    }
                    img{
                        height: 100%;
                        width: 100%;
                        scale: 1.3;
                    }
                    .youtube-logo{
                        position: absolute;
                        top: 47%;
                        left: 47%;
                        font-size: 5rem;
                        z-index: 1000;
                    }
                    .white-square{
                        height: 30px;
                        width: 30px;
                        background-color: white;
                        z-index: 900;
                        position: absolute;
                        top: 52%;
                        left: 51%;
                    }
                    .watch-youtube{
                        position: absolute;
                        left: 0.5rem;
                        bottom: 0.5rem;
                        height: 3rem;
                        width: 12rem;
                        background-color: #121212;
                        color: white;
                        @include flex-center;
                        .fa{
                            margin-left: 0.5rem;
                        }
                        .special{
                            letter-spacing: -0.09rem;
                            margin-left: -0.2rem;
                        }
                    }
                }
                .selection-list{
                    overflow: auto;
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    border-bottom-right-radius: 5px;
                    ul{
                        list-style-type: none;
                        width: 100%;
                        .special{
                            text-align: center;
                            height: 16%;
                            width: 100%;
                            background-color: $black;
                            color: white;
                            display: flex;
                            padding: 1.5rem;
                            align-items: center;
                            gap: 1rem;
                            border-top-right-radius: 5px;
                            .fa{
                                font-size: 1.8rem;
                            }
                            .text{
                                @include flex-center;
                                flex-direction: column;
                                .video-counter{
                                    font-size: 0.8rem;
                                    margin-left: -2rem;
                                    margin-top: 0.3rem;
                                }
                            }
                        }
                        .playlist{
                           
                            .container{
                                display: flex;
                                justify-content: space-around;
                                align-items: center;
                                gap: 0.5rem;
                                height: 6rem;
                                border-bottom: 1px black solid;
                                width: 100%;
                                padding-inline: 1rem;
                                background-color: $gray;
                                cursor: pointer;
                                .square{
                                flex-shrink: 0;
                                height: 25px;
                                width: 25px;
                                @include flex-center;
                                background-color: $black;
                                border-radius: 5px;
                                color: white;
                                }
                                .square-red{
                                    flex-shrink: 0;
                                    height: 25px;
                                    width: 25px;
                                    @include flex-center;
                                    background-color: $red;
                                    border-radius: 5px;
                                    color: white;
                                }
                                .title-red{
                                    color:$red;
                                }

                                .pic{
                                    flex-grow: 0;
                                    flex-shrink: 0;
                                    height: 75px;
                                    width: 100px;
                                    overflow: hidden;
                                    border-radius: 5px;
                                    img{
                                        border-radius: 10px;
                                        height: 75px;
                                        width: 150px;
                                        scale: 1.5;
                                        object-fit: contain;
                                    }
                                }
                            }
                            
                           
                        }
                    }

                }
            }
        }
        .end-banner{
                margin-top: 3rem;
                display: flex;
                gap: 1rem;
                flex-direction: row;
                justify-content: space-around;
                margin-bottom: 1rem;

                .card{
                    flex: 0 0 calc(16.6% - 1rem);
                    position: relative;
                    height: 250px;
                    &:hover .post-bg{
                        display: block;
                        cursor: pointer;
                        @include flex-center;
                    }
                    img{
                        width: 100%;
                        filter: invert(10%) brightness(70%);
                        border-radius: 5px;
                        height: 100%;
                        object-fit: cover;
                    }
                    span{
                        font-size: 1.5rem;
                        position: absolute;
                        left: 32.7%;
                        top: 46%;
                        color: white;
                        font-weight: 600;
                        z-index: 1000;
                    }
                    .post-bg{
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background-color: rgb(191, 29, 46, 0.7);
                        border-radius: 5px;
                        display: none;
                        .post-container{
                            height: 80%;
                            width: 80%;
                            border: 1px solid white;
                            @include flex-center;
                            .post-number{
                                position: relative;
                                height: 80%;
                                width: 80%;
                                border: 1px solid white;
                                @include flex-center;
                                span{
                                    position: absolute;
                                    color: white;
                                    font-weight: 600;
                                    top: 60%;
                                    left: 37%;
                                    font-size: 0.9rem;
                                }
                            }
                        }
                    }
                }
            }
    }
</style>