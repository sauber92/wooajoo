<template>
  <div id="post" class="row movies">
    <post-nav class="col-2"></post-nav>
    <!--<router-view class="col-10"></router-view>-->
    <div class="col-8">
      <div class="movies">
        <h1>영화 목록</h1>
        <div v-for="movie in movies" class="movie">
          <img v-bind:src="movie.poster" class="poster">
          <div>
            <strong></strong>, <i></i> []
            <router-link :to="{ name: 'Show', params: { id: movie.id }}">더보기</router-link>
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
  // eslint-disable-next-line no-unused-vars
  import axios from 'axios';
  import PostNav from './PostNav';

  export default {
    name: 'post',
    components: {
      PostNav,
    },
    data: () => ({
      movies: [],
      errors: [],
    }),
    // eslint-disable-next-line space-before-function-paren
    created () {
      this.$http.get('/api/movies')
        .then((response) => {
          this.movies = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  };
</script>

<style scoped>
</style>
