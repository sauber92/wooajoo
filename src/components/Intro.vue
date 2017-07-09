<template>
  <div id="intro">
    <intro-nav></intro-nav>
    <router-view></router-view>
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
