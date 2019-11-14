<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>
    <SnackbarComponent />
    <LoadingComponent />
  </v-app>
</template>
<script>
export default {
  components: {
    SnackbarComponent: () => import('@/components/core/Snackbar'),
    LoadingComponent: () => import('@/components/core/Loading')
  }
}
</script>

<style></style>
