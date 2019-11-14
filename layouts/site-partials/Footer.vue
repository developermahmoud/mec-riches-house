<template>
  <v-footer dark padless>
    <v-card class="flex hidden-md-and-down" flat tile>
      <v-card-title class="black ma-0 pa-1">
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          class="ma-0 pa-1"
          style="font-size:12px;"
        >
          {{ link }}
        </v-btn>
        <div class="flex-grow-1"></div>
        <span
          class="ma-0 pa-1 grey--text"
          style="font-size:15px;direction:ltr;"
        >
          © RICHEShouse</span
        >
        <v-btn v-for="icon in icons" :key="icon" dark icon>
          <v-icon size="17">{{ icon }}</v-icon>
        </v-btn>
        <img style="width:100px;" src="/logo_en.png" />
      </v-card-title>
    </v-card>
    <v-card
      flat
      tile
      class="flex hidden-md-and-up black white--text text-center px-5"
    >
      <v-card-text class="mb-0 pb-0">
        <nuxt-link to="/"
          ><img style="width:120px;" src="/logo_en.png"
        /></nuxt-link>
      </v-card-text>
      <v-card-text class="pa-0 ma-0">
        <v-row no-gutters>
          <v-col cols="12" class="pa-0 ma-0">
            <v-row align="center" justify="center" class="">
              <v-card class="black">
                <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  size="10"
                  class="white--text pa-0 ma-0"
                  icon
                >
                  <v-icon size="15">{{ icon }}</v-icon>
                </v-btn>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text class="white--text pa-0 ma-0 pb-3" style="direction:ltr;">
        <span
          class="ma-0 pa-1"
          style="font-size:15px;color:#4b4b4b;font-weight:400;"
        >
          RICHEShouse © 2019</span
        >
        <v-btn text style="font-size:12px;color:#4b4b4b;">سياسة الخصوصية</v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    sheet: false,
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-whatsapp', 'mdi-cellphone'],
    links: [' سياسة الخصوصية']
  })
}
</script>
