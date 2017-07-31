<template>
  <div id="post" class="row">
    <post-nav class="col-2"></post-nav>
    <div class="col-10">
      <div class="title-box">
        <p v-if="$route.path === '/post/jul'" class="hello"> July, 2017 </p>
        <p v-else-if="$route.path === '/post/aug'" class="hello"> August, 2017 </p>
        <p v-else-if="$route.path === '/post/sep'" class="hello"> September, 2017 </p>
        <p v-else-if="$route.path === '/post/oct'" class="hello"> October, 2017 </p>
        <p v-else-if="$route.path === '/post/nov'" class="hello"> November, 2017 </p>
        <p v-else-if="$route.path === '/post/dec'" class="hello"> December, 2017 </p>

        <h1 v-if="$route.path === '/post/jul'"><strong> 스마트 디바이스 </strong></h1>
        <h1 v-else-if="$route.path === '/post/aug'"><strong> 스마트 모빌리티 </strong></h1>
        <h1 v-else-if="$route.path === '/post/sep'"><strong> 클라우드 </strong></h1>
        <h1 v-else-if="$route.path === '/post/oct'"><strong> 빅 데이터 </strong></h1>
        <h1 v-else-if="$route.path === '/post/nov'"><strong> 인공지능 </strong></h1>
        <h1 v-else-if="$route.path === '/post/dec'"><strong> 정보 보안 </strong></h1>

        <p v-if="$route.path === '/post/jul'"> Smart Things </p>
        <p v-else-if="$route.path === '/post/aug'"> Smart Mobility </p>
        <p v-else-if="$route.path === '/post/sep'"> Cloud </p>
        <p v-else-if="$route.path === '/post/oct'"> Big Data </p>
        <p v-else-if="$route.path === '/post/nov'"> Artificial Intelligence </p>
        <p v-else-if="$route.path === '/post/dec'"> Security </p>
      </div>

      <div class="boards">
        <div v-for="board in boadrs" class="card board" style="width: 20rem;">
          <!--<img class="card-img-top" src="..." alt="Card image cap">-->
          <div class="card-block">
            <h4 class="card-title">{{ board.title }}</h4>
            <p class="card-text">{{ board.introduction}}</p>
            <a href="#" class="btn btn-outline-warning">더보기</a>
            <router-link :to="{ name: 'Show', params: { id: board._id }}"><button class="btn btn-outline-warning">더보기</button></router-link>
          </div>
        </div>
      </div>

      <div v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </div>
    </div>
  </div>
</template>

<script>
  import PostNav from './PostNav';

  export default {
    name: 'post-key',
    components: {
      PostNav,
    },
    data: () => ({

    }),
    // eslint-disable-next-line space-before-function-paren
    created () {
      this.$http.get('/api/boards')
        .then((response) => {
          this.boards = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
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

  .boards {
    margin-top: 50px;
  }
</style>
