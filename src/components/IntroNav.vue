<template>
  <ul id="intro-nav" class="nav nav-tabs">
    <router-link to="/intro/group" tag="li" active-class="active" class="nav-item nav-link">소모임 소개</router-link>
    <router-link to="/intro/member" tag="li" active-class="active" class="nav-item nav-link">우아주 멤버</router-link>
  </ul>
</template>

<script>
  export default {
    name: 'intro-nav',
  };
</script>

<style scoped>
  li {
    color: #bdbdbd;
  }
</style>
