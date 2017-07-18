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
  @import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
  @import url(http://fonts.googleapis.com/earlyaccess/nanumgothiccoding.css);
  @import url(http://fonts.googleapis.com/earlyaccess/nanummyeongjo.css);
  @import url(http://fonts.googleapis.com/earlyaccess/nanumbrushscript.css);
  @import url(http://fonts.googleapis.com/earlyaccess/nanumpenscript.css);
  @import url(http://cdn.jsdelivr.net/font-nanum/1.0/nanumbarungothic/nanumbarungothic.css);

  #app {
    font-family: 'Nanum Gothic', sans-serif;
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
    color: rgba(255,193,7,1);;
  }

  li:hover {
    color: rgba(255,193,7,1);;
    cursor: pointer;
  }

  .form-control:focus {
    border-color: rgba(255,193,7,1);;
  }
</style>
