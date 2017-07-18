<template>
  <div class="post-contents">
    <div class="title-box">
      <p class="hello">July 2017 !!!</p>
      <h1><strong> {{ mainTitle }} </strong></h1>
      <p> {{ subTitle}} </p>
    </div>

    <div class="contents">
      <h2><strong>우아주는 ICT 전분야에 대해 공부하고 공유하는 소모임입니다.</strong></h2>
      <p>저희는 전자공학, 컴퓨터공학과 같이 ICT 기술을 전공으로 공부 중인 대학 재학생, 휴학생이며 <br/>
        2년 이내의 수료생, 졸업생으로 구성된 아직은 사회에서 주니어 취급을 받는 사람들입니다. <br/>
        빠르게 변하며 발전하는 ICT 기술의 흐름 속에서 길을 잃지 않고 나아가기 위해 서로가 공부한 내용을 공유하고자 합니다.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'post-july',
    data() {
      return {
        msg: 'July 2017 !!!',
        mainTitle: 'Smart things',
        subTitle: '각자 공부하고, 다함께 공유하며 비상을 준비하는 주니어들의 모임입니다.',
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
