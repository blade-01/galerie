<template>
  <div class="cards">
    <div class="card" v-for="photo in photos" :key="photo.id">
      <router-link :to="{name:'Photos', params:{id: photo.id}}">
        <img :src="photo.urls.small" alt="unsplash_image">
        <div class="card-body">
          <p>{{photo.user.first_name}}</p>
          <small>{{photo.user.location ? photo.user.location : ''}}</small>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Photos',
  props: ['photos']
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