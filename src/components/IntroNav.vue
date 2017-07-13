<template>
  <ul id="intro-nav" class="nav flex-column">
    <li class="nav-item">
      <router-link to="/intro/group" tag="li" active-class="active" class="nav-item nav-link">소모임 소개</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/intro/member" tag="li" active-class="active" class="nav-item nav-link">우아주 멤버</router-link>
    </li>
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
  li:hover {
    color: #ffffff;
    background-color: #ed9f34;
  }

  .active {
    color: #ed9f34;
  }
</style>
