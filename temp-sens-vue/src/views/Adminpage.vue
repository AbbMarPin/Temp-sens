<template>

  <v-app id=background>
      <v-container bg fill-height grid-list-md text-xs-center>     <!-- Placeing all componenets in center -->
        <v-row>

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
                <v-text id=a3 >Adminsida</v-text>      <!-- Text and id -->
                <div class="flex-grow-1"></div>
                <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                </template>
                </v-tooltip>
                <v-tooltip right>
                <template v-slot:activator="{ on }">
                </template>
                </v-tooltip>
              
              <v-card-text>
                <v-form>
                  

                </v-form>
              </v-card-text>
              <v-card-actions>
            <v-btn to="/cdiuevcvao47rf483ofdsva4o377fvcoe478avfov8asevfserg">Sensor inställningar</v-btn>     <!-- Router link to Sensor inställningar -->

              </v-card-actions>
            </v-card>
          </v-flex>
        </v-row>
      </v-container>
  </v-app>
</template>

<script>

const routes = [
  { path: '/Manage', component: '/Manage.vue' }     
];

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