<template>
  <div>
    <h1>상세 내용</h1>
    {{ board }}
  </div>
</template>

<script>
  export default {
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
      };
    },
  };
</script>

<style lang="css">
</style>
