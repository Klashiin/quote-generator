<template>
  <div>
    <img alt="Foto de Charles Chaplin" :src="imagem">
    <h1>{{`"${quote}"`}}</h1>
    <h2>- {{ autor }}</h2>
    <br><button v-on:click="generate()" class="button">QUOTE</button>
  </div>
</template>

<script>
export default {
  name: 'QuotePage',
  data: () => ({
    quote: 'Passei no Senai krl *-*',
    imagem: 'https://br.web.img2.acsta.net/c_310_420/pictures/14/12/29/17/16/351479.jpg',
    autor: 'Charles Chaplin'
  }),
  methods: {
    generate() {
      this.quote = 'SHABOOYA ROLL CALL'
      this.imagem = 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-its-always-sunny-in-philadelphia-danny-devito.jpg'
      this.autor = 'Frank Reynolds'
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
