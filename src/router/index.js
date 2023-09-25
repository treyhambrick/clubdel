import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Photo from '../views/Photo.vue';
//import DatePick from '../views/DatePick.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/photo/:id',
    name: 'photo',
    component: Photo,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route xxx
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

  },
  {
    path: '/picker',
    name: 'picker',
    //component: DatePick,
    component:  () => import(/* webpackChunkName: "about" */ '../views/DatePick.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
