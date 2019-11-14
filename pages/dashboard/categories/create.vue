<template>
  <div>
    <v-breadcrumbs icons :items="breadcrumbs"></v-breadcrumbs>
    <v-card flat class="mx-auto">
      <v-card class="lime darken-3 white--text material-card">
        إضافة جديد
      </v-card>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            v-model="category.name"
            :rules="nameRules"
            dense
            label="إسم القسم"
            filled
            :counter="50"
          ></v-text-field>
          <v-btn text class="green white--text" @click="store">حفظ</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  layout: 'dashboard',
  middleware: 'auth',
  data() {
    return {
      breadcrumbs: [
        {
          text: 'الرئيسية',
          disabled: false,
          exact: true,
          link: true,
          to: '/dashboard/'
        },
        {
          text: 'الأقسام',
          disabled: false,
          exact: true,
          link: true,
          to: '/dashboard/categories/'
        },
        {
          text: 'إضافة جديد',
          disabled: true,
          href: ''
        }
      ],
      category: { name: '' },
      nameRules: [
        (v) => !!v || 'اكتب إسم القسم من فضلك.',
        (v) => (v && v.length <= 50) || 'القسم لا يزيد عن 50 حرف'
      ]
    }
  },
  methods: {
    ...mapActions({
      storeCategory: 'dashboard/category/storeCategory',
      setSnackbar: 'snackbar/setSnackbar',
      setLoading: 'loading/setLoading'
    }),
    store() {
      if (this.$refs.form.validate()) {
        this.setLoading(true)
        this.storeCategory(this.category).then(() => {
          this.$refs.form.resetValidation()
          this.$refs.form.reset()
          this.setLoading(false)
          this.setSnackbar({
            text: 'تمت إضافة قسم جديد',
            color: 'success'
          })
        })
      }
    }
  }
}
</script>

<style></style>
