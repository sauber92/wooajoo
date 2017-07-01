<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>아직 개발 중입니다 :-(</h2>
    <h2>To be continue...</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: '안녕하세요 우아주 블로그입니다.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
