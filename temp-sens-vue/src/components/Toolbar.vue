<template>
  <v-app id="inspire" v-if="hideToolbar = 1">
       <v-navigation-drawer 
      v-model= "myDrawer" 
      app
      expand-on-hover
      permanent
      id="navpic"
      >                                             
                                                        <!-- fråga jocke -->
      <v-list dense>
        <v-list-item-title id=b50>Menu</v-list-item-title>
        <v-list-item id=b50
          v-for="item in items"
          :key="item.title"
          router :to="item.route"
          link
          >
          <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title > <router-link >{{ item.title }}</router-link>{{ item.title }}</v-list-item-title>  
            </v-list-item-content> <!-- ^^^ link and title in same title ^^^ --> 
          </v-list-item>
              </v-list>
            </v-navigation-drawer>

   <v-app-bar
      app
      clipped-right
      color="white"
      darks  
      
    >
       <v-flex xs2 ml1 mr2 
          
          class="pa-2">

         </v-flex>
         <v-flex xs12>
      <v-toolbar-title>
        <router-link id=b45 to="/">Snurrig.se</router-link>              <!-- genom att lägga router-links direkt under inkluderas de i snurrig.se-toolbaren--> 
        </v-toolbar-title>                                               <!-- Dessa router links är "permanenta" och följer med vid sidbyte, rekommenderar att ta bort dem innan ni lämnar in uppgiften åtminstone -->
      
   </v-flex>
      <v-flex xs12 offset-xs7>
    <router-link class="right"
     id=b44
     to="Login"
     >Logout
     </router-link>               <!-- v-flex och v-layout gör att vi kan flytta på login och snurrig.se med ex. justify center -->
    </v-flex>
     
      <v-spacer/>                                                                                        <!-- En "v-spacer" fyller allt utrymme mellan två "object", det är lite lättare att använda dessa än det ni gjorde tidigare -->
      <v-app-bar-nav-icon @click.stop="icon = !icon" to="Settings"><v-icon id=b46>mdi-settings</v-icon></v-app-bar-nav-icon>
    </v-app-bar>
    <img srv="./assets/logo.png">                                                                   <!-- Denna logga finns ej, inget texture -->


  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: 0,
      left: false, 
      width: 0,
      items: [
        // <router-link to="Hallonrummet">Hallonrummet</router-link>
        { title: 'Terrariet', route: '/Terrariet'}, // routes to em
        { title: 'Pingisrummet', route: '/Pingisrummet'},
        { title: 'Klassrummet', route: '/Klassrummet'},
        { title: 'Vardagsrummet', route: '/Vardagsrummet'}, 
        { title: 'Hallonrummet', route: '/Hallonrummet'},
      ],
    }),  
 }

</script>

<style>

#b44{
  font-size: 18px !important;
  text-decoration: none;
  text-align: center;
  color: #616161;
  font-family: "Arial";
}
#b45{
  font-size: 26px;
  text-decoration: none;
  color: #616161;
  font-family: "Arial Black";
}
#b46{
  font-size: 30px;
  text-decoration: none;
  color: #616161;
}
#b47{
  font-size: 30px;
  text-decoration: none;
  color: #D1D1D1FF;
}
/* #b48{
  font-size: 25px;
  text-decoration: none;
  color: #ffffff;
  top: 50% ;
  left: 50% ;

} */
#b49{
  font-size: 18px;
  text-decoration: none;
  color: rgb(255, 253, 253);
}
#b50{
   font-size: 25px;
  text-decoration: none;
  color: #D1D1D1FF;
  font-family: "Arial";
  top: 10% ;
  left: -15% ;

}
#navpic{
  background-image: url("https://raw.githubusercontent.com/AbbMarPin/Temp-sens/master/Bilder/Untitled2.png");
  filter: brightness(50%);
  max-width: 15%;
  margin-top: 0,5em;
  font-size: 25px;
  color: #ffffff !important;
}

</style>