<template>
  <v-app>
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
      <v-tabs v-model="tab" center-active show-arrows>
        <v-tab v-for="(item,index) in tabs" :key="index">Tab{{ item }}</v-tab>
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on"><v-icon>mdi-plus</v-icon></v-btn>
          </template>
          <span>create new tab</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on"><v-icon>mdi-close</v-icon></v-btn>
          </template>
          <span>close tab</span>
        </v-tooltip>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in tabs" :key="item">
          <TabTemplate/>
        </v-tab-item>
      </v-tabs-items>
    </v-main>
  </v-app>
</template>

<script>
import TabTemplate from "./components/TabTemplate";
export default {
  name: 'App',
  components: {
   TabTemplate
  },
  data: () => ({
    tab: null,
    tabs: 5,
    drawerItems :[
      { icon : "mdi-web", title: "Rest APIs"},
      { icon : "mdi-connection", title: "Websocket APIs"},
      { icon : "mdi-xml", title: "XSLT Processing"}
    ]
  }),
};
</script>

<style>
</style>
