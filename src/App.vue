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
          <v-list-item v-for="(item,index) in drawerItems" :key="index">
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
    <v-system-bar color="white" window>
      <v-btn-toggle v-model="toggle_exclusive" class="pl-15" borderless>
        <v-menu bottom offset-y v-for="(item,index) in menu" :key="index">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" small plain>{{item.title}}</v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="(menuItem, index) in item.menuItems" :key="index" link>
              <v-list-item-title>{{ menuItem }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn-toggle>
    </v-system-bar>
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
    toggle_exclusive: null,
    drawerItems :[
      { icon : "mdi-web", title: "Rest APIs"},
      { icon : "mdi-connection", title: "Websocket APIs"},
      { icon : "mdi-xml", title: "XSLT Processing"}
    ],
    menu: [
      { title: 'File', menuItems: ['New Tab','Close Tab','Close all Tabs','Quit']},
      { title: 'Edit', menuItems: ['New Tab','Close Tab','Close all Tabs','Quit']},
      { title: 'View', menuItems: ['New Tab','Close Tab','Close all Tabs','Quit']},
      { title: 'Window', menuItems: ['New Tab','Close Tab','Close all Tabs','Quit']},
      { title: 'Help', menuItems: ['New Tab','Close Tab','Close all Tabs','Quit']}
    ]
  }),
};
</script>

<style>
</style>
