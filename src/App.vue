<script>
import AppHeader from './components/AppFooter.Vue';
import AppProducts from './components/AppFooter.Vue';
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
  <AppFooter/>
</template>

<style lang="scss">
  @use '../src/assets/styles/general.scss' as *;
</style>
