<template>
  <div>
    <v-snackbar
      :value="snackbar.showing"
      :timeout="6000"
      :color="snackbar.color"
      @input="setShowingFalse"
    >
      {{ snackbar.text }}
      <v-btn icon @click.native="setShowingFalse"
        ><v-icon>mdi-close</v-icon></v-btn
      >
    </v-snackbar>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    snackbar() {
      return this.$store.state.snackbar.snackbar
    }
  },
  methods: {
    ...mapActions({
      setShowingFalse: 'snackbar/setShowingFalse'
    })
  }
}
</script>
