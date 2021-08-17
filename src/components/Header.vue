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
      <div class="icons">
        <input type="checkbox" id='theme-switch' class='theme-switch' v-model="darkMode" @click="toggleTheme"/>
        <label for='theme-switch'>
          <span v-if="darkMode === true">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="none" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>
          </span>
          <span v-else>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="none" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>
          </span>
        </label>
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
      darkMode: false,
    }
  },
  methods: {
    toggleTheme() {
      document.body.classList.toggle('dark');
    },
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
header .icons input.theme-switch {
  display: none;
}
header .icons input.theme-switch + label {
  cursor: pointer;
}
header .icons input.theme-switch:not(:checked) + label:hover {
  cursor: pointer;
}
header .icons input.theme-switch + label:active,
header .icons input.theme-switch:checked + label {
  cursor: pointer;
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