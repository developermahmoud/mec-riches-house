<template>
  <div>
    <v-card light flat elevation="24" class="white mx-auto">
      <v-carousel :cycle="cycle" hide-delimiters height="300">
        <v-carousel-item
          v-for="(slide, i) in product.images"
          :key="i"
          :src="getImageUrl(slide.name)"
        >
        </v-carousel-item>
      </v-carousel>
      <v-card-title class="grey lighten-3">
        <nuxt-link :to="`/products/${product.id}`" style="color:grey">
          {{ product.title }}</nuxt-link
        >
        <v-spacer></v-spacer>
        <v-btn rounded text class="lime darken-3 white--text"
          ><span class="font-weight-bold">120</span> $
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
          <div class="grey--text ml-4">4.5 (413)</div>
        </v-row>
        <div class="font-weight-bold">
          <v-icon size="18">mdi-map-marker</v-icon>
          مصر, المعادى, شارع 9
        </div>
        <div>
          شقة فى برج مكون من أربعين طابق بجواره جميع الخدمات اللازمة اللى ممكن
          تحتاجها شقة فى برج مكون من أربعين طابق بجواره جميع الخدمات اللازمة
          اللى ممكن تحتاجها شقة فى برج مكون من أربعين طابق بجواره جميع الخدمات
          اللازمة اللى ممكن تحتاجها...
        </div>
      </v-card-text>
      <v-card-text class="text-center">
        <v-chip small class="ma-1">
          <span class="font-weight-bold">
            <v-icon>mdi-home-group</v-icon> 2 غرفة
          </span>
        </v-chip>
        <v-chip small class="ma-1">
          <span class="font-weight-bold">
            <v-icon size="18">mdi-bed-empty</v-icon> 5 سرير
          </span>
        </v-chip>
        <v-chip small class="ma-1">
          <span class="font-weight-bold">
            <v-icon size="18">mdi-shower</v-icon> 2 حمام
          </span>
        </v-chip>
        <v-chip small class="ma-1"
          ><span class="font-weight-bold">
            <v-icon size="18">mdi-dice-4</v-icon>
            120 متر مربع
          </span></v-chip
        >
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn tile small text class="orange darken-3 white--text"
          ><v-icon size="20">mdi-calendar</v-icon> إحجز الأن</v-btn
        >
        <v-btn tile small text class="green white--text"
          ><v-icon size="20">mdi-phone</v-icon> إتصل</v-btn
        >
        <v-btn tile small text class="grey darken-3 white--text"
          ><v-icon size="20">mdi-whatsapp</v-icon> واتس أب</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn icon
          ><v-icon size="20" color="grey darken-3"
            >mdi-comment-text-multiple</v-icon
          ></v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      cycle: true,
      slides: [
        'https://www.deluxehomes.ae/wp-content/uploads/2018/09/2-bedroom-in-dubai-marina-01.jpg',
        'https://www.deluxehomes.ae/wp-content/uploads/2018/09/2-bedroom-in-dubai-marina-02.jpg',
        'https://www.deluxehomes.ae/wp-content/uploads/2018/09/2-bedroom-in-dubai-marina-03.jpg',
        'https://www.deluxehomes.ae/wp-content/uploads/2018/09/2-bedroom-in-dubai-marina-04.jpg',
        'https://www.deluxehomes.ae/wp-content/uploads/2018/09/2-bedroom-in-dubai-marina-05.jpg'
      ]
    }
  },
  methods: {
    getImageUrl(name) {
      return this.$axios.defaults.baseURL + '/product-images/' + name
    }
  }
}
</script>
<style scoped>
a:link {
  text-decoration: none;
  color: grey;
}
.hoverCard {
  border: solid 1px transparent;
}
</style>
