<template>
  <div id="back-game">
    <div id="box-console">
      <div id="limit-number">
        <h1>10</h1>
      </div>
      <div id="name"></div>
      <div id="hit-number"></div>
      <div id="hit-button"></div>
    </div>
  </div>
</template>

<script>
export default {};
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
  display: flex;
  flex-direction: column;
  padding: 3em;
  text-align: center;
  color: white;
  background-color: #34495e;
  margin: 0 auto;
  border-radius: 3em;
  width: 30em;
  height: 60em;
}
/* https://66.media.tumblr.com/036d749ffaf593df295bf18420bc2614/tumblr_or59maxzR61vz9r4no1_500.gifv */
/* https://66.media.tumblr.com/595e363f481d79d5f0be48342082b0df/tumblr_ordoc7AzwS1via0slo6_500.gifv */
</style>