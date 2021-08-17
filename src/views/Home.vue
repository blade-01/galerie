<template>
  <div class="home">
    <Header @search-param="searchParam" />
    <Photos :photos="photos"/>
  </div>
</template>

<script>
import Photos from '@/components/Photos.vue'
import Header from '@/components/Header.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Photos,
    Header
  },
  data() {
    return {
      photos: [],
      key: "4PADPOVyni-pXD_JEn8Hk36ENMebemzIz7ys9k2fH8U",
    }
  },
  methods: {
    async searchParam(search) {
    const res = await axios.get(`https://api.unsplash.com/search/photos?query=${search}&client_id=${this.key}&per_page=8`);
    const result = res.data.results;
    this.photos = result;
    }
  }
}
</script>
