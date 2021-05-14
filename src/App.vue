<template>
  <div id="app">
    <Header />

    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header.vue';

  export default {
    name: 'App',
    components: {
      Header
    },
    created() {
      this.$store.dispatch('getMatches');
    }
  }
</script>

<style>
  html {
    font-size: 10px;
  }

  body {
    background-color: #1B1E1F;
  }

  * {
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    text-decoration: none;
    box-sizing: border-box;
  }
</style>
