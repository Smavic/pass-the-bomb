<template>
  <div>
    <h1>Game</h1>
    <h2>{{ getBomb }}</h2>
    <input type="number" max="3" min="1" v-model="power" />
    <button @click="hit">hit</button>
  </div>
</template>

<script>
// import store from '../store';
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Play",
  created() {
    const vm = this;
    vm.getSocket.emit("join-game", vm.$route.params.id);
    vm.getSocket.on("bomb-hit", function (hit) {
      console.log(hit);
      vm.hitBomb(hit);
    })
  },
  data() {
    return {
      power: null
    };
  },
  computed: {
    ...mapGetters(["getSocket", "getBomb"])
  },
  methods: {
    ...mapMutations(["hitBomb"]),
    hit() {
      const vm = this;
      vm.getSocket.emit("hit", {
        urlId: vm.$route.params.id,
        hitPow: vm.power
      });
    }
  }
};
</script>

<style></style>
