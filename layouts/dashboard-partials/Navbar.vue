<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app right>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ $auth.user.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-group
          v-for="(item, i) in items"
          :key="i"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title exact v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="subItem in item.items"
            :key="subItem.title"
            link
            :to="subItem.to"
            exact
          >
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed flat app class="grey lighten-3" light>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-menu transition="slide-x-transition" bottom right>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-badge left>
              <template v-slot:badge>2</template>
              <v-icon>mdi-alarm-light</v-icon>
            </v-badge>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in notifications" :key="i">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu transition="slide-x-transition" bottom right>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on"
            >{{ $auth.user.name }}
            <v-icon color="grey darken-1"> mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>تعديل الحساب</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-title>تسجيل الخروج</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      drawer: false,
      title: 'RENTAL',
      items: [
        {
          action: 'mdi-format-list-numbered-rtl',
          title: 'الأقسام',
          items: [
            {
              title: 'إضافة جديد',
              to: '/dashboard/categories/create'
            },
            {
              title: 'عرض الكل',
              to: '/dashboard/categories/'
            }
          ]
        },
        {
          action: 'mdi-warehouse',
          title: 'المنتجات',
          items: [
            {
              title: 'إضافة جديد',
              to: '/dashboard/products/create'
            },
            {
              title: 'عرض الكل',
              to: '/dashboard/products/'
            }
          ]
        },
        {
          action: 'mdi-cart',
          title: 'الطلبات',
          items: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' }
          ]
        }
      ],
      notifications: ['طلب حجز جديد', 'إستفسار عن سعر', 'طلب حجز وحدة']
    }
  },
  mounted() {
    if (!this.$vuetify.breakpoint.smAndDown) {
      this.drawer = true
    }
  },
  methods: {
    ...mapActions({
      setSnackbar: 'snackbar/setSnackbar',
      setLoading: 'loading/setLoading'
    }),
    logout() {
      this.setLoading(true)
      this.$auth.logout().then(() => {
        this.setLoading(false)
        this.setSnackbar({ text: 'تم تسجيل خروجك.', color: 'success' })
        this.$router.push('/dashboard/login')
      })
    }
  }
}
</script>
