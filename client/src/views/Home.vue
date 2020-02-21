<template>
  <div id="home">
    <landing v-if="!$store.state.isLogin"></landing>
    <!-- <landing></landing> -->
    <play v-else></play>
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from "@/components/Landing.vue";
import Play from '@/components/Play.vue';

export default {
  name: "Home",
  components: {
    Landing,
    Play
  }
};
</script>

<style scoped>
#home {
  height: 100%;
}
</style>
