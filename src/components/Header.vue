<template>
  <div>
    <v-navigation-drawer clipped app fixed v-model="drawer">
      <app-sidebar></app-sidebar>
    </v-navigation-drawer>
    <v-toolbar fixed app dark clipped-left color="primary" class="shajara-toolbar">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title>
        <span class="site-logo mt-2" @click="navigateTo({name:'Stats'})">
          <!-- <img src="../assets/logo.png" alt="site logo" width="100" height="30"> -->
          {{title}}
        </span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <v-icon>perm_identity</v-icon>
        </v-btn>
        <v-btn flat>
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>
<script>
import Sidebar from './Sidebar'

export default {
  data: () => {
    return {
      drawer: true,
      title: 'Shajara'
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    appSidebar: Sidebar
  }
}
</script>
<style scoped lang="scss">
  .site-logo {
    cursor: pointer
  }
</style>
