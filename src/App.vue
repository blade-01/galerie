<template>
  <div class="container">
    <router-view/>
  </div>
  <div class="container">
    <Header @search-param="searchParam" />
    <Photos :photos="photos"/>
  </div>
 
</template>

<script>
// import Home from '@/views/Home.vue'
import Header from '@/components/Header.vue'
import Photos from '@/components/Photos.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {Photos, Header},
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

<style>
:root {
  --text: #333333;
  --bg: #ffffff;
  --btn: #3db46d;
  --form: #BDBDBD;
  --svg-fill: #333333;
  --filter: brightness(1);
}
:root .dark{
  --text: #ffffff;
  --bg: #333333;
  --form: #BDBDBD;
  --svg-fill: #ffffff;
  --filter: brightness(0.8);
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--bg);
  color: var(--text);
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
.container {
  width: 90%;
  overflow: hidden;
  margin: auto;
}
form input {
  padding: 0.8rem 2rem;
  display: block;
  width: 100%;
  border-radius: 5px;
  border: solid 1px var(--form);
  color: var(--text);
  outline: none;
}
form input::placeholder {
  color: var(--form);
}
svg,
button {
  cursor: pointer;
}
img {
  width: 100%;
  border-radius: 10px;
}
.btn {
  padding: 0.8rem;
  display: block;
  border-radius: 5px;
  border: none;
  background: var(--btn);
  color: var(--bg);
  outline: none;
  font-weight: bold;
}
.btn-shadow {
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14);
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
@media screen and (min-width: 700px) {
 .container {
    width: 650px;
  }
}
@media screen and (min-width: 1000px) {
 .container {
    width: 900px;
  }
}
@media screen and (min-width: 1200px) {
 .container {
    width: 1200px;
  }
}
</style>