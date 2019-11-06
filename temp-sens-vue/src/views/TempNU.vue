<template>
<div id="app">
  
  <div class="card-section">
  <!-- <p> {{ results}} </p> -->
  </div>
</div>
</template>

<script>
import axios from 'axios'
const url = "https://y5litcpqqk.execute-api.us-east-1.amazonaws.com/test1/device/all";
export default {
  data() {
    return {
      results: [],
    }
  },
      mounted () {
        var results = [];
        // console.log(typeof(results))
        var i = 0;
        function a(item) {
          // console.log(typeof(item.TheOwner))
            results.push({name: item.Name, place: item.Place, theowner: item.TheOwner, Temp : item.CurrentTemp, Hum : item.CurrentHum, LastUpdate : item.LastUpdate});
            // console.log(results)
        }
      axios.post(url, {}).then(response => {

            console.log(response)

            response.data.forEach(a); 

            this.results = results

            // console.log(this.results)
          });

  },

}
</script>

<style>

</style>