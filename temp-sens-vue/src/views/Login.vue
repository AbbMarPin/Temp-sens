<template>
  <v-app id=background fixed>
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
             <router-link to="Adminpage">Tillfällig</router-link>

                <v-text id=a3 >Logga in</v-text>
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
                    label="Lösenord"
                    name="Lösenord"
                    type="password"
                    v-model="password"
                    :rules="passwordRules"
                    required
                    dark
                  ></v-text-field>
                  
              <!-- <v-card-actions> -->
                  <v-btn
                  :disabled="!valid"
                  id=a5
                  xs12
                  color= #00B8D4
                  block
                  tile 
                  @click="submit"
                  >Logga In
                  </v-btn>

              <!-- </v-card-actions> -->
                </v-form>
              </v-card-text>
              <v-text id=a4 >Har du inget konto? Registrera dig </v-text>
               <router-link to="/Registrera">Här</router-link>
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
    props: {
      source: String,
    },
    data: () => ({
      drawer: 0,
      login: '',
      valid: true,
      loginRules: [
        v => (v && v.length >= 3) || 'Användarnamn är för kort!',
      ],
        password: '',
      passwordRules: [
        v => !!v || 'Ett lösenord krävs!',
        v => (v && v.length >= 8) || 'Lösenordet är för kort!'
      ]
    }),
    methods: {

      
      submit () { // ToDo user gets an id on reg that gets stored in the db next to pass. 
      // user needs an id to remove their devices
      // lambda checks in database if user and pass hash matches and sends back an id
      // vuex keeps the id
      // eslint-disable-next-line 
      console.log(this.$refs.form)

    // if (this.$refs.form.validate()) {


    let body = { user : this.login, pass : sha256(this.password)};
    let stringbody= JSON.stringify(body);
    // console.log(stringbody)
    axios.put('https://ec4avk1xoh.execute-api.us-east-1.amazonaws.com/v1/', stringbody)
    .then(function (response) {
      // eslint-disable-next-line
      console.log(response);
      if (response.data.success == true && this.login == "admin"){
        // eslint-disable-next-line 
        { route: '/Adminpage'}
    
      }
    })
    .catch(function (error) {
      // eslint-disable-next-line
      console.log(error);
    });
<<<<<<< HEAD
    // eslint-disable-next-line 
    console.log("user " + this.login + "\npassword " + this.password);
    // eslint-disable-next-line 
    console.log("hashed password: " + sha256(this.password));
    }
  }
}


=======
>>>>>>> 29b42fea05459a5912c0237d43f397010c4c77d0

    // // eslint-disable-next-line 
    // console.log("user " + this.login + "\npassword " + this.password);
    // // eslint-disable-next-line 
    // console.log("hashed password: " + sha256(this.password));
    


    // }
    
<<<<<<< HEAD
  
=======
    
    },
  }
  }
>>>>>>> 29b42fea05459a5912c0237d43f397010c4c77d0
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