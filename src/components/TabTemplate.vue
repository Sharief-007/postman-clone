<template>
  <div>
    <v-toolbar flat>
      <v-row>
        <v-col cols="12" sm="2">
          <v-select :items="httpMethods" placeholder="Method" dense solo flat class="mt-6">
          </v-select>
        </v-col>
        <v-col cols="12" sm="9" >
          <v-text-field placeholder="Paste your URL here..." solo flat dense class="mt-6" v-model="url"></v-text-field>
        </v-col>
        <v-col cols="12" sm="1">
          <v-btn class="mt-6" depressed color="primary" @click="send">send</v-btn>
        </v-col>
      </v-row>
    </v-toolbar>
    <v-divider></v-divider>
    <v-progress-linear indeterminate v-show="indeterminate"></v-progress-linear>
    <v-row>
      <v-col cols="12" lg="6">
        <Request/>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="12" lg="6">
        <Response :http-status="httpStatus" :response-body="responseBody" :http-status-text="httpStatusText" :header-table-values="responseHeaders"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Request from "./Request";
import Response from "./Response";

import axios from 'axios'
export default {
  name: "TabTemplate",
  components: {
    Request,
    Response
  },
  data() {
    return {
      url: '',
      indeterminate: false,
      responseBody: '',
      httpStatus: null,
      responseHeaders: [],
      httpStatusText: '',
      httpMethods: ["GET","POST","PUT","DELETE","PATCH","HEAD"]
    }
  },
  methods: {
    async send(){
      this.indeterminate = true
      let {data, headers, status, statusText} = await axios.get(this.url)
      this.responseBody = typeof data === 'object' ? JSON.stringify(data) : data.toString()
      this.httpStatus = status
      this.httpStatusText = statusText
      this.responseHeaders = []
      for (let key in headers) {
        this.responseHeaders.push({
          key,
          value: headers[key]
        })
      }
      this.indeterminate = false
    }
  }
}
</script>

<style scoped>

</style>