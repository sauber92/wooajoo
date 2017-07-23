<template>
  <div id="post" class="row movies">
    <post-nav class="col-2"></post-nav>
    <!--<router-view class="col-10"></router-view>-->
    <div v-for="movie in movies" class="movie">
      <img v-bind:src="movie.poster" class="poster">
      <div>
        <strong></strong>, <i></i> []
        <router-link :to="{ name: 'Show', params: { id: movie.id }}">더보기</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import PostNav from './PostNav';
//  import PostJuly from './PostJuly';
//  import PostNone from './PostNone';

  export default {
    name: 'intro',
    components: {
      PostNav,
//      PostJuly,
//      PostNone,
    },
    // eslint-disable-next-line space-before-function-paren
    created () {
      this.$http.get('/api/movies')
        .then((response) => {
          this.posts = response.data;
        });
    },
    // eslint-disable-next-line space-before-function-paren
    data () {
      return {
        movies: [],
      };
    },
  };
</script>

<style scoped>
</style>
