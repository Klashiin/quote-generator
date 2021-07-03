<template>
  <div>
    <img alt="Foto de autor" :src="currQuote.imagem" class="img">
    <h1>"{{currQuote.frase}}"</h1>
    <h2>- {{ currQuote.autor }}</h2>
    <br><button v-on:click="generate()" class="btn btn-primary">QUOTE</button>
  </div>
</template>

<script>
import quote from "../quote.js"
export default {
  name: 'QuotePage',
  data: () => ({
    currQuote: quote[Math.floor(Math.random() * quote.length)],
  }),
  methods: {
    randomize() {
      this.currQuote = quote[Math.floor(Math.random() * quote.length)]
    },
    generate() {
      let lastQuote = this.currQuote;
      this.randomize();
      while(this.currQuote == lastQuote){
        this.randomize();
      }
    }
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
.btn {
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
.btn:hover {
  background-color: #ffffff;
  color: #4CAF50;
}
.img {
  height: 200px;
  width: 200px;
  object-fit:cover;
  border-radius: 50%;
}
</style>
