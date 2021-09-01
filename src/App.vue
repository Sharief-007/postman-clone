<template>
  <v-app>
    <v-app-bar flat app>
      <v-row>
        <v-col cols="12" sm="2">
          <v-select :items="httpMethods" placeholder="Method" dense solo flat class="mt-6">
          </v-select>
        </v-col>
        <v-col cols="12" sm="9" >
          <v-text-field placeholder="Paste your URL here..." solo flat dense class="mt-6"></v-text-field>
        </v-col>
        <v-col cols="12" sm="1">
          <v-btn class="mt-6" depressed color="primary">send</v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer app permanent mini-variant color="primary">
      <v-list>
        <v-list-item>
          <v-list-item-avatar left class="ml-n2">
            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Sharief</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-spacer></v-spacer>
        <v-list-item-group>
          <v-list-item v-for="item in drawerItems" :key="item">
            <v-list-item-icon>
              <v-icon v-text="item.icon" color="white"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
<!--      <v-progress-linear indeterminate></v-progress-linear>-->
      <v-row>
        <v-col cols="12" lg="6">
          <Request/>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="12" lg="6">
          <Response/>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Request from "./components/Request";
import Response from "./components/Response";
export default {
  name: 'App',
  components: {
    Request,
    Response
  },
  data: () => ({
    drawerItems :[
      { icon : "mdi-web", title: "collections"},
      { icon : "mdi-file", title: "websocket"}
    ],
    httpMethods: ["GET","POST","PUT","DELETE","PATCH","HEAD"]
  }),
};
</script>

<style>
</style>
