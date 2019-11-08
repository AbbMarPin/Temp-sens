<template>
  <div id="app">
        <Tabell/>
    <router-view/>
    <Toolbar/>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'
import tempChartData from './views/temp-chart/tempChart-data.js'
import Tabell from './components/Tabell'
export default{
  components: { Toolbar, Tabell },
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