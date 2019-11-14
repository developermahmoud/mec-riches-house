<template>
  <v-app-bar
    class="black"
    height="70"
    dark
    app
    style="border-bottom:solid 1px #9e9d24 !important;"
  >
    <nuxt-link to="/dashboard/login">
      <v-img style="width:140px;" src="/pwa/logo_en.png"
    /></nuxt-link>
    <v-spacer> </v-spacer>
    <v-btn v-for="icon in icons" :key="icon" small class="mx-1" icon>
      <v-icon>{{ icon }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-whatsapp', 'mdi-cellphone']
  }),
  computed: {}
}
</script>
