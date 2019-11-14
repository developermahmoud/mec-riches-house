<template>
  <div>
    <v-breadcrumbs icons :items="breadcrumbs"></v-breadcrumbs>
    <v-card flat class="mx-auto">
      <v-card class="lime darken-3 white--text material-card">
        عرض الكل
      </v-card>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="categories"
          class="elevation-1"
          :loading="loading"
          loading-text="جارى تحميل الأقسام"
        >
          <template v-slot:item.action="{ item }">
            <v-btn small text class="success" @click="editItem(item)">
              <v-icon small>
                mdi-pen
              </v-icon>
            </v-btn>
            <v-btn small text class="error" @click="deleteItem(item)">
              <v-icon small>
                mdi-delete
              </v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
    <v-dialog v-model="dialog" max-width="300px">
      <v-card>
        <v-card-title>
          <span class="headline">تعديل القسم</span>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="editedItem.name"
            label="اسم القسم"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">إلغاء</v-btn>
          <v-btn color="blue darken-1" text @click="save">حفظ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  layout: 'dashboard',
  middleware: 'auth',
  data() {
    return {
      category: {},
      dialog: false,
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
          text: 'الأقسام',
          disabled: false,
          exact: true,
          link: true,
          to: '/dashboard/categories/'
        }
      ],
      headers: [
        { text: 'الأسم', value: 'name' },
        { text: '', value: 'action' }
      ],
      editedIndex: -1,
      editedItem: {}
    }
  },
  computed: {
    categories() {
      return this.$store.state.dashboard.category.categories
    },
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },
  watch: {
    dialog(val) {
      val || this.close()
    }
  },
  mounted() {
    this.setCategories().then(() => {
      this.loading = false
    })
  },
  methods: {
    ...mapActions({
      setCategories: 'dashboard/category/setCategories',
      updateCategory: 'dashboard/category/updateCategory',
      deleteCategory: 'dashboard/category/deleteCategory',
      setSnackbar: 'snackbar/setSnackbar',
      setLoading: 'loading/setLoading'
    }),
    editItem(item) {
      this.editedIndex = this.categories.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      if (confirm('تأكيد الحذف')) {
        this.setLoading(true)
        this.deleteCategory(item).then(() => {
          this.setLoading(false)
          this.setSnackbar({ text: 'تم الحذف.', color: 'success' })
        })
      }
    },
    close() {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, {})
        this.editedIndex = -1
      }, 300)
    },

    save() {
      this.setLoading(true)
      this.updateCategory({
        index: this.editedIndex,
        category: this.editedItem
      }).then(() => {
        this.close()
        this.setLoading(false)
        this.setSnackbar({ text: 'تم التعديل.', color: 'success' })
      })
    }
  }
}
</script>

<style></style>
