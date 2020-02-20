<template>
  <div id="landingPage">
    <div id="box-home">
      <div id="box-content">
        <img src="https://media2.giphy.com/media/1AhvWtdoUaUHteD09g/source.gif" alt />
      </div>
      <div id="box-submit">
        <form class="form-inline">
          <div class="form-group mx-sm-3 mb-2">
            <input type="test" class="form-control" placeholder="Nama kamu" v-model="nama" />
          </div>
          <div>
            <button type="submit" class="btn btn-danger mb-2" @submit="game">Submit Nama</button>
          </div>
        </form>
      </div>
      <div>
        <img src="https://i.pinimg.com/originals/76/5f/3f/765f3f00127b2ae06706da702310a6a6.gif" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#landingPage {
  display: flex;
  align-items: center;
  background-image: url(https://lh3.googleusercontent.com/proxy/c0uZSU88D-elFkcEQgA7KrmAB2bBqsXOCcPjXMYwJMvYCZH2zn7r1SVLeJWi8hc8YOAZ8xAEsYqagjze2af7j6lV-SIvZTiyL9P5lX9ePxJ1ZnxdmwwG1BWodhTCdgQ);
  background-position: center;
  background-size: cover;
  background-image: repeat;
  height: 100vh;
  flex-direction: column;
}
#box-content,
#box-submit {
  margin-top: 2em;
}
#box-submit {
  margin-top: 3em;
  display: flex;
  justify-content: space-between;
}
</style>