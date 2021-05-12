<template>
  <div class="match" @click="goToDetailsPage">
    <div class="thumbnail">
      <img :src="match.thumbnail" alt="Imagem da partida">
    </div>

    <div class="infos">
      <h3 class="title">{{ matchTitle }}</h3>
      <p class="competition">{{ match.competition.name }}</p>
      <p class="date">{{ matchDate }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MatchItem',
    props: {
      match: Object
    },
    computed: {
      matchTitle() {
        return this.match.title.replace('-', 'VS');
      },
      matchDate() {
        const rawDate = new Date(this.match.date);
        let day = rawDate.getDate();
        let month = rawDate.getMonth() + 1;
        const year = rawDate.getFullYear();

        day = day < 10 ? ('0' + day) : day;
        month = month < 10 ? ('0' + month) : month;

        return `${day}/${month}/${year}`;
      }
    },
    methods: {
      goToDetailsPage() {
        this.$router.push(`/match/${this.match.id}`);
      }
    }
  }
</script>

<style scoped>
  .match {
    display: flex;
    position: relative;
    padding: 15px;
    border: 1px solid #B1B7B3;
    border-radius: 8px;
    background-color: #181A1B;
    cursor: pointer;
    transition: 0.2s border-color;
  }

  .match + .match {
    margin-top: 20px;
  }

  .match:hover {
    border-color: #25F277;
  }

  .match:hover::after {
    color: #25F277;
  }

  .match::after {
    content: '\f061';
    position: absolute;
    top: 50%;
    right: 30px;
    font-family: 'Font Awesome 5 Free';
    font-size: 2rem;
    font-weight: bold;
    color: transparent;
    transform: translateY(-50%);
    transition: 0.2s color;
  }

  .thumbnail {
    width: 150px;
    margin-right: 15px;
  }

  .thumbnail img {
    width: 100%;
    height: 100%;
  }

  .infos {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    margin-bottom: 20px;
    color: #25F277;
    font-size: 1.8rem;
    font-weight: 700;
  }

  .competition, .date {
    font-size: 1.4rem;
    color: #B1B7B3;
  }

  .competition {
    margin-bottom: 5px;
  }

  @media (max-width: 600px) {
    .match {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 25px;
    }

    .match:hover {
      border-color: #B1B7B3;
    }

    .match:hover::after {
      color: transparent;
    }

    .title {
      margin: 10px 0 0;
      text-align: center;
    }

    .competition, .date {
      display: none;
    }
  }
</style>
