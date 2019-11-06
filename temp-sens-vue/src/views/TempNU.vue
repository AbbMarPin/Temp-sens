<template>
 <v-app id="inspire">
     <h1 v-for="item in results" :key="item.id">
            <v-card
              color="#BDBDBD"
              dark
              max-height="300"
              max-width="200"
              id=card
            >
              <v-card-title class="headline"></v-card-title>
              <v-card-subtitle></v-card-subtitle>
              <v-card-actions>
                <v-btn text small absolute right >se mer</v-btn>
              </v-card-actions>
            </v-card>
          <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
          >
            <v-card
              :color="item.color"
              dark
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="headline"
                    v-text="item.title"
                  ></v-card-title>
                  <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                </div>
                <v-avatar
                  class="ma-3"
                  size="125"
                  tile
                >
                  <v-img :src="item.src"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
     </h1>
  </v-app>
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

#card{
  align-items: right

}

</style>