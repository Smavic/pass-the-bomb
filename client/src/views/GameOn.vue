<template>
  <Home2 v-if="!$store.state.isLogin"></Home2>
</template>

<script>
import Home2 from '@/components/Home2.vue';
export default {
  name: "GameOn",
  components: {
    Home2
  }
}
</script>

<style>

</style>