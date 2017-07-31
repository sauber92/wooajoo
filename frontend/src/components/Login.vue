<template>
  <div id="login" class="form-group">
    <!--<h2>Sign in</h2>-->
    <!--<input type="email" class="form-control" placeholder="Email address">-->
    <!--<input type="password" class="form-control" placeholder="Password">-->
    <!--<button type="submit" class="btn btn-primary">Sign in</button>-->
    <h1>아직 개발 중입니다 :-(</h1>
    <router-link to="/auth/google">구글 아이디로 로그인하기</router-link>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data: () => ({

    }),
    // eslint-disable-next-line space-before-function-paren
    created () {
      this.$http.get('/login')
        .then((response) => {

        });
    },
  };
</script>
