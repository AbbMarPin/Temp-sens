
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
                <v-form
                 v-model="valid"
                 >
                  <v-text-field
                    label="Användarnamn"
                    name="Användarnamn"
                    type="text"
                    v-model="login"
                    :rules="loginRules"
                    required

                    dark
                  ></v-text-field>

                  <v-text-field
                    id="Lösenord"
                    label="Lösenord"
                    name="Lösenord"
                    type="password"
                    v-model="password"
                    :rules="passwordRules"
                    required
                    dark
                  ></v-text-field>
                  <v-text-field
                    type="password"
                    label="Bekräfta lösenord"
                    name="Bekräfta lösenord"
                    v-model="password2"
                    :rules="passwordRules2"
                    required
                    dark
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
                :disabled="!valid"
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

<script>
// eslint-disable-next-line 
const sha256 = require('js-sha256');
// eslint-disable-next-line 
const axios = require('axios');
export default {
   data: () => ({
      drawer: 0,
      // password:"",
      login: '',
      loginRules: [
        v => !!v || 'Ett Användarnamn krävs!',
        v => (v && v.length >= 6) || 'Användarnamn är för kort!',
      ],
        password: '',
      passwordRules: [
        v => !!v || 'Ett lösenord krävs!',
        v => (v && v.length >= 8) || 'Lösenordet är för kort!'
      ],
        password2: '',
      passwordRules2: [
        v => !!v || 'Samma lösenord krävs!',
        v => v === this.password || 'Lösenordet stämmer inte överens',
        // v => (v && v.length >= 8) || 'Lösenordet är för kort!'
      ]
    }),
    methods: {
        
      submit () {
        if(this.password === this.password2){
          // lägg till användare
              let body = { user : this.login, pass : sha256(this.password)};
              let stringbody= JSON.stringify(body);

              axios.post('https://ec4avk1xoh.execute-api.us-east-1.amazonaws.com/v1/', stringbody)
              .then(function (response) {
                // skriv att allt är bra om status är 200 och fel om 201
                // eslint-disable-next-line
                console.log(response);
              })
              .catch(function (error) {
                // eslint-disable-next-line
                console.log(error);
              });
        } else {
          // skicka felmeddelande
          // eslint-disable-next-line
          console.log("Fel lösern!!!!")
        }

      }
    }  
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