<template>
  <div class="cards" v-if="myData">
    <div class="card" v-for="photo in photos" :key="photo.id">
      <router-link :to="{name:'Photos', params:{id: photo.id}}">
        <img :src="photo.urls.small" alt="unsplash_image">
        <div class="card-body">
          <p>{{photo.user.first_name}} {{photo.user.last_name}}</p>
          <small>{{photo.user.location ? photo.user.location : ''}}</small>
        </div>
      </router-link>
    </div>
  </div>
  <div class="cards" v-else>
    <div v-for="data in datas" :key="data">
      <content-loader
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
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader';
export default {
  name: 'Photos',
  props: ['photos'],
  components: {
    ContentLoader
  },
  data() {
    return {
      myData: null,
      datas: 8,
    }
  },
  mounted() {
    setTimeout(() => {this.myData = true}, 2000)
  }
}
</script>

<style scoped>
.cards {
  margin-top: 2rem;
}
.card {
  cursor: pointer;
}
.cards .card {
  margin-bottom: 0.75rem;
  position: relative;
}
.cards .card img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  filter: brightness(0.8);
}
.cards .card .card-body {
  padding: 1rem 1rem 0.5rem;
  position: absolute;
  left: 0;
  bottom: 0.5rem;
  color: #fff;
}
.cards .card .card-body p {
  font-weight: bold;
  margin: 0;
  padding: 0.3rem 0;
}
.del-btn {
  padding: 0.5rem 1rem;
  border-radius: 50px;
  color: var(--del-btn);
  background: transparent;
  border: solid 1px var(--del-btn);
  text-align: center;
  position: absolute;
  top: 20px;
  right: 20px;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
}
.card:hover .del-btn {
  opacity: 1;
}
@media screen and (min-width: 700px) {
  .cards {
    column-count: 3;
    column-gap: 1.25rem;
  }
  .cards .card {
    display: inline-block;
    width: 100%;
  }
}
@media screen and (min-width: 1000px) {
  .search-photo form input {
    width: 300px;
  }
  .cards {
    column-count: 3;
  }
}
</style>