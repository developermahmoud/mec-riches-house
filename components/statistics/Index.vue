<template>
  <div>
    <v-container class="my-0 pb-0 pt-0 mt-6">
      <v-row no-gutters class="mb-0">
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="4"
          md="4"
          sm="4"
          class="text-center"
        >
          <v-card class="hidden-sm-and-down mx-1 white">
            <div>
              <v-icon color="grey darken-3" size="40">{{ item.icon }}</v-icon>
              <span class="lime--text text--darken-3" style="font-size:40px">{{
                item.number
              }}</span>
            </div>
            <div
              class="grey--text text--darken-3 font-weight-bold"
              style="font-size:30px"
            >
              {{ item.text }}
            </div>
          </v-card>

          <v-card class="hidden-sm-and-up mx-1 white">
            <div>
              <v-icon color="grey darken-3" size="27">{{ item.icon }}</v-icon>
              <span class="lime--text text--darken-3" style="font-size:27px">{{
                item.number
              }}</span>
            </div>
            <div
              class="grey--text text--darken-3 font-weight-bold"
              style="font-size:27px"
            >
              {{ item.text }}
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'ضيف',
          icon: 'mdi-account-group',
          number: 120
        },
        {
          text: 'شقة',
          icon: 'mdi-home-group',
          number: 120
        },
        {
          text: 'غرفة',
          icon: 'mdi-hotel',
          number: 30
        }
      ]
    }
  }
}
</script>

<style></style>
