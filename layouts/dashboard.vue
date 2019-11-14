<template>
  <v-app dark>
    <NavbarComponent />
    <v-content class="grey lighten-3">
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
    <FooterComponent />
    <SnackbarComponent />
    <LoadingComponent />
  </v-app>
</template>

<script>
export default {
  components: {
    SnackbarComponent: () => import('@/components/core/Snackbar'),
    LoadingComponent: () => import('@/components/core/Loading'),
    NavbarComponent: () => import('./dashboard-partials/Navbar'),
    FooterComponent: () => import('./dashboard-partials/Footer')
  }
}
</script>

<style></style>
