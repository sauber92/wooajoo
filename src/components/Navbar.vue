<template>
  <nav class="navbar navbar-toggleable-md navbar-light">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <router-link to="/" class="navbar-brand">
      <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
      우아주
    </router-link>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav col-8">
        <li class="nav-item active">
          <!--<a class="nav-link" href="#">홈 <span class="sr-only">(current)</span></a>-->
          <router-link to="/" class="nav-link">홈</router-link>
        </li>
        <li class="nav-item">
          <!--<a class="nav-link" href="#">소개하기</a>-->
          <router-link to="hello" class="nav-link">소개하기</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            게시물 보기
          </a>
          <!--<router-link to="article" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">게시물 보기</router-link>-->
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <!--<a class="dropdown-item" href="#">Smart Things (17년 7월)</a>-->
            <router-link to="july" class="dropdown-item">Smart Things (17년 7월)</router-link>
            <!--<a class="dropdown-item" href="#">Smart Mobility (17년 8월)</a>-->
            <router-link to="august" class="dropdown-item">Smart Mobility (17년 8월)</router-link>
            <!--<a class="dropdown-item" href="#">Cloud (17년 9월)</a>-->
            <router-link to="september" class="dropdown-item">Cloud (17년 9월)</router-link>
            <!--<a class="dropdown-item" href="#">Big data (17년 10월)</a>-->
            <router-link to="october" class="dropdown-item">Big data (17년 10월)</router-link>
            <!--<a class="dropdown-item" href="#">AI (17년 11월)</a>-->
            <router-link to="november" class="dropdown-item">AI (17년 11월)</router-link>
            <!--<a class="dropdown-item" href="#">Security (17년 12월)</a>-->
            <router-link to="december" class="dropdown-item">Security (17년 12월)</router-link>
          </div>
        </li>
      </ul>
      <div class="search-tool">
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="text" placeholder="무엇이 궁금하세요?">
          <button class="btn btn-sm btn-outline-warning my-2 my-sm-0" type="submit">검색</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navbar',
    data() {
      return {
        title: '우아주',
      };
    },
  };
</script>

<style scoped>
  nav {
    margin-bottom: 20px;
  }

  .search-tool {
    margin-top: 5px;
    float: right;
  }

  .form-control {
    padding: 5px 10px 5px 10px;
    font-size: 13px;
  }
</style>
