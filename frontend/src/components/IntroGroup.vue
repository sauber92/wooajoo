<template>
  <div class="intro-contents">
    <div class="title-box">
      <p class="hello"> {{ msg }} </p>
      <h1><strong> {{ mainTitle }} </strong></h1>
      <p> {{ subTitle }} </p>
    </div>

    <div class="contents">
      <h2><strong>우아주는 ICT 전분야에 대해 공부하고 공유하는 소모임입니다.</strong></h2>
      <p>우아주 멤버는 전자공학, 컴퓨터공학 전공의 대학생으로 구성되어 있습니다. <br/>
        또한 대학을 수료/졸업한지 오래되지 않아 아직은 사회에서 주니어 취급을 받는 사람들도 자유롭게 참여 가능합니다. <br/>
        저희는 빠르게 변하며 발전하는 ICT 기술의 흐름 속에서 길을 잃지 않고 나아가기 위해 서로가 공부한 내용을 공유하고자 합니다.
      </p>
    </div>

    <div class="contents row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <iframe width="100%" height="500px" style="position: relative;" src="https://www.youtube.com/embed/tPtER4HzTrI?list=PLTj4ip-QW96ty577FRHnACUjw4dSm2TFH" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>

    <div class="contact">
      <h2><strong>우아주 대해 궁금하신 분은 메일을 보내주세요</strong></h2>
      <p>* 표시가 된 항목은 반드시 기입</p>

      <form action="https://formspree.io/jjy920517@gmail.com" method="POST">
        <div class="row">
          <div class="col">
            <div class="form-group row">
              <div class="col">
                <input class="form-control" type="text" name="name" placeholder="* 성함" required="" data-validation-required-message="이름을 적어주세요.">
              </div>
            </div>
            <div class="form-group row">
              <div class="col">
                <input class="form-control" type="email" name="_replyto" placeholder="* 답변받으실 이메일" required="" data-validation-required-message="이메일 주소를 적어주세요.">
              </div>
            </div>
            <div class="form-group row">
              <div class="col">
                <input class="form-control" type="tel" placeholder="연락처">
              </div>
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <input class="form-control message" type="text" name="message" placeholder="* 문의하실 내용일 기입해주세요." required="" data-validation-required-message="메세지를 입력해 적어주세요">
            </div>
          </div>
        </div>
        <div class="button row">
          <button type="submit" class="btn btn-warning">전송하기</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'intro-group',
    data() {
      return {
        msg: 'Hello world !!!',
        mainTitle: '우리는 아직 주니어다',
        subTitle: '각자 공부하고, 다함께 공유하며 비상을 준비하는 주니어들의 모임입니다.',
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

  .contents, .contact{
    margin: 50px 20px;
    font-size: 15px;
  }

  h2 {
    font-size: 25px;
    margin-bottom: 30px;
  }

  form {
    margin-top: 30px;
  }

  .form-control {
    height: 50px;
    border-radius: 10px;
  }

  .message {
    height: 180px;
  }

  .button {
    text-align: center;
  }

  button {
    width: 100%;
    height: 50px;
    margin-top: 20px;
  }
</style>
