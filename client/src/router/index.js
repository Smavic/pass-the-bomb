import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Game from '../components/Game.vue'
// import Lose from '../components/Lose.vue'

// import Home from '../views/Home.vue'
import Lobby from '../views/Lobby.vue'
import GameOn from '../views/GameOn.vue'

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
    component:Game
  },
  {
    path: '/game/:id',
    name: 'Game',
    component:GameOn
  },
  {
    path: "/lobby",
    name: "Lobby",
    component: Lobby
  },
  {
    path: "/play",
    name: "Play",
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
