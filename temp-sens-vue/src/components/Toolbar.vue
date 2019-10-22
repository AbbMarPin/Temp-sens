<template>
  <v-app id="inspire">

   <v-app-bar
      app
      clipped-right
      color="white"
      dark
    >
       <v-flex xs2 ml1 mr2 
          
          class="pa-2">
          
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" id=b47></v-app-bar-nav-icon>
       <v-navigation-drawer 
      v-model="drawer"
      absolute
      temporary
      class="deep-purple accent-4"
      dark
      >
      <v-list dense>
        <v-list-item-title id=b48>Menu</v-list-item-title>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          >
          <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

              </v-list>
            </v-navigation-drawer>

         </v-flex>
         <v-flex xs12>
      <v-toolbar-title>
        <router-link id=b45 to="/">Snurrig.se</router-link>              <!-- genom att lägga router-links direkt under inkluderas de i snurrig.se-toolbaren--> 
        </v-toolbar-title>                                               <!-- Dessa router links är "permanenta" och följer med vid sidbyte, rekommenderar att ta bort dem innan ni lämnar in uppgiften åtminstone -->
      
   </v-flex>
      <v-flex xs12 offset-xs7>
    <router-link class="right" id=b44 to="Login" >Login/Sign in</router-link>               <!-- v-flex och v-layout gör att vi kan flytta på login och snurrig.se med ex. justify center -->
    </v-flex>
     
      <v-spacer/>                                                                                        <!-- En "v-spacer" fyller allt utrymme mellan två "object", det är lite lättare att använda dessa än det ni gjorde tidigare -->
      <v-app-bar-nav-icon @click.stop="icon = !icon" to='/settings'><v-icon id=b46>mdi-settings</v-icon></v-app-bar-nav-icon>
    </v-app-bar>
    <img srv="./assets/logo.png">                                                                   <!-- Denna logga finns ej, inget texture -->

   

            <!-- <v-list-item @click.stop="drawer = !drawer">

          <v-list-item-content>
             <router-link class="right" id=b49 to="Hallonrummet">Hallonrummet</router-link>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click.stop="drawer = !drawer">

          <v-list-item-content>
             <router-link class="right" id=b49 to="Vardagsrummet">Vardagsrummet</router-link>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click.stop="drawer = !drawer">

          <v-list-item-content>
             <router-link class="right" id=b49 to="Pingisrummet">Pingisrummet</router-link>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click.stop="drawer = !drawer">

          <v-list-item-content>
             <router-link class="right" id=b49 to="Terrariet">Terrariet</router-link>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click.stop="drawer = !drawer">

          <v-list-item-content>
             <router-link class="right" id=b49 to="Klassrummet">Klassrummet</router-link>
          </v-list-item-content>
        </v-list-item> -->

        
  
    
         <!-- vad sker här??
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          justify="center"
          align="center"
        >
          <v-col class="shrink">
            <v-tooltip right>
              <template v-slot:activator="{ on }">
            
              </template>
             
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
               
              </template>
              
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-navigation-drawer
      v-model="right"
      fixed
      right
      temporary
    ></v-navigation-drawer> -->


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
    }),
    data() {
          return {
      drawer: null,
      items: [
        { title: 'Hallonrummet'},
        { title: 'Terrariet'},
        { title: 'Pingisrummet'},
        { title: 'Klassrummet'},
        { title: 'Vardagsrummet'},
      ],
    }
    }
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
  color: #616161;
}
#b48{
  font-size: 25px;
  text-decoration: none;
  color: #616161;
}
#b49{
  font-size: 18px;
  text-decoration: none;
  color: #616161;
}
#b50{
  color: #000000;
}
</style>