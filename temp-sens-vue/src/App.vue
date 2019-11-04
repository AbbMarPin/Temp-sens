<template>
<v-content>
    <div v-if="addnew!==true">
      <!-- AVAKTIVERA FÖR ATT VISA EN CHART!!! -->
      <!-- <Enchart/> -->
    <v-layout row wrap>
         <v-flex xs12>
    <GetDevices Rubrik="Oregisterade enheter" />
     </v-flex>
     <v-divider/>
        <v-flex xs12>
    <GetDevices Regged Rubrik="Registerade enheter" />
     </v-flex>
      </v-layout>
      </div>
          <div v-else>
     
      </div>
    </v-content>
<div id="app">
    <router-view/>
    <Toolbar/>
    <Footer/>
  </div>
  </div>
  
</template>

<script>
import GetDevices from './components/GetDevices'
import Enchart from './components/Enchart'
import Toolbar from './components/Toolbar'
export default{
  name: 'app',
  components: { Toolbar, Footer, GetDevices, Enchart },
    data () {
    return {
      addnew:false,
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