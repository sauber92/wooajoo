<template>
  <div class="card card-inverse">
    <img class="card-img" src="../assets/main.png" alt="Main img">
    <div class="card-img-overlay text-center">
      <img class="logo" src="../assets/logo-big.png" alt="Logo img">
      <h1 class="card-title">{{ msg }}</h1>
      <h2 class="card-text">아직 개발 중입니다 :-(</h2>
      <router-link to="intro/group" class="btn-main">
        <button class="btn btn-outline-warning btn-lg">우아주 알아보러 가기</button>
      </router-link>
    </div>
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

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  h1 {
    margin: 50px 0 10px;
  }

  .card {
    height: 622px;
  }

  .card-img-overlay {
    background-color: rgba(0, 0, 0, 0.6);
  }

  .logo {
    margin-top: 70px;
    width: 200px;
  }

  .btn {
    margin-top: 50px;
  }
</style>
