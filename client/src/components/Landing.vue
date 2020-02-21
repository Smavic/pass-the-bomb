<template>
  <div id="landing-page" class="login page">
    <div id="background-video">
      <!-- <video
      src="blob:https://www.youtube.com/54d99396-8f54-41c4-a00d-936c49b45503"
    ></video> -->
      <!-- <iframe
        src="https://www.youtube.com/embed/wXiql0xo63E?autoplay=1&loop=1&mute=1"
        width="100%"
        height="100%"
        frameborder="0"
        allowfullscreen
        loop
      ></iframe> -->
    </div>
    <div class="form">
      <h3 class="title">What's your nickname?</h3>
      <input
        class="usernameInput"
        type="text"
        @keypress.enter="enterTheGame"
        v-model="nickname"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import io from 'socket.io-client';
export default {
  name: "LandingPage",
  data() {
    return {
      nickname: null
    };
  },
  computed: {
    ...mapGetters(["getNickname", "getSocket"])
  },
  methods: {
    ...mapActions(["login"]),
    ...mapMutations(["setSocket"]),
    enterTheGame() {
      const vm = this;
      vm.login(vm.nickname);
      console.log(vm.getNickname);
      vm.nickname = null;
      console.log(vm.nickname);
      if (vm.getSocket === null) {
        const socket = io("http://localhost:3000");
        vm.setSocket(socket);
        // socket.emit("join-game", "hi");
        // vm.$store.socket.emit("join-game", "hi");
      }
      // this.$router.replace("/lobby")
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  &.page {
    background-color: black;
    #background-video {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
    }
    .form {
      height: 100px;
      margin-top: -100px;
      position: absolute;
      text-align: center;
      top: 50%;
      width: 100%;
      .usernameInput {
        background-color: transparent;
        border: none;
        border-bottom: 2px dashed #fff;
        outline: none;
        padding-bottom: 15px;
        text-align: center;
        width: 400px;
      }
    }
    .title,
    .usernameInput {
      color: #fff;
      font-weight: 100;
    }
    .title {
      font-size: 200%;
    }
  }
}
.page {
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>
