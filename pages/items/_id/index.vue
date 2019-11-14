<template>
  <div>
    <v-carousel :cycle="cycle" hide-delimiters>
      <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide">
      </v-carousel-item>
    </v-carousel>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-card flat tile light class="white mb-5">
            <v-card-title>
              فيلا مكونة من طابقين
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
                  size="20"
                ></v-rating>
                <div class="grey--text ml-4">4.5 (413)</div>
              </v-row>
              <div class="my-3">
                <span class="font-weight-bold">
                  <v-icon>mdi-home-group</v-icon> 2 غرفة
                </span>
                -
                <span class="font-weight-bold">
                  <v-icon size="18">mdi-bed-empty</v-icon> 5 سرير
                </span>
                -
                <span class="font-weight-bold">
                  <v-icon size="18">mdi-shower</v-icon> 2 حمام
                </span>
                -
                <span class="font-weight-bold">
                  <v-icon size="18">mdi-dice-4</v-icon>
                  120 متر مربع
                </span>
              </div>
              <div class="my-3">
                <v-icon size="18">mdi-map-marker</v-icon>
                مصر, المعادى, شارع 9
              </div>
            </v-card-text>
          </v-card>
          <v-card flat tile light class="white mb-5">
            <v-card-title>وصف العقار</v-card-title>
            <v-card-text>
              شقة فى برج مكون من أربعين طابق بجواره جميع الخدمات اللازمة اللى
              ممكن تحتاجها شقة فى برج مكون من أربعين طابق بجواره جميع الخدمات
              اللازمة اللى ممكن تحتاجها شقة فى برج مكون من أربعين طابق بجواره
              جميع الخدمات اللازمة اللى ممكن تحتاجها
            </v-card-text>
            <v-card-text class="my-5 text-center">
              <v-row no-gutters>
                <v-col cols="4" md="4" sm="4"
                  ><v-btn
                    tile
                    width="100%"
                    text
                    large
                    class="orange white--text"
                    >السعر 150 $</v-btn
                  ></v-col
                >
                <v-col cols="4" md="4" sm="4"
                  ><v-btn width="100%" tile large text class="green white--text"
                    ><v-icon size="20">mdi-phone</v-icon> إتصل</v-btn
                  ></v-col
                >
                <v-col cols="4" md="4" sm="4"
                  ><v-btn
                    width="100%"
                    tile
                    large
                    text
                    class="grey darken-3 white--text"
                    ><v-icon size="20">mdi-whatsapp</v-icon> واتس أب</v-btn
                  ></v-col
                >
              </v-row>
            </v-card-text>
          </v-card>
          <v-card flat tile light class="white mb-0 pb-0">
            <v-card-text>
              <v-text-field
                color="lime darken-3"
                class="black--text"
                prepend-icon="mdi-account"
                filled
                light
                dense
                label="الأسم"
              ></v-text-field>
              <v-text-field
                dense
                light
                color="lime darken-3"
                prepend-icon="mdi-email"
                filled
                label="االبريد الألكترونى"
              ></v-text-field>
              <v-text-field
                dense
                light
                color="lime darken-3"
                prepend-icon="mdi-cellphone"
                filled
                label="رقم الجوال"
              ></v-text-field>
              <v-select
                dense
                light
                color="lime darken-3"
                prepend-icon="mdi-account-group"
                filled
                label="عدد الأفراد"
              ></v-select>
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date"
                    color="lime darken-3"
                    label="تاريخ الوصول"
                    prepend-icon="mdi-calendar-check"
                    filled
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false"
                    >Cancel</v-btn
                  >
                  <v-btn text color="primary" @click="$refs.menu.save(date)"
                    >OK</v-btn
                  >
                </v-date-picker>
              </v-menu>
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date"
                    color="lime darken-3"
                    label="المغادرة"
                    prepend-icon="mdi-calendar-remove"
                    filled
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false"
                    >Cancel</v-btn
                  >
                  <v-btn text color="primary" @click="$refs.menu.save(date)"
                    >OK</v-btn
                  >
                </v-date-picker>
              </v-menu>
              <v-btn block x-large class="lime darken-3 white--text" text tile
                >إحجز الأن</v-btn
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card flat class="mb-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.7518831457533!2d31.211624414886618!3d29.986559828260226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846ff96d97c57%3A0xccba4d52d192828a!2sAl%20Bahr%20Al%20Aazam%2C%20Gazirat%20Ad%20Dahab%2C%20Giza%20District%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1573315168215!5m2!1sen!2seg"
              width="100%"
              height="250"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
            ></iframe>
          </v-card>

          <v-card flat tile light class="white my-5">
            <v-card-title>المميزات والخدمات</v-card-title>
            <v-card-text class="text-center">
              <v-chip small class="ma-1"
                ><span class="font-weight-bold">
                  <v-icon size="18">mdi-air-conditioner</v-icon>
                  تكييف مركزى
                </span></v-chip
              >
              <v-chip small class="ma-1"
                ><span class="font-weight-bold">
                  <v-icon size="18">mdi-parking</v-icon>
                  جراج
                </span></v-chip
              >
              <v-chip small class="ma-1"
                ><span class="font-weight-bold">
                  <v-icon size="18">mdi-pool</v-icon>
                  حمام سباحة
                </span></v-chip
              >
            </v-card-text>
          </v-card>

          <v-card flat tile light class="white my-5">
            <v-card-title>التعليمات والسياسات </v-card-title>
            <v-card-text>
              <ul style="margin-right:20px;">
                <li>عد إزعاج الجيران</li>
                <li>عد إزعاج الجيران</li>
                <li>عد إزعاج الجيران</li>
                <li>عد إزعاج الجيران</li>
                <li>عد إزعاج الجيران</li>
              </ul>
            </v-card-text>
          </v-card>
          <v-card flat tile light class="white my-5">
            <v-card-title>الأماكن والمعالم الهامة القريبة</v-card-title>
            <v-card-text class="text-center"> </v-card-text>
          </v-card>
          <v-card flat tile light class="white my-5">
            <v-card-title>تعليقات</v-card-title>
            <v-card-text>
              <v-textarea
                label="أضف تعليق"
                counter="150"
                filled
                color="lime darken-3"
              >
              </v-textarea>
              <v-btn class="lime darken-3 white--text">تعليق</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      cycle: true,
      slides: [
        'https://www.deluxehomes.ae/wp-content/uploads/2018/09/2-bedroom-in-dubai-marina-01.jpg',
        'https://www.deluxehomes.ae/wp-content/uploads/2018/09/2-bedroom-in-dubai-marina-02.jpg',
        'https://www.deluxehomes.ae/wp-content/uploads/2018/09/2-bedroom-in-dubai-marina-03.jpg',
        'https://www.deluxehomes.ae/wp-content/uploads/2018/09/2-bedroom-in-dubai-marina-04.jpg',
        'https://www.deluxehomes.ae/wp-content/uploads/2018/09/2-bedroom-in-dubai-marina-05.jpg'
      ]
    }
  }
}
</script>

<style></style>
