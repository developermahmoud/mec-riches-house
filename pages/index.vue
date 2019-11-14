<template>
  <div>
    <SliderComponent />
    <StatisticsComponent />
    <v-container>
      <v-row>
        <v-col
          v-for="(product, index) in products"
          :key="index"
          cols="12"
          md="6"
          sm="12"
        >
          <ProductItemComponent :product="product" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  components: {
    SliderComponent: () => import('@/components/Slider/Index'),
    ProductItemComponent: () => import('@/components/product/Item'),
    StatisticsComponent: () => import('@/components/statistics/Index')
  },
  data() {
    return {}
  },
  computed: {
    products() {
      return this.$store.state.frontend.product.products
    }
  },
  mounted() {
    this.setProducts().then(() => {
      this.loading = false
    })
  },
  methods: {
    ...mapActions({
      setProducts: 'frontend/product/setProducts'
    })
  }
}
</script>
