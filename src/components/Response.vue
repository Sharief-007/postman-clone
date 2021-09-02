<template>
  <div>
    <v-tabs v-model="tab" slider-color="primary">
      <v-tab href="#tab-1">RESPONSE</v-tab>
      <v-tab href="#tab-2">PREVIEW</v-tab>
      <v-tab href="#tab-3">HEADERS</v-tab>
      <v-tab href="#tab-4">COOKIES</v-tab>
      <v-spacer></v-spacer>
      <v-chip class="mr-3 mt-3 green--text" label color="white">200 OK</v-chip>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item :value="bodyTab" class="full-height green">
        <v-textarea solo no-resize height="calc(100vh - 11rem)" placeholder="Response body..."
                    append-icon="mdi-content-copy" @click:append="copy" v-model="responseBody">
        </v-textarea>
        <v-snackbar v-model="snackbar" timeout="2000" rounded light>{{snackbarText}}</v-snackbar>
      </v-tab-item>
      <v-tab-item :value="headersTab" class="full-height">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr><th class="text-left" v-for="item in headerTableTitles" :key="item.text">{{item.text}}</th></tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in headerTableValues" :key="index">
              <td>{{ item.key }}</td>
              <td>{{ item.value }}</td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: "Response",
  data() {
    return {
      tab :null,
      bodyTab: 'tab-1',
      previewTab: 'tab-2',
      headersTab: 'tab-3',
      cookieTab: 'tab-4',
      responseBody: '',
      snackbar: false,
      snackbarText: 'Copied to clipboard !!',
      headerTableTitles: [
        { text : 'Header Key'},
        { text : 'Header Value'},
      ],
      headerTableValues: [
        { key : 'Content-Type', value : 'text/application-json'},
        { key : 'Connection', value : 'keep-alive'},
        { key : 'Content-Length', value : '0'},
        { key : 'Accept', value : '*/*'},
        { key : 'User-Agent', value : 'Vuetify-Electron'},
      ]
    }
  },
  methods: {
    copy() {
      console.log(this.responseBody)
      this.snackbar = true
    }
  }
}
</script>

<style scoped>
.full-height {
  height: calc(100vh - 11rem);
}
</style>