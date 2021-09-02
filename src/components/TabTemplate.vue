<template>
  <div>
    <v-toolbar flat>
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
    </v-toolbar>
    <v-divider></v-divider>
   <!-- <v-progress-linear indeterminate></v-progress-linear> -->
    <v-row>
      <v-col cols="12" lg="6">
        <Request/>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="12" lg="6">
        <Response/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Request from "./Request";
import Response from "./Response";
export default {
  name: "TabTemplate",
  components: {
    Request,
    Response
  },
  data() {
    return {
      httpMethods: ["GET","POST","PUT","DELETE","PATCH","HEAD"]
    }
  }
}
</script>

<style scoped>

</style>