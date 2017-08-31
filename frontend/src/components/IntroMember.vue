<template>
  <div class="intro-contents">
    <div class="title-box">
      <p class="hello"> {{ msg }} </p>
      <h1><strong> {{ mainTitle }} </strong></h1>
      <p> {{ subTitle }} </p>
    </div>

    <div class="card-deck">
      <div class="card">
        <img class="card-img-top" src="https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p320x320/13237805_968492259936062_3366953170761019237_n.jpg?oh=e41dc5a32dbd70219a4c6cf80babcebc&oe=59FDDDE0" alt="준영 프로필">
        <div class="card-block">
          <h4 class="card-title">정준영</h4>
          <p class="card-text"><small class="text-muted">#sauber92 #학부연구생 #개발자 #길치<br/>
            💻 <a href="https://sauber92.github.io">https://sauber92.github.io</a></small></p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p320x320/12360406_796792293783589_1904292523863888275_n.jpg?oh=ead7f80c3c7696c999dd9d758825e298&oe=5A06BF38" alt="종원 프로필">
        <div class="card-block">
          <h4 class="card-title">전종원</h4>
          <p class="card-text"><small class="text-muted">#당신을 #나타낼 #해쉬태그는 #무엇인가요<br/>
            💌 종원이 메일 몰라 링크넣어도 돼</small></p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p320x320/10301061_742917559159321_2129473068710814470_n.jpg?oh=f6c985e7f013a756359761e67acbf97b&oe=5A070328" alt="대원 프로필">
        <div class="card-block">
          <h4 class="card-title">신대원</h4>
          <p class="card-text"><small class="text-muted">#먹보 #먹기위해사는자 #당떨어지면위험<br/>
            💌 pokeodnjs@naver.com</small></p>
        </div>
      </div>
    </div>

    <div class="card-deck">
      <div class="card">
        <img class="card-img-top" src="https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p320x320/17884494_1291076874301623_1296331433684419890_n.jpg?oh=5aa927236490cb7bf7ac133d80b99a93&oe=5A36B8EB" alt="종렬 프로필">
        <div class="card-block">
          <h4 class="card-title">오종렬</h4>
          <p class="card-text"><small class="text-muted">#나를_표현할 #세단어 #청주 #치킨 #농구<br/>
            💌 jyeoloh@khu.ac.kr</small></p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p320x320/18222715_1346307548822935_7440607442678340919_n.jpg?oh=6ed2df454bdf3b922e106e568b6b614d&oe=5A00F3E0" alt="지수 프로필">
        <div class="card-block">
          <h4 class="card-title">김지수</h4>
          <p class="card-text"><small class="text-muted">#여행 #제주 #핸드폰 #사진찍기<br/>
            💌 graces127@naver.com</small></p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="https://s3.ap-northeast-2.amazonaws.com/wooajoo/ena.png" alt="은아 프로필">
        <div class="card-block">
          <h4 class="card-title">모은아</h4>
          <p class="card-text"><small class="text-muted">#집순이#노트북#핸드폰#집에서할일많아요<br/>
            💌 v_vssss@naver.com</small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'intro-member',
    data() {
      return {
        msg: 'About me',
        mainTitle: '우아주 人 은',
        subTitle: '대학생, 수료생, 졸업생 : 아직은 사회의 주니어인 사람들의 모임',
      };
    },
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

  h2 {
    font-size: 25px;
    margin-bottom: 30px;
  }

  .card-deck {
    margin-top: 50px;
  }

  .card {
    width: 285px;
  }

  .card-img-top {
    width: 100%;
    height: auto;
  }

  .card-title {
    color: #5c5c5c;
    font-weight: 700;
  }

  .card-text, a {
    color: #686868;
  }

  .card-columns {
  @include media-breakpoint-only(lg) {
    column-count: 3;
  }
  @include media-breakpoint-only(xl) {
    column-count: 3;
  }
  }
</style>
