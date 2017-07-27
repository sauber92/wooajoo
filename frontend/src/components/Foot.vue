<template>
  <div class="row text-center">
    <p class="col">Designed by <a href="https://sauber92.github.io" data-toggle="tooltip" data-placement="top" title="블로그로 이동합니다">{{author}}</a></p>
    <p class="col">Copyright &copy; 우아주. 2017 &bull; All rights reserved.</p>
  </div>
</template>

<script>
  export default {
    name: 'foot',
    data() {
      return {
        author: 'sauber92',
      };
    },
  };
</script>

<style scoped>
  p {
    margin-top: 50px;
  }
</style>
