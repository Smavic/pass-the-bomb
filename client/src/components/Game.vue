<template>
  <div id="back-game">
    <div id="box-console">
      <div id="limit-number">
        <h1>10</h1>
      </div>
      <div id="name">
        <h1>{{nama}}</h1>
      </div>
      <div id="hit-number">
        <form action>
          <input type="number" placeholder="hit number" />
        </form>
      </div>
      <div id="hit-button">
        <span>PUSH</span>
      </div>
      <div id="console-anime">
        <img src="https://files.gamebanana.com/img/ico/sprays/bomberman_victory2.gif" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nama: localStorage.nama
    };
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