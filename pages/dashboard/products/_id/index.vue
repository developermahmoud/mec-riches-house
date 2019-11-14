<template>
  <div>
    <v-breadcrumbs icons :items="breadcrumbs"></v-breadcrumbs>
    <v-card flat class="mx-auto">
      <v-card class="lime darken-3 white--text material-card">
        تعيل المنتج
      </v-card>
      <v-card-text>
        <v-form ref="form">
          <v-select
            v-model="product.category_id"
            dense
            label="القسم"
            filled
            :items="categories"
            item-text="name"
            item-value="id"
          >
          </v-select>
          <v-text-field
            v-model="product.title"
            dense
            label="إسم المنتج"
            filled
          ></v-text-field>
          <v-textarea
            v-model="product.description"
            dense
            label="كلمة مختصرة"
            filled
          ></v-textarea>
          <v-row>
            <v-col cols="12" md="6" sm="12">
              <v-text-field
                v-model="product.address"
                dense
                label="العنوان"
                filled
              ></v-text-field>
              <v-text-field
                v-model="product.google_map"
                dense
                label="جوجل ماب"
                filled
              ></v-text-field>
              <v-text-field
                v-model="product.youtube_link"
                dense
                label="يوتيوب"
                filled
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" sm="12">
              <v-text-field
                v-model="product.dimensions"
                dense
                label="المساحة"
                filled
              ></v-text-field>
              <v-text-field
                v-model="product.room"
                dense
                label="عدد الغرف"
                filled
              ></v-text-field>
              <v-text-field
                v-model="product.bathroom"
                dense
                label="عدد الحمام"
                filled
              ></v-text-field>
            </v-col>
          </v-row>
          <v-autocomplete
            v-model="product.features"
            :items="items"
            filled
            dense
            chips
            small-chips
            label="المميزات والخدمات"
            multiple
          ></v-autocomplete>

          <v-combobox
            v-model="product.nearby_places"
            :items="product.nearby_places"
            label="الأماكن القريبة"
            multiple
            chips
            dense
            filled
          ></v-combobox>
          <v-combobox
            v-model="product.instructions_and_policies"
            :items="product.instructions_and_policies"
            label="التعليمات والسايات"
            multiple
            chips
            dense
            filled
          ></v-combobox>
          <v-alert outlined type="warning" prominent border="left"
            >الحد الأنى للحجز خمسة أيام</v-alert
          >
          <v-text-field
            v-model="product.price"
            dense
            label="سعر اليوم الواحد"
            filled
          ></v-text-field>
          <v-file-input
            v-model="product.productImages"
            multiple
            filled
            dense
            prepend-icon="mdi-camera"
            label="ألبوم صور"
          ></v-file-input>

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
          text: 'المنتجات',
          disabled: false,
          exact: true,
          link: true,
          to: '/dashboard/products/'
        },
        {
          text: 'إضافة جديد',
          disabled: true,
          href: ''
        }
      ],
      items: [
        'مطبخ',
        'تكييف',
        'انتر نت',
        'حمام سباحة',
        'جراج',
        'اسانسير خصوصى'
      ],
      values: [],
      places: []
    }
  },
  computed: {
    categories() {
      return this.$store.state.dashboard.category.categories
    },
    product() {
      return this.$store.state.dashboard.product.product
    }
  },
  mounted() {
    this.setLoading(true)
    this.setCategories()

    this.setProductById(this.$route.params.id).then(() => {
      this.setLoading(false)
    })
  },
  methods: {
    ...mapActions({
      setCategories: 'dashboard/category/setCategories',
      setProductById: 'dashboard/product/setProductById',
      setSnackbar: 'snackbar/setSnackbar',
      setLoading: 'loading/setLoading'
    }),
    store() {
      if (this.$refs.form.validate()) {
        this.setLoading(true)
        const formData = new FormData()
        formData.append('title', this.product.title)
        formData.append('description', this.product.description)
        formData.append('address', this.product.address)
        formData.append('dimensions', this.product.dimensions)
        formData.append('google_map', this.product.google_map)
        formData.append('room', this.product.room)
        formData.append('bathroom', this.product.bathroom)
        formData.append('youtube_link', this.product.youtube_link)
        formData.append('features', this.product.features)
        formData.append('nearby_places', this.product.nearby_places)
        formData.append('price', this.product.price)
        formData.append('category_id', this.product.category_id)
        formData.append(
          'instructions_and_policies',
          this.product.instructions_and_policies
        )
        const count = this.product.productImages.length
        for (let x = 0; x < count; x++) {
          formData.append('productImages[]', this.product.productImages[x])
        }
        try {
          this.storeProduct(formData).then(() => {
            this.$refs.form.resetValidation()
            this.$refs.form.reset()
            this.setLoading(false)
            this.setSnackbar({
              text: 'تمت اضافة المنتج',
              color: 'success'
            })
          })
        } catch (error) {
          this.setLoading(false)
        }
      }
    }
  }
}
</script>

<style></style>
