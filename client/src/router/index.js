import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Game from '../components/Game.vue'
// import Lose from '../components/Lose.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/:id',
    name: 'Home',
    component: Home
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  }
  // {
  //   path: '/lose',
  //   name: 'Lose',
  //   component: Lose
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
