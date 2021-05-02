<template>
  <header>
    <div class="header-content">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/logo.png" alt="Repeteco">
        </router-link>
      </div>

      <a href="https://github.com/filipealvess/repeteco" target="_blank">
        <i class="fab fa-github github-link"></i>
      </a>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>
  header {
    background-color: #121413;
    padding: 10px 0;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    margin: 0 auto;
  }

  .logo img {
    height: 3.2rem;
  }

  .github-link {
    color: #B1B7B3;
    font-size: 2.4rem;
    transition: 0.2s color;
  }

  .github-link:hover {
    color: #25F277;
  }
</style>
