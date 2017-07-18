<template>
  <div id="intro" class="row">
    <intro-nav class="col-2"></intro-nav>
    <router-view class="col-10"></router-view>
  </div>
</template>

<script>
  import IntroNav from './IntroNav';
  import IntroGroup from './IntroGroup';
  import IntroMember from './IntroMember';

  export default {
    name: 'intro',
    components: {
      IntroNav,
      IntroGroup,
      IntroMember,
    },
  };
</script>

<style scoped>
</style>
