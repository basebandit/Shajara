<template>
  <v-footer fixed dark color="primary" class="pa-3">
    <v-layout row wrap justify-center>
      <v-flex xs12 py-3 text-xs-center white--text>
        Made with &hearts; -
        <span v-on:click="redirectToExternal" :style="{ cursor: 'pointer'}">
          <strong> Nsync Labs</strong>
        </span>
      </v-flex>

    </v-layout>
  </v-footer>
</template>
<script>
export default {
  data: () => {
    return {
      currentYear: new Date().getFullYear()
    }
  },
  methods: {
    redirectToExternal () {
      const profile = 'https://github.com/basebandit/ToDo'
      const newTab = window.open(profile, '_blank')
      newTab.focus()
    }
  }
}
</script>
