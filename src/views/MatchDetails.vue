<template>
  <div class="match-details">
    <button type="button" class="back" @click="back">
      <i class="fas fa-arrow-left"></i>
      Voltar
    </button>

    <h3 class="title">
      {{ matchTitle }}
    </h3>

    <div class="highlights">
      <div class="video-container" v-html="currentVideo"></div>

      <div class="other-videos">
        <Video
          v-for="(video, index) in videos"
          :key="index"
          :video="video"
          :index="index + 1"
          :selected="selectedVideo === index + 1"
          @toggleVideo="toggleVideo"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Video from '../components/Video.vue';

  export default {
    name: 'MatchDetails',
    props: {
      id: Number
    },
    components: {
      Video
    },
    data() {
      return {
        match: {},
        currentVideo: '',
        selectedVideo: 1
      }
    },
    methods: {
      back() {
        this.$router.push('/');
      },
      toggleVideo(videoIndex) {
        if (videoIndex === this.selectedVideo) return;

        this.selectedVideo = videoIndex;
        this.currentVideo = this.match.videos[videoIndex - 1].embed;
      }
    },
    computed: {
      videos() {
        const videos = this.match.videos;
        const maxVideos = 4;
        return videos ? videos.slice(0, maxVideos) : [];
      },
      matchTitle() {
        const title = this.match.title;
        return title ? title.replace('-', 'VS') : '';
      }
    },
    created() {
      const matchFound = this.$store.getters.getMatchById(this.id);

      if (matchFound.id === -1) {
        this.$router.push('/404');
      } else {
        this.match = matchFound;
        this.currentVideo = matchFound.videos[0].embed;
      }
    }
  }
</script>

<style scoped>
  .match-details {
    width: 85%;
    padding: 20px 0;
    margin: 0 auto;
  }

  .back {
    padding: 5px 10px;
    margin-bottom: 30px;
    background-color: transparent;
    border: 1px solid #B1B7B3;
    border-radius: 5px;
    color: #B1B7B3;
    cursor: pointer;
    transition: 0.2s color, border-color;
  }

  .back:hover {
    border-color: #25F277;
    color: #25F277;
  }

  .back i {
    margin-right: 5px;
  }

  .title {
    margin-bottom: 20px;
    font-size: 2rem;
    font-weight: 700;
    color: #FFFFFF;
  }

  .highlights {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid #B1B7B370;
    border-radius: 5px;
    background-color: #181A1B;
  }

  .video-container {
    position: relative;
    width: 60%;
  }

  .other-videos {
    width: 40%;
    margin-left: 20px;
  }

  @media (max-width: 700px) {
    .highlights {
      flex-direction: column;
    }

    .video-container {
      width: 100%;
    }

    .other-videos {
      width: 100%;
      margin: 20px 0 0;
    }
  }
</style>
