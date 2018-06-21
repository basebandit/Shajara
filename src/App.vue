<template>
  <div id="app">
    <v-app>
      <app-header></app-header>
      <v-content>
        <v-container fluid>
          <img src="./assets/app.png">
          <router-view/>
        </v-container>
      </v-content>
      <app-footer></app-footer>
    </v-app>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import AppFooter from '@/components/Footer'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
