<template>
   <v-navigation-drawer 
      v-model="myDrawer"
      app
      expand-on-hover
      permanent
      id="navpic"
      v-if= 1                
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
            </v-list-item-content>
          </v-list-item>
              </v-list>
            </v-navigation-drawer>
</template>
 
