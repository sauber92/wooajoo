<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
  import Navbar from './components/Navbar';
  import Hello from './components/Hello';
  import Foot from './components/Foot';

  export default {
    name: 'app',
    components: {
      Navbar,
      Hello,
      Foot,
    },
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 10px;
  }

  a {
    text-decoration: none;
    color: #000000;
  }

  a:hover {
    color: #ed9f34;
  }

  li:hover {
    color: #ed9f34;
    cursor: pointer;
  }

  .form-control:focus {
    border-color: #ed9f34;
  }
</style>
