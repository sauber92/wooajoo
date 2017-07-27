<template>
  <div id="show" class="row">
    <post-nav class="col-2"></post-nav>

    <div class="col-10">
      <div class="title-box">
        <p class="hello"> {{ msg }} </p>
        <h1><strong> {{ mainTitle }} </strong></h1>
        <p> {{ subTitle }} </p>
      </div>

      {{ board }}

    </div>
  </div>
</template>

<script>
  // eslint-disable-next-line no-unused-vars
  import axios from 'axios';
  import PostNav from './PostNav';

  export default {
    name: 'Show',
    components: {
      PostNav,
    },
// eslint-disable-next-line object-shorthand
    created: function () {
      const id = this.$route.params.id;
      this.$http.get(`/api/boards/${id}`)
        .then((response) => {
          this.board = response.data;
        });
    },
// eslint-disable-next-line object-shorthand
    data: function () {
      return {
        board: {},
        msg: '아직준비안됨',
        mainTitle: '아직준비안됨',
        subTitle: '아직준비안됨',
      };
    },
  };
</script>

<style lang="css">
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
</style>
