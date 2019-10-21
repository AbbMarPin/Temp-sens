

<template>
  <v-layout row>
    <!-- xs-skärmar ser tabellen halverad, så den fyller halva sidan (6/12), medium-skärmar och uppåt också -->
    <v-flex xs6 md6> 
  <v-data-table
    :headers="headers"
    :items="rum"
    class="elevation-1"

  ></v-data-table>
  </v-flex>
</v-layout>

</template>



<!--<template>-->
<!-- DEN HÄR SKA OCKSÅ IN, DET ÄR EN GRAF MEN TEMPLATE KLAGAR -->
  <!-- <v-card
    class="mt-4 mx-auto"
    max-width="400"
  > -->
    <!-- <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="12"
      max-width="calc(100% - 32px)"
    > -->
      <!-- <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet> -->

    <!-- <v-card-text class="pt-0">
      <div class="title font-weight-light mb-2">User Registrations</div>
      <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
      <v-divider class="my-2"></v-divider>
      <v-icon
        class="mr-2"
        small
      >
        mdi-clock
      </v-icon>
      <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
    </v-card-text>
  </v-card>
</template> -->




<script>
  export default {
    data () {
      return {
     
       headers: [
          {
            // kolumnen för rummen, vertikalt
            text: 'Rum',
            align: 'left',
            value: 'name',
          },
          // rubriker fär resterande vertikala kolumner samt values som bestämmer i vilken kolumn värdena ska in (no sht)
          { text: 'Förrigår', value: 'förrigår' },
          { text: 'Igår', value: 'igår' },
          { text: 'Idag', value: 'idag' },
          { text: '1v', value: 'vecka'},
        ],
        rum: [
          {
            name: 'Terrariet',
            förrigår: 40.9,
            igår: 42.8,
            idag: 38.4,
          },
          {
            name: 'Klassrummet',
            förrigår: 18.2,
            igår: 17.1,
            idag: 19.5,
          },
          {
            name: 'Vardagsrummet',
            förrigår: 21.3,
            igår: 20.5,
            idag: 21.2,
          },
          {
            name: 'Hallonrummet',
            förrigår: 19.5,
            igår: 18.9,
            idag: 19.2,
          },
          {
            name: 'Pingisrummet',
            förrigår: 35.6,
            igår: 19.2,
            idag: 34.8,
          },
        ],
      }
    },
  }
</script>