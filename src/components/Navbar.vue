<template>
  <nav class="navbar navbar-toggleable-md navbar-light">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <router-link to="/" class="navbar-brand">
      <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="logo img">
      {{ title }}
    </router-link>
    <div class="collapse navbar-collapse row" id="navbarNavDropdown">
      <ul class="navbar-nav col-8">
        <router-link to="/intro/group" tag="li" class="nav-item nav-link">소개</router-link>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            게시물 보기
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <router-link to="july" class="dropdown-item">Smart Things</router-link>
            <router-link to="august" class="dropdown-item" data-toggle="tooltip" data-placement="right" title="업로드 예정: 17년 8월">Smart Mobility</router-link>
            <router-link to="september" class="dropdown-item" data-toggle="tooltip" data-placement="right" title="업로드 예정: 17년 9월">Cloud</router-link>
            <router-link to="october" class="dropdown-item" data-toggle="tooltip" data-placement="right" title="업로드 예정: 17년 10월">Big data</router-link>
            <router-link to="november" class="dropdown-item" data-toggle="tooltip" data-placement="right" title="업로드 예정: 17년 11월">AI</router-link>
            <router-link to="december" class="dropdown-item" data-toggle="tooltip" data-placement="right" title="업로드 예정: 17년 12월">Security</router-link>
          </div>
        </li>
        <li>
          <a href="https://www.youtube.com/playlist?list=PLTj4ip-QW96ty577FRHnACUjw4dSm2TFH" data-toggle="tooltip" data-placement="right" title="유투브 페이지로 이동합니다" class="nav-item nav-link">유투브 채널</a>
        </li>
      </ul>
      <router-link to="/login" id="login" class="col-1">
        <p v-if="!login">로그인</p>
        <p v-else>로그아웃</p>
      </router-link>
      <div class="search-tool col-3">
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
  #navbarNavDropdown {
    margin-left: 20px;
    margin-top: 5px;
  }

  #login {
    margin-top: 7px;
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
