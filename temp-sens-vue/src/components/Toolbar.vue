<template>
  <v-app id="inspire">



   <v-app-bar
      app
      clipped-right
      color="blue-grey"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Snurrig.se</v-toolbar-title> 
      <!-- genom att lägga router-links direkt under inkluderas de i snurrig.se-toolbaren-->
      <!-- Dessa router links är "permanenta" och följer med vid sidbyte, rekommenderar att ta bort dem innan ni lämnar in uppgiften åtminstone -->
         <router-link id= b45 to="/">Snurrig.se</router-link>
    <!-- <router-link id= b44 to="Settings">Settings</router-link> -->
    <v-layout row>
      <v-flex>
        
        <!-- v-flex och v-layout gör att vi kan flytta på login och snurrig.se med ex. justify center -->
    <router-link id= b44 to="Login">Login/Sign in</router-link>
    </v-flex>
</v-layout>

      <!-- En "v-spacer" fyller allt utrymme mellan två "object", det är lite lättare att använda dessa än det ni gjorde tidigare -->
      <v-spacer/>
      <v-app-bar-nav-icon to='/settings'><v-icon>mdi-settings</v-icon></v-app-bar-nav-icon>
    </v-app-bar>
    <img srv="./assets/logo.png"> <!-- Denna logga finns ej, inget texture -->

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item @click.stop="left = !left">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Tom Drawer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="left"
      fixed
      temporary
    ></v-navigation-drawer>

         <!-- vad sker här?? -->
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
      v-model="righ"
      fixed
      right
      temporary
    ></v-navigation-drawer>

   <v-footer
      app
      color="blue-grey"
      class="white--text"
    >
      <span>Vuetify</span>
      <div class="flex-grow-1"></div>
      <span>&copy; 2019</span>
    </v-footer>
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
  }
</script>

<style>
#b44{
  font-size: 14px !important;
  text-decoration: underline overline;
  text-align: center;
  color: white;

}
#b45{
  font-size: 20px;
  text-decoration: underline overline;
  color: white;
}
</style>