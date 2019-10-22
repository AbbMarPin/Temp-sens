<!--
----------hover over-----------
-->

<template>
    <div id="app">
  <v-app id="inspire">
    <div class="pa-4 grey lighten-4">
      <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
          <v-hover
            v-slot:default="{ hover }"
            :open-delay="openDelay"
            :close-delay="closeDelay"
            :disabled="disabled"
            :value="value"
          >
            <v-card
              :elevation="hover ? 12 : 2"
              height="300"
              max-width="350"
              class="mx-auto"
            >
              <v-card-text class="my-4 text-center title">Hover over me!</v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
  
</template>


<!--
---------Settings-----------
-->

<template>
   <!--For modern browsers-->

<i class="material-icons">
settings_applications
</i>

<!-- For IE9 or below. -->

<i class="material-icons">
settings_applications
</i>
 
</template>


<!--
Darkmode
-->
