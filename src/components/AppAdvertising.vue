<script>
    export default {
        
    }
</script>

<template>
    <div class="container-bg">
        <div class="container-width">
            <img src="../assets/img/page-banner-1.webp" alt="">
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
        background-color: $gray;
        height: 20vh;
        .container-width{
            @include width-1250;
            @include flex-center;
            height: 100%;
            img{
                width: 100%;
                height: auto;
                border-radius: 5px;
            }

        }
    }
</style>