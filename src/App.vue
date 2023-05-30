<script>
import AppHeader from './components/AppHeader.Vue';
import AppProducts from './components/AppProducts.vue';
import AppFooter from './components/AppFooter.Vue';
export default {
  components: {
    AppHeader,
    AppProducts,
    AppFooter,
  },
}
</script>

<template>
  <AppHeader/>
  <AppProducts/>
</template>

<style lang="scss">
  @use '../src/assets/styles/general.scss' as *; 
</style>
