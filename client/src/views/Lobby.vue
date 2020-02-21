<template>
  <div class="lobby py-4">
    <b-form action>
      <h1 style="color: #df0054; font-weight:bold">Hi, {{ getNickname }}</h1>
      <b-row class="my-1 justify-content-center">
        <input
          id="input-small"
          size="sm"
          placeholder="Room Name"
          v-model="roomName"
          type="text"
          maxlength="12"
          minlength="4"
          autocomplete="off"
        />
        <b-button type="submit" @click.prevent="createRoom"
          >create room</b-button
        >
      </b-row>
    </b-form>
    <div class="container mt-4 w-100" style="display: flex; flex-wrap: wrap;">
      <!-- <Room v-for="room in roomList" :key="room.id" :room="room" /> -->
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import store from '../store';
export default {
  beforeRouteEnter(to, from, next){
    if (store.getters.getIsLogin) {
      next();
    }
    else {
      next("/")
    }
  },
  name: "Lobby",
  data() {
    return {
      roomName: ""
    };
  },
  computed: {
    ...mapGetters(["getNickname", "getSocket"])
  },
  methods: {
    createRoom() {
      // const payload = {
      //   name: this.room
      // }
    }
  },
  created() {
    // const vm = this;
  }
};
</script>

<style scoped>
.lobby {
  background: url("https://images.unsplash.com/photo-1474926136673-20f4d627b833?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Pacifico", cursive;
  font-family: "Special Elite", cursive;
}
.lets-play {
  width: 300px;
  font-size: 40px;
}
h3 {
  font-size: 40px;
  color: #df0054;
}
</style>
