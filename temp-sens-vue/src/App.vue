<template>
  <div id="app">
    <router-view/>
    <Toolbar/>
    <Footer/>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'
import Footer from './components/Footer'
export default{
  components: { Toolbar, Footer },
  name: 'app'
}

</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>