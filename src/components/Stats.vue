<template>
  <div>
    <h1>{{ msg }}{{countMemories}} memories</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Stats',
  computed: {
    ...mapGetters([
      'countMemories'
    ])
  },
  data () {
    return {
      msg: 'You currently have '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
</style>
