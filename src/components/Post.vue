<template>
  <div id="post" class="row">
    <post-nav class="col-2"></post-nav>
    <router-view class="col-10"></router-view>
  </div>
</template>

<script>
  import PostNav from './PostNav';
  import PostJuly from './PostJuly';
  import PostNone from './PostNone';

  export default {
    name: 'intro',
    components: {
      PostNav,
      PostJuly,
      PostNone,
    },
  };
</script>

<style scoped>
</style>
