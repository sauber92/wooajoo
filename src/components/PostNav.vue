<template>
  <ul id="post-nav" class="nav flex-column">
    <li class="nav-item">
      <router-link to="/post/july" tag="li" active-class="active" class="nav-item nav-link">Smart things</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/post/none" tag="li" active-class="active" class="nav-item nav-link"  data-toggle="tooltip" data-placement="right" title="업로드 예정: 17년 8월" >Smart Mobility</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/post/none" tag="li" active-class="active" class="nav-item nav-link"  data-toggle="tooltip" data-placement="right" title="업로드 예정: 17년 9월" >Cloud</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/post/none" tag="li" active-class="active" class="nav-item nav-link"  data-toggle="tooltip" data-placement="right" title="업로드 예정: 17년 10월" >Big data</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/post/none" tag="li" active-class="active" class="nav-item nav-link"  data-toggle="tooltip" data-placement="right" title="업로드 예정: 17년 11월" >AI</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/post/none" tag="li" active-class="active" class="nav-item nav-link"  data-toggle="tooltip" data-placement="right" title="업로드 예정: 17년 12월" >Security</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'post-nav',
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
