<template>
  <div>
    <v-navigation-drawer clipped app fixed v-model="drawer">
      <app-sidebar></app-sidebar>
    </v-navigation-drawer>
    <v-toolbar fixed app dark clipped-left color="primary" class="shajara-toolbar">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <div class="site-logo mt-2">
          <router-link to="/">
            <img src="../assets/logo.png" alt="site logo" width="100" height="30">
          </router-link>
        </div>
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
      slider: 56,
      tile: true,
      drawer: true,
      title: 'Shajara'
    }
  },
  computed: {
    avatarSize () {
      return `${this.slider}px`
    }
  },
  components: {
    appSidebar: Sidebar
  }
}
</script>
