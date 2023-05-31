<script>
import AppHeader from './components/AppHeader.vue';
import AppProducts from './components/AppProducts.vue';
import AppFooter from './components/AppFooter.vue';
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
  <AppFooter/>
</template>

<style lang="scss">
  @use '../src/assets/styles/general.scss' as *; 
</style>
