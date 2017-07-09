<template>
  <div class="row text-center">
    <p class="col">Designed by <a href="https://sauber92.github.io">sauber92(Junyoung)</a></p>
    <p class="col">Copyright &copy; <router-link to="/">우아주</router-link>. 2017 &bull; All rights reserved.</p>
  </div>
</template>

<script>
  export default {
    name: 'foot',
    data() {
      return {
        author: 'sauber92(@Junyoung)',
      };
    },
  };
</script>

<style scoped>
  p {
    margin-top: 50px;
  }
</style>
