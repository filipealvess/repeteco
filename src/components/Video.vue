<template>
  <div
    class="video"
    :class="{ 'selected' : selected }"
    @click="$emit('toggleVideo', index)"
  >
    <p>Vídeo {{ index }}</p>
    <i class="fas fa-play-circle"></i>
  </div>
</template>

<script>
  export default {
    name: 'Video',
    props: {
      video: Object,
      index: Number,
      selected: Boolean
    }
  }
</script>

<style scoped>
  .video {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #B1B7B3;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s border-color;
  }

  .video * {
    font-size: 1.6rem;
    color: #B1B7B3;
  }

  .video.selected {
    border-color: #25F277;
  }

  .video.selected * {
    color: #25F277;
  }
</style>
