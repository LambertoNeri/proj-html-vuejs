<script>
    export default {
        data(){
            return{
                menuIcons: [
                    {  
                        icon: 'fa-solid fa-house',
                        menuOption: 'HOME',
                    },
                    {  
                        icon: 'fa-solid fa-suitcase',
                        menuOption: 'LIFESTYLE',
                    },
                    {  
                        icon: 'fa-solid fa-book-open-reader',
                        menuOption: 'STORIES',
                    },
                    {  
                        icon: 'fa-solid fa-book',
                        menuOption: 'PAGES',
                    },
                    {  
                        icon: 'fa-solid fa-user',
                        menuOption: 'ABOUT US',
                    },
                ]
            };
        },
    }
</script>

<template>
   <header>
        <div class="red-container">
            <div class="max-width-container">
                <div class="news">
                    <div class="news-text">NEWS UPDATES</div>
                    <img class="news-pic" src="../assets/img/external-pic/meal-time-150x150.webp" alt="">
                    <div class="news-time">05:35</div>
                    <div class="news-the">THE_</div>
                </div>

                <div class="links">
                    <div class="arrows">
                        <font-awesome-icon icon="fa-solid fa-chevron-left"/>
                        <font-awesome-icon icon="fa-solid fa-chevron-right"/>
                    </div>
                    <div class="social">

                        <div class="white-circle">
                            <font-awesome-icon icon="fa-brands fa-facebook-f"/>
                        </div>

                        <div class="white-circle">
                            <font-awesome-icon icon="fa-brands fa-twitter"/>
                        </div>

                        <div class="white-circle">
                            <font-awesome-icon icon="fa-brands fa-instagram"/>
                        </div>

                        <div class="white-circle youtube">
                            <font-awesome-icon icon="fa-brands fa-youtube"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="white-container">
            <div class="max-width-container">
                <div class="logo">
                    <img src="../assets/img/anime-logo-300x89.webp" alt="">
                </div>
                <div class="advertise">
                    <img src="../assets/img/header-banner.webp" alt="">
                </div>
            </div>
        </div>
        <div class="menu">
            <div class="max-width-container">
                <div class="bars">
                    <font-awesome-icon icon="fa-solid fa-bars" />
                </div>
                <div class="menu-voices">
                    <ul>
                        <li v-for="(menuVoice, i) in menuIcons" :key="i">
                            <font-awesome-icon class="icon" :icon='menuIcons[i].icon'/>
                            <span>{{ menuIcons[i].menuOption }} <font-awesome-icon icon="fa-solid fa-chevron-down" /></span>
                        </li>
                    </ul>
                </div>
                <div class="search">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </div>
            </div>
        </div>
    </header> 
</template>



<style lang="scss" scoped>
    @use '../assets/styles/partials/variables.scss' as *;
    $red: #BF1D2E;
    $white: #FFFFFF;
    $gray: #F3F3F3;
    $black: #333333;

    .red-container{
        height: 5vh;
        background-color: $red;
        .max-width-container{
            @include width-1250;
            display: flex;
            justify-content: space-between;
            height: 100%;
            .news{
                display: flex;
                color: $white;
                .news-text{
                    background-color: gray;
                    padding-inline: 2rem;
                    @include flex-center;
                }
                .news-pic{
                    opacity: 70%;
                }
                    
                .news-time{
                    @include flex-center;
                    padding-left: 0.5rem;
                    opacity: 70%;
                }
                .news-the{
                    @include flex-center;
                    padding-left: 0.5rem;
                    opacity: 70%;
                }
                
            }

            .links{
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .arrows{
                    display: flex;
                    justify-content: space-between;
                    color: white;
                    align-items: center;
                    gap: 2rem;
                    margin-right: 2rem;
                    cursor: pointer;
                }
                .social{
                   font-size: 1.3rem;
                   display: flex;
                   gap: 0.6rem;
                   margin-right: 1rem;
                   color: $red;
                   .white-circle{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: white ;
                    width: 30px;
                    height: 30px;
                    border-radius: 30px;
                    cursor: pointer;
                   }
                   .youtube{
                    padding-left: 0.1rem;
                   }
                    
                }
            }
        }
       
    }
    .white-container{
        height: 12vh;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        .max-width-container{
            @include width-1250;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .logo{
                img{
                    max-width: 80%;
                }
            }
            .advertise{
                img{
                    border-radius: 5px;
                }
            }
        }
    }
    .menu{
        height: 6vh;
        .max-width-container{
            height: 100%;
            @include width-1250;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .bars{
                .fa-bars{
                    font-size: 2rem;
                }
            }
            .menu-voices{
                ul{
                list-style-type: none;
                display: flex;
                flex-direction: row;
                gap: 2rem;
                    li{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        gap: 0.5rem;
                        .icon{
                        margin-bottom: 0.2rem;
                        font-size: 0.9rem;
                        }
                        .fa-chevron-down{
                        font-size: 0.65rem;
                        margin-bottom: 0.2rem;
                        font-weight: 800;
                        }
                    }
                }
            }
            .search{
                .fa-magnifying-glass{
                    font-size: 1.7rem;
                }
            }
        }
    }
</style>