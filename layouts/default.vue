<template>
  <v-app dark>
    <NavbarComponent />
    <v-content class="grey lighten-3">
      <nuxt />
    </v-content>
    <FooterComponent />
  </v-app>
</template>

<script>
export default {
  components: {
    NavbarComponent: () => import('./site-partials/Navbar'),
    FooterComponent: () => import('./site-partials/Footer')
  }
}
</script>
