<template>
  <div class="quote">
    <img alt="Foto de Charles Chaplin" src="../assets/charles-chaplin.jpeg">
    <br><button class="button">QUOTE</button>
    <h1>{{ frase }}</h1>
    <p>- Charles Chaplin</p>
  </div>
</template>

<script>
export default {
  name: 'QuotePage',
  props: {
    frase: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.button {
  background-color: #4CAF50;
  border: 4px solid #4CAF50;
  color:#ffffff;
  padding: 15px 32px;
  text-align: center;
  font-weight: bold;
  display: inline-block;
  font-size: 20px;
  transition-duration: 0.4s;
}
.button:hover {
  background-color: #ffffff;
  color: #4CAF50;
}
</style>
