<script>
    export default {
        data(){
            return{
                cardArr: [
                    {
                        type: 'Food',
                        typeTwo: undefined,
                        img: 'src/assets/img/healthy-foods.webp',
                        description: 'The Best Healthy Foods in 2022',
                        date: 'December 26, 2022',
                    },
                    {
                        type: 'Fashion',
                        typeTwo: undefined,
                        img: 'src/assets/img/winter.webp',
                        description: 'The Best Winter Outfits',
                        date: 'December 26, 2022',
                    },
                    {
                        type: 'Fashion',
                        typeTwo: undefined,
                        img: 'src/assets/img/photographers-mistakes.webp',
                        description: "Beginner Photographer's Mistakes",
                        date: 'December 26, 2022',
                    },
                    {
                        type: 'Culture',
                        typeTwo: 'Stories',
                        img: 'src/assets/img/external-pic/ideas-anime.webp',
                        description: 'Live Ideas You Might Be Anime',
                        date: 'December 26, 2022',
                    },
                ],
            };
        },
        
    }
</script>

<template>
   <main>
    <div class="carousel">
        <div class="button left">
            <font-awesome-icon icon="fa-solid fa-chevron-left" />
        </div>
        <div class="button right">
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </div>
        <div class="carousel-card" v-for="(card, i) in cardArr" :key="i">
            <div class="pill">
                <div class="multi-pills" v-if="card.typeTwo == 'Stories'">
                    <span class="type-pill-one">{{ card.type }}</span>
                    <span class="type-pill-two">{{ card.typeTwo }}</span>
                </div>
                <div v-else>
                    <span class="type-pill">{{ card.type }}</span>
                </div>
            </div>
            
            <img :src="card.img" alt="">
            <div class="infos">
                <span class="description"> {{ card.description }}</span>
                <span class="date"> {{ card.date }}</span>
            </div>
        </div>

    </div>
   </main>
</template>



<style lang="scss" scoped>
    @use '../assets/styles/partials/variables.scss' as *;
    $red: #BF1D2E;
    $white: #FFFFFF;
    $gray: #F3F3F3;
    $black: #333333;
    main{
        .carousel{
            background-color: $gray;
            height: 50vh;
            position: relative;
            display: flex;
            padding: 2rem;
            gap: 1rem;
            .button{
                height: 30px;
                width: 30px;
                background-color: white;
                border-radius: 20px;
                @include flex-center;
                color: $red;
                cursor: pointer;
            }
            .left{
                position: absolute;
                left: 3rem;
                bottom: 25vh;
                z-index: 1000;
            }
            .right{
                position: absolute;
                right: 3rem;
                bottom: 25vh;
                z-index: 1000;
            }
            .carousel-card{
                flex: 0 0 calc(25% - 0.7rem);
                height: 100%;
                display: flex;
                flex-direction: column;
                position: relative;
                .type-pill{
                    position: absolute;
                    top: 0.5rem;
                    left: calc(50% - 2rem);
                    height: 1.3rem;
                    background-color: $white;
                    @include flex-center;
                    padding-inline: 0.8rem;
                    border-radius: 5px;
                    font-size: 0.9rem;
                    font-weight: 800;
                }
                .type-pill-one{
                    position: absolute;
                    top: 0.5rem;
                    right: 52%;
                    height: 1.3rem;
                    background-color: $white;
                    @include flex-center;
                    padding-inline: 0.8rem;
                    border-radius: 5px;
                    font-size: 0.9rem;
                    font-weight: 800;
                }
                .type-pill-two{
                    position: absolute;
                    top: 0.5rem;
                    left: 52%;
                    height: 1.3rem;
                    background-color: $white;
                    @include flex-center;
                    padding-inline: 0.8rem;
                    border-radius: 5px;
                    font-size: 0.9rem;
                    font-weight: 800;
                }
                img{
                    width: 100%;
                    height: 80%;
                    border-top-right-radius: 5px;
                    border-top-left-radius: 5px;
                }
                .infos{
                    height: 20%;
                    background-color: $white;
                    border-bottom-right-radius: 5px;
                    border-bottom-left-radius: 5px;
                    @include flex-center;
                    flex-direction: column;
                    gap: 0.3rem;
                    .description{
                        font-weight: 600;
                    }
                }
            }

        }
    }
</style>