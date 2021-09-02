<template>
  <div>
    <v-tabs v-model="tab">
      <v-tab-slider color="primary"></v-tab-slider>
      <v-tab href="#tab-1">BODY</v-tab>
      <v-tab href="#tab-2">HEADERS</v-tab>
      <v-tab href="#tab-3">PARAMS</v-tab>
      <v-spacer></v-spacer>
      <div style="max-width: 150px">
        <v-select :items="bodyType" solo dense flat class="mt-1"></v-select>
      </div>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item :value="bodyTab" class="full-height">
        <v-textarea solo no-resize height="calc(100vh - 11rem)" placeholder="Enter request body here..."></v-textarea>
      </v-tab-item>
      <v-tab-item :value="headersTab" class="full-height">
        <v-data-table :headers="headerTableTitles" :items="headerTableValues" hide-default-footer>
          <template v-slot:item.key="{ item }">
            <v-text-field class="mb-n6 mt-1" v-model="item.key" dense solo flat></v-text-field>
          </template>
          <template v-slot:item.value="{ item }">
            <v-text-field class="mb-n6 mt-1" v-model="item.value" dense solo flat></v-text-field>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-btn icon @click="deleteHeader(item)"><v-icon>mdi-delete</v-icon></v-btn>
          </template>
        </v-data-table>
      </v-tab-item>
      <v-tab-item :value="paramsTab" class="full-height">
        <v-card>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: "Request",
  data () {
    return {
      tab: null,
      bodyTab: 'tab-1',
      headersTab: 'tab-2',
      paramsTab: 'tab-3',
      text : 'lorem ipsum',
      bodyType: ['None','Raw','UrlEncoded','Form-Data','Binary'],
      headerTableTitles: [
        { text : 'Header Key', align : 'start', sortable: false, value: 'key'},
        { text : 'Header Value', align : 'start', sortable: false, value: 'value'},
        { text : '', align : 'start', sortable: false, value: 'actions'}
      ],
      headerTableValues: [
        { key : 'Content-Type', value : 'text/application-json',actions : true},
        { key : 'Connection', value : 'keep-alive',actions : true},
        { key : 'Content-Length', value : '0',actions : true},
        { key : 'Accept', value : '*/*',actions : true},
        { key : 'User-Agent', value : 'Vuetify-Electron',actions : true},
      ]
    }
  },
  methods: {
    deleteHeader(headerLine) {
      let index = this.headerTableValues.indexOf(headerLine)
      this.headerTableValues.splice(index,1)
    }
  }
}
</script>

<style scoped>
.full-height {
  height: calc(100vh - 11rem);
}
</style>