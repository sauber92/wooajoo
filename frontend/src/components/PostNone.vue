<template>
  <div class="post-contents">
    <div class="title-box">
      <p class="hello"> {{ msg }} </p>
      <h1><strong> {{ mainTitle }} </strong></h1>
      <p> {{ subTitle }} </p>
    </div>

    <div class="contents">
      <h2><strong> {{ title }} </strong></h2>
      <img class="logo col" src="../assets/schedule.png" alt="schedule">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'post-none',
    data() {
      return {
        msg: 'Hello world !!!',
        mainTitle: '우아주 스터디 계획',
        subTitle: '아직 개발 중입니다 :-(',
      };
    },
  };
</script>

<style scoped>
  .title-box {
    height: 300px;
    padding: 30px 50px;
    color: #ffffff;
    border-radius: 20px;
    background: rgba(255,193,7,1);
    background: -moz-linear-gradient(45deg, rgba(255,193,7,1) 0%, rgba(255,87,34,1) 100%);
    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(255,193,7,1)), color-stop(100%, rgba(255,87,34,1)));
    background: -webkit-linear-gradient(45deg, rgba(255,193,7,1) 0%, rgba(255,87,34,1) 100%);
    background: -o-linear-gradient(45deg, rgba(255,193,7,1) 0%, rgba(255,87,34,1) 100%);
    background: -ms-linear-gradient(45deg, rgba(255,193,7,1) 0%, rgba(255,87,34,1) 100%);
    background: linear-gradient(45deg, rgba(255,193,7,1) 0%, rgba(255,87,34,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffc107', endColorstr='#ff5722', GradientType=1 );
  }

  .title-box .hello {
    font-family: 'Nanum Pen Script';
    font-size: 40px;
    margin: 20px 10px 0 0;
  }

  h1 {
    font-family: 'Nanum Barun Gothic';
    font-size: 60px;
    margin-top: -5px;
  }

  .title-box p {
    font-size: 20px;
    margin-left: 10px;
  }

  .contents, .contact{
    margin: 50px 20px;
    font-size: 15px;
  }

  h2 {
    font-size: 25px;
    margin-bottom: 30px;
  }
</style>
