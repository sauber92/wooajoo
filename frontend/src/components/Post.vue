<template>
  <div id="post" class="row">
    <post-nav class="col-2"></post-nav>
    <!--<router-view class="col-10"></router-view>-->
    <div class="col-8">
      <div class="boards">
        <h1>영화 목록</h1>
        <div v-for="board in boards" class="board">
          <img v-bind:src="board.poster" class="poster">
          <div>
            <strong> {{ board.title }} </strong>, <i> {{ board.created_at }} </i> []
            <router-link :to="{ name: 'Show', params: { id: board._id }}">더보기</router-link>
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
      boards: [],
      errors: [],
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
</style>
