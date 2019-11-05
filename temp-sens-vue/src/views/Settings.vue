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
                <v-form>
                
                </v-form>
              </v-card-text>
              <v-card-actions>
               <v-btn to="/">Tillbaka</v-btn>

              </v-card-actions>
            </v-card>
        </v-flex>
        </v-container>
    </v-app>
  
</template>

<script>
  export default {
    data: () => ({
      settings: [],
    }),
  }

const routes = [
  { path: '/', component: '/.vue' }
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