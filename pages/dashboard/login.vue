<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>تسجيل الدخول</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="user.email"
                label="البريد الألكترونى"
                name="login"
                prepend-icon="mdi-email"
                type="text"
                required
              />

              <v-text-field
                id="password"
                v-model="user.password"
                label="الرقم السرى"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                required
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="login">دخول</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  layout: 'login',
  data() {
    return {
      user: { email: '', password: '' }
    }
  },
  methods: {
    ...mapActions({
      setSnackbar: 'snackbar/setSnackbar',
      setLoading: 'loading/setLoading'
    }),
    async login() {
      this.setLoading(true)
      try {
        await this.$auth
          .loginWith('local', {
            data: this.user
          })
          .then(() => {
            this.setLoading(false)
            this.setSnackbar({
              text: 'يا مراحب يا أصحاب البيت يا مراحب.',
              color: 'success'
            })
            this.$router.push('/dashboard')
          })
      } catch (error) {
        this.setLoading(false)
        this.setSnackbar({ text: 'البيانتات غير صحيحة.', color: 'error' })
      }
    }
  }
}
</script>

<style></style>
