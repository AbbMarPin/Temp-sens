<template>
  <div id="app">
    <router-view/>
    <Toolbar/>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'
// import tempChartData from './views/temp-chart/tempChart-data.js'
export default{
  components: { Toolbar },
  name: 'app',
  data() {
    return {
      tempChartData: tempChartData,
    }
  }
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