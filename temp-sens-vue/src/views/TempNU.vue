<template>
<div id="app">
  {{ info }}
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            info: null            
        }
    },
      mounted () {
    axios
      .get('https://y5litcpqqk.execute-api.us-east-1.amazonaws.com/test1/device/all')
      .then(response => (this.info = response))
    //   .then(response => (this.info = response.name.bpi))

  },
  filters: {
  currencydecimal (value) {
    return value.toFixed(2)
  }
},
}
</script>

<style>

</style>