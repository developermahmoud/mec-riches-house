<template>
  <div>
    <v-dialog v-model="loading" persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.state.loading.loading
    }
  }
}
</script>

<style></style>
