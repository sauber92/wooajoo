<template>
  <div id="app">
    <navbar></navbar>
    <hello></hello>
    <!--<login></login>-->
  </div>
</template>

<script>
//  import Login from './components/Login';
  import Navbar from './components/Navbar';
  import Hello from './components/Hello';

  export default {
    name: 'app',
    components: {
      Navbar,
      Hello,
//      Login,
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

  .form-control:focus {
    border-color: #ed9f34;
  }
</style>
