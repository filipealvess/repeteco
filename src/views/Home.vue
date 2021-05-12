<template>
  <div class="home">
    <h2>Melhores momentos dos jogos mais recentes:</h2>

    <div>
      <MatchItem
      v-for="match in matchesToBeDisplayed"
      :key="match.id"
      :match="match"
      />
    </div>

    <button
      @click="showMoreMatchs"
      v-html="buttonContent"
      :class="buttonClass"
    ></button>
  </div>
</template>

<script>
  import MatchItem from '../components/MatchItem.vue';
  import { mapState } from 'vuex';

  export default {
    name: 'Home',
    components: {
      MatchItem
    },
    data() {
      return {
        numberItemsDisplayed: 10,
        buttonContent: 'Ver mais',
        buttonClass: '',
        ...mapState(['matches'])
      }
    },
    methods: {
      showMoreMatchs() {
        const matchesLength = this.matches().length;
        const noMoreMatches = this.numberItemsDisplayed >= matchesLength;
        const animationTime = 2000;
        const loadingIcon = '<i class="fas fa-spinner fa-pulse"></i>';

        this.buttonContent = loadingIcon;

        if (noMoreMatches) {
          setTimeout(() => {
            this.buttonContent = 'Não há mais partidas';
            this.buttonClass = 'blocked';
          }, animationTime);

          return;
        }

        setTimeout(() => {
          this.numberItemsDisplayed += 10;
          this.buttonContent = 'Ver mais';
        }, animationTime);
      }
    },
    computed: {
      matchesToBeDisplayed() {
        return this.matches().slice(0, this.numberItemsDisplayed);
      }
    }
  }
</script>

<style scoped>
  .home {
    width: 85%;
    padding: 40px 0;
    margin: 0 auto;
  }

  h2 {
    margin-bottom: 30px;
    font-size: 2rem;
    font-weight: 700;
    color: #FFFFFF;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100px;
    min-height: 40px;
    padding: 7px 20px;
    margin: 30px auto 0;
    border: 2px solid #B1B7B3;
    border-radius: 5px;
    background-color: transparent;
    color: #B1B7B3;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.2s color, border-color;
  }

  button, button * {
    font-size: 1.4rem;
  }

  button:hover:not(.blocked) {
    border-color: #25F277;
    color: #25F277;
  }

  button.blocked {
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    h2 {
      text-align: center;
    }

    button {
      width: 100%;
    }

    button:hover:not(.blocked) {
      border-color: #B1B7B3;
      color: #B1B7B3;
    }
  }
</style>
