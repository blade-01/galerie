<template>
  <div class="photo-modal">
    <svg class="w-6 h-6 close" @click="redirect" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <div class="photo-modal-content">
      <p>{{id}}</p>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'PhotosModal',
  props: ['id'],
  methods: {
    redirect() {
      this.$router.push('/');
    },
    // async showPhoto() {
    // const res = await axios.get(`https://api.unsplash.com/search/photo?client_id=${this.id}&per_page=8`);
    // const result = res.data.results;
    // this.photos = result;
    // }
  },
  mounted() {
    // this.showPhoto()
  }
}
</script>

<style scoped>
.photo-modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
}
.photo-modal-content {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, 0);
  background: var(--bg);
  padding: 0 1rem;
  border-radius: 5px;
  width: 90%;
}
.photo-modal-content h4 {
  margin-bottom: 1rem;
}
.close {
  width: 25px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;
}
@media screen and (min-width: 700px) {
  .photo-modal-content {
    width: 450px;
  }
  .close {
    top: 50px;
    right: 70px;
  }
}
</style>