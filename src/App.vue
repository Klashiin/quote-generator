<template>
  <quote-page/>
</template>

<script>
import QuotePage from './components/QuotePage.vue'

export default {
  name: 'App',
  components: {
    QuotePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
