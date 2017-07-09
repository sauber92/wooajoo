<template>
  <ul id="intro-nav" class="nav nav-tabs">
    <router-link to="/intro/group" tag="li" v-on:click="filter" v-bind:class="{ active: isActive }" class="nav-item nav-link">우아주가 뭔가?</router-link>
    <router-link to="/intro/member" tag="li" v-on:click="filter" v-bind:class="{ active: !isActive }" class="nav-item nav-link">우아주 멤버</router-link>
  </ul>
</template>

<script>
  export default {
    name: 'intro-nav',
    data() {
      return {
        isActive: false,
      };
    },
    method: {
      filter: function filter() {
        this.isActive = !this.isActive;
      },
    },
  };
</script>

<style scoped>

</style>
