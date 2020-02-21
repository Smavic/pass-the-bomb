<template>
  <div id="back-game">
    <div id="box-console">
      <div id="limit-number">
        <h1>{{numberHit}}</h1>
      </div>
      <div id="name">
        <h1>{{nama}}</h1>
      </div>
      <div id="hit-number">
        <form action>
          <input type="number" placeholder="hit number" v-model="angkaHit" />
        </form>
      </div>
      <button type="button" id="hit-button" @click="hitPush">
        <span>PUSH</span>
      </button>
      <div id="console-anime">
        <img src="https://files.gamebanana.com/img/ico/sprays/bomberman_victory2.gif" alt />
      </div>
    </div>
  </div>
</template>

<script>
import backsound from "../assets/20 - Robotnik.mp3";
// import hitAudio from "../assets/hit.mp3";
export default {
  data() {
    return {
      nama: localStorage.nama,
      angkaHit: null,
      temp: 0
    };
  },
  computed: {
    numberHit() {
      // if (this.$store.state.data <= 0) {
      //   this.$router.push("/lose");
      // }
      return this.$store.state.data;
    }
  },
  created() {
    // if (this.temp > 0) {
    //   this.$store.state.data = this.temp;
    // } else {
    //   this.$store.state.data = Math.floor(Math.random() * Math.floor(10)) + 1;
    //   this.temp = this.$store.state.data;
    // }
    this.$store.state.data = 10;
  },
  mounted() {
    let backAudio = new Audio(backsound);
    this.$socket.on("pengurangHit", params => {
      this.$store.state.data -= params;
    });
    backAudio.play();
  },
  methods: {
    hitPush() {
      // let angka = this.$store.state.data - this.angkaHit;
      // this.$store.state.data = angka;
      this.$socket.emit("hitPush", this.angkaHit);
      // let hitButton = new Audio(hitAudio);
      // hitButton.play();
    }
  }
};
</script>

<style>
#back-game {
  background-image: url(https://i.pinimg.com/originals/12/30/61/123061002d5572debcf347600fd08e4c.png);
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  opacity: 1;
}
#box-console {
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 3em;
  text-align: center;
  color: white;
  background-color: #34495e;
  margin: 0 auto;
  border-radius: 3em;
  width: 30em;
  height: 50em;
}
#name h1 {
  font-size: 5em;
}
#limit-number h1 {
  font-size: 5em;
}
#hit-number {
  margin: 10px auto;
  border: 1px solid black;
  width: 10em;
}
#console-anime {
  text-align: center;
}
#hit-button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2em 0px;
  width: 100%;
  height: 5em;
  background-color: #e67e22;
  /* border-radius: 50%; */
}
#hit-button span {
  font-size: 2em;
}
</style>