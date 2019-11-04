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
  <!-- <div id="app">
    <router-view/>
    <Toolbar/>
<<<<<<< Updated upstream
    <Footer/>
  </div>
=======
  </div> -->
  
>>>>>>> Stashed changes
</template>

<script>
import GetDevices from './components/GetDevices'
import Enchart from './components/Enchart'
import Toolbar from './components/Toolbar'
import Footer from './components/Footer'
export default{
<<<<<<< Updated upstream
  components: { Toolbar, Footer },
  name: 'app'
=======
  name: 'app',
  components: { Toolbar, GetDevices, Enchart },
    data () {
    return {
      addnew:false,
    }
  }
>>>>>>> Stashed changes
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