<template>
  <div class="not-found">
    <div class="icon-404">
      <p class="four">4</p>
      <img src="../assets/ball.svg" alt="Bola de futebol" class="ball">
      <p class="four">4</p>
    </div>

    <p class="message">
      Sinto muito, essa página não foi encontrada.
    </p>

    <button type="button" @click="back">
      <i class="fas fa-home"></i>
      Volte para o início
    </button>
  </div>
</template>

<script>
  export default {
    name: 'NotFound',
    methods: {
      back() {
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
  .not-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 85%;
    height: calc(100vh - 5.5rem);
    margin: 0 auto;
  }

  .icon-404 {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 5rem;
  }

  .icon-404::before {
    content: '';
    position: absolute;
    bottom: 0.5rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #3E875B70;
    animation: shaded 1s ease-out infinite;
  }

  @keyframes shaded {
    0%, 100% { width: 5rem; }
    50% { width: 1rem; }
  }

  .icon-404::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 19rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #25F277;
    transform: translateX(-50%);
    z-index: -1;
  }

  .ball {
    height: 7.2rem;
    margin: 0 10px;
    animation: jump 1s ease-out infinite;
  }

  @keyframes jump {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5rem); }
  }

  .four {
    font-size: 7.2rem;
    color: #FFFFFF;
  }

  .message {
    margin-bottom: 7rem;
    font-size: 1.6rem;
    color: #FFFFFF;
    text-align: center;
  }

  button {
    padding: 10px 15px;
    border: 1px solid #25F277;
    border-radius: 5px;
    background-color: transparent;
    color: #25F277;
    font-size: 1.4rem;
    cursor: pointer;
  }

  button i {
    margin-right: 10px;
  }
</style>
