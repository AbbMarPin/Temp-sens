<template>
<v-flex justify-center>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Place</th>
        <th class="text-left">Temp</th>
        <th class="text-left">Hum</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="item in Tempdata" :key="item.Name">
          <td>{{ item.name }}</td>
          <td>{{ item.place }}</td>
          <td>{{ item.Temp }}</td>
          <td>{{ item.Hum }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <!-- </v-flex> -->
</v-flex>
</template>
 
<script>
const axios = require('axios');

  export default {
 
    data() {//All data som ska finnas i komponenten
    return {
    Showtext:"button",
     name: '',
     Show:false,
      names: [
        '',
      ],
         
      Tempdata: [],
     
    }
  },
//  data() {//All data som ska finnas i komponenten
//     return {
//         smth: [
//             // {
//             //     Name: item.Name
//             //     Place: item.Place
//             //     Temp: item.Temp
//             // }
//         ]
//     }
//  },
 
    methods: { //Metoder
      async fetch(){
    //   let self = this;
    //   const{data} = await axios.get('https://y5litcpqqk.execute-api.us-east-1.amazonaws.com/test1/device/all');
    //   console.log(data);
    //   self.Tempdata= data.data;
    }
    },
 
      mounted () {
        var results = [];
        const url = "https://y5litcpqqk.execute-api.us-east-1.amazonaws.com/test1/device/all";
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
            console.log("hej")
            console.log(results) 

            this.Tempdata = results

            // console.log(this.results)
          });

  },

  }
</script>