<template>
  <ul id="post-nav" class="nav flex-column">
    <li class="nav-item">
      <router-link to="/post/jul" tag="li" active-class="active" class="nav-item nav-link">Smart things</router-link>
    </li>
    <li>
      <router-link to="/post/aug" tag="li" active-class="active" class="nav-item nav-link">Smart Mobility</router-link>
    </li>
    <li>
      <router-link to="/post/sep" tag="li" active-class="active" class="nav-item nav-link">Cloud</router-link>
    </li>
    <li>
      <router-link to="/post/oct" tag="li" active-class="active" class="nav-item nav-link">Big data</router-link>
    </li>
    <li>
      <router-link to="/post/nov" tag="li" active-class="active" class="nav-item nav-link">AI</router-link>
    </li>
    <li>
      <router-link to="/post/dec" tag="li" active-class="active" class="nav-item nav-link">Security</router-link>
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
