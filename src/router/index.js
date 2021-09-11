import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PhotoModal from '../views/PhotoModal.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/photos/:id',
        name: 'Photos',
        component: PhotoModal,
        props: true
      }
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
