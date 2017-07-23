<template>
  <div>
    <h1>상세 내용</h1>

  </div>
</template>

<script>
  export default {
// eslint-disable-next-line object-shorthand
    created: function () {
      const id = this.$route.params.id;
      this.$http.get(`/api/movies/${id}`)
        .then((response) => {
          this.movie = response.data;
        });
    },
// eslint-disable-next-line object-shorthand
    data: function () {
      return {
        movie: {},
      };
    },
  };
</script>
