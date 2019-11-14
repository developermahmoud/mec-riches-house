<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            'https://www.deluxehomes.ae/wp-content/uploads/2018/09/2-bedroom-in-dubai-marina-02.jpg'
        },
        {
          src:
            'https://www.deluxehomes.ae/wp-content/uploads/2018/09/2-bedroom-in-dubai-marina-01.jpg'
        },

        {
          src:
            'https://www.deluxehomes.ae/wp-content/uploads/2018/09/2-bedroom-in-dubai-marina-03.jpg'
        },
        {
          src:
            'https://www.deluxehomes.ae/wp-content/uploads/2018/09/2-bedroom-in-dubai-marina-04.jpg'
        }
      ]
    }
  }
}
</script>
