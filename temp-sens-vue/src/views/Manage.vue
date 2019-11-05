<template>
    <v-app id=background>
        <v-container bg fill-height grid-list-md text-xs-center>
        <v-flex  
          xs4 offset-4
          >
        <v-card 
             max-width="450"
             tile
             justify-center
             align-center
             class-mx-auto
             id=a6
             
            >
            
              <v-card-text>
                <v-autocomplete
                ref="sensor"
              v-model="sensor"
              :items="sensor"
              label="sensor"
              placeholder="Välj Sensor..."
              required
                dark
                
            ></v-autocomplete>
              <v-autocomplete
                ref="Plats"
              v-model="plats"
              :items="plats"
              label="Plats"
              placeholder="Välj Plats..."
              required
                dark
                
            ></v-autocomplete>
                <v-form>
                
                </v-form>
              </v-card-text>
              <v-card-actions>
               <v-btn to="/f75778f7425be4db0369d09af37a6c2b9a83dea0e53e7bd57412e4b060e607f7">Tillbaka</v-btn>

               <v-btn absolute right @click="save">Spara</v-btn>

              </v-card-actions>
            </v-card>
        </v-flex>
        </v-container>
    </v-app>
</template>

<script>
export default {
data: () => ({
      sensor: [
        'Harleys Sensor', 'Martins Sensor', 'Linus Sensor', 'Sagas Sensor','Idas Sensor'],

      plats:[
        'Hallonrummet', 'Vardagsrummet', 'Klassrummet', 'Pingisrummet', 'Terrariet'],

       
})
}
</script>

<style>

#background{
  background-image: url('https://newevolutiondesigns.com/images/freebies/winter-wallpaper-23.jpg');
  filter: brightness(70%);
  image-rendering: crisp-edges;
  background-size: cover;
} 

#a2{
  color: #000;
}

#a3{
  color: #FAFAFA;
  font-size: 32px;
  text-align: center;
  font-family: "Arial"; 
}

#a4{
  color: #FAFAFA;
  text-align: center;
}

#a5{
  color: #FAFAFA;
}

#a6{
  background: rgba(0,0,0,0.7);
}


</style>