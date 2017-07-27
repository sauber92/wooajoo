<template>
  <div id="post" class="row">
    <post-nav class="col-2"></post-nav>

    <div class="col-10">
      <div class="title-box">
        <p class="hello"> {{ msg }} </p>
        <h1><strong> {{ mainTitle }} </strong></h1>
        <p> {{ subTitle }} </p>
      </div>

      <img src="../assets/schedule.png"/>

      <h2>※ 발표 일정을 확인해주세요</h2>

    </div>
  </div>
</template>

<script>
  import PostNav from './PostNav';

  export default {
    name: 'post',
    components: {
      PostNav,
    },
    data: () => ({
      msg: 'Presentation',
      mainTitle: '이번 발표는?!',
      subTitle: '매달 다른 키워드로, 공부하고 발표하자',
    }),
  };
</script>

<style scoped>
  .title-box {
    height: 250px;
    padding: 15px 50px;
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

  img {
    width: 100%;
    margin: 50px 0;
  }

  h2 {
    text-align: center;
    font-weight: 900;
  }
</style>
