<template>
  <header>
    <div class="flex-item">
      <router-link to="/"><img src="../assets/img/logo.jpg" alt=""></router-link>
      <div class="search-photo">
        <form @submit.prevent="searchPhoto">
          <input type="text" placeholder="Search by name" v-model="search">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      emits: ['search-param'],
    }
  },
  methods: {
    searchPhoto() {
      this.$emit('search-param', this.search);
      this.search = '';
    }
  },
  mounted() {
    this.search = 'nigeria';
    this.searchPhoto();
  }
}
</script>

<style scoped>
header {
  padding: 1rem 0;
}
header .flex-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header img {
  width: 40px;
  height: 40px;    
  border-radius: 50%;
  filter: var(--filter);
}
header .icons svg path {
  fill: var(--svg-fill);
}
.search-photo form {
  position: relative;
}
.search-photo form input {
  background: transparent;
}
.search-photo form svg {
  width: 20px;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(0, -50%);
}
@media screen and (min-width: 700px) {
  header .flex-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .search-photo form input {
    width: 400px;
  }
}
</style>