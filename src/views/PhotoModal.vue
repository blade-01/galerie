<template>
  <div class="photo-modal" v-if="myData">
    <svg class="w-6 h-6 close" @click="redirect" fill="#fff" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <div class="photo-modal-content">
      <img :src="photo.urls.full" alt="">
      <div class="photo-body">
        <p>{{photo.user.first_name}} {{photo.user.last_name}}</p>
        <small>{{photo.user.location}}</small>
      </div>
    </div>
  </div>
  <div class="photo-modal" v-else>
    <svg class="w-6 h-6 close" @click="redirect" fill="#fff" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <content-loader class="photo-modal-content"
      :width="400"
      :height="160"
      :speed="2"
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb">
      <rect x="416" y="43" rx="3" ry="3" width="88" height="6" /> 
      <rect x="4" y="14" rx="3" ry="3" width="296" height="78" /> 
      <rect x="5" y="99" rx="3" ry="3" width="239" height="6" /> 
      <rect x="6" y="112" rx="3" ry="3" width="196" height="7" />
    </content-loader>
  </div>
</template>

<script>
import axios from 'axios'
import { ContentLoader } from 'vue-content-loader';
export default {
  name: 'PhotosModal',
  props: ['id'],
  components: {
    ContentLoader
  },
  data() {
    return {
      myData: null,
      key: '4PADPOVyni-pXD_JEn8Hk36ENMebemzIz7ys9k2fH8U',
    }
  },
  methods: {
    redirect() {
      this.$router.go(-1);
    },
    async showPhoto() {
    const res = await axios.get(`https://api.unsplash.com/photos/${this.id}/?client_id=${this.key}`);
    this.photo = res.data;
    }
  },
  mounted() {
    this.showPhoto()
    setTimeout(() => {this.myData = true}, 2000)
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
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
}
.photo-modal-content {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, 0);
  background: var(--bg);
  border-radius: 5px;
  width: 90%;
}
.photo-modal-content .photo-body {
  padding: 0.5rem 1rem 1rem;
}
.photo-modal-content .photo-body p {
  margin: 0.5rem 0;
  padding: 0;
}
.photo-modal-content .photo-body small {
  color: gray;
}
.photo-modal-content img {
  border-radius: 5px 5px 0 0;
  object-fit: cover;
  max-height: 300px;
}
.photo-modal-content h4 {
  margin-bottom: 1rem;
}
.close {
  width: 30px;
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
    top: 30px;
    right: 70px;
  }
}
</style>