<template>
  <v-app id=background>
      <v-container bg fill-height grid-list-md text-xs-center>
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
                <v-text id=a3 >Registrera</v-text>
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
                  <v-text-field
                    label="Login"
                    name="login"
                    type="text"
                    v-model="login"
                    :rules="loginRules"
                    required
                    persistent-hint
                    outlined
                    color= "white"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    v-model="password"
                    :rules="passwordRules"
                    required
                    persistent-hint
                    outlined
                    color= "white"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn
                xs12
                color= #00B8D4
                block 
                id=a5
                tile 
                @click="submit"
                >Registrera
                </v-btn>

              </v-card-actions>
              <v-text id=a4 >Har du redan ett konto? Logga in </v-text>
               <router-link to="/Login">Här</router-link>
            </v-card>
          </v-flex>
        </v-row>
      </v-container>
  </v-app>
</template>

<style>

#background{
  background-image: url('https://newevolutiondesigns.com/images/freebies/winter-wallpaper-23.jpg');
  filter: brightness(50%);
  image-rendering: crisp-edges;
  background-size: cover;
} 

#a2{
  color: #000;
}

#a3{
  color: #00B8D4;
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