<template>
<div id="app">
  
  <div class="card-section">
  <p> {{ results}} </p>
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
      axios.get(url).then(response => {
            this.results = response.data
            console.log(this.results)
          });

  },

}
</script>

<style>

</style>