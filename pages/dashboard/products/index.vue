<template>
  <div>
    <v-breadcrumbs icons :items="breadcrumbs"></v-breadcrumbs>
    <v-card flat class="mx-auto">
      <v-card class="lime darken-3 white--text material-card">
        عرض الكل
      </v-card>
      <v-card-text>
        <v-data-table
          :loading="loading"
          :headers="headers"
          loading-text="جارى تحميل العقارات..."
          :items="products"
          class="elevation-1"
        >
          <template v-slot:item.busy="{ item }">
            <v-chip v-if="item.busy == 1" small color="green" dark
              >متاح الأن</v-chip
            >
            <v-chip v-else small color="red" dark
              >محجوز الأن (
              <span class="font-italic" style="font-size:12px;"
                >متاح بعد خمسة أيام</span
              >
              )
            </v-chip>
          </template>
          <template v-slot:item.action="{ item }">
            <v-btn icon link :to="`/dashboard/products/${item.id}`"
              ><v-icon>mdi-pen</v-icon></v-btn
            >
            <v-btn icon><v-icon>mdi-eye</v-icon></v-btn>
            <v-btn icon><v-icon>mdi-delete</v-icon></v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  layout: 'dashboard',
  middleware: '',
  data() {
    return {
      loading: true,
      breadcrumbs: [
        {
          text: 'الرئيسية',
          disabled: false,
          exact: true,
          link: true,
          to: '/dashboard/'
        },
        {
          text: 'المنتجات',
          disabled: false,
          exact: true,
          link: true,
          to: '/dashboard/products/'
        }
      ],
      headers: [
        { text: 'القسم', value: 'category.name' },
        { text: 'المنتج', value: 'title' },
        { text: 'الحالة', value: 'busy' },
        { text: 'عمليات', value: 'action' }
      ]
    }
  },
  computed: {
    products() {
      return this.$store.state.dashboard.product.products
    }
  },
  mounted() {
    this.setProducts().then(() => {
      this.loading = false
    })
  },
  methods: {
    ...mapActions({
      setProducts: 'dashboard/product/setProducts',
      setSnackbar: 'snackbar/setSnackbar',
      setLoading: 'loading/setLoading'
    })
  }
}
</script>

<style></style>
