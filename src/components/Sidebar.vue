<template>
  <div class="sidebar">
    <VuePerfectScrollbar class="scroll-area">
      <v-list two-line>
        <v-list-tile class="my-3">
          <v-toolbar fixed flat prominent height="120">
            <v-text-field v-model="newMemory" label="Add a memory to remember" @keyup.enter="addMemory">
            </v-text-field>
            <v-btn flat icon color="primary" @click="addMemory">
              <v-icon>add</v-icon>
            </v-btn>
          </v-toolbar>
          <v-divider></v-divider>
        </v-list-tile>
        <template v-if="countMemories !== 0">
          <v-list two-line>
            <template v-for="(memory, index) in memories">
              <v-list-tile :key="memory.title" avatar>
                <v-list-tile-avatar v-if="!memory.done">
                  <img src="../assets/memory.png">
                </v-list-tile-avatar>
                <v-list-tile-avatar v-else>
                  <img src="../assets/done.png">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{memory.title}}
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    {{memory.description}} </v-list-tile-sub-title>
                  <v-list-tile-sub-title>
                    <span class="grey--text text--lighten-1 ">
                      {{memory.createdDate}}
                    </span>
                  </v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-btn flat icon color="warning" @click="removeMemory(index)">
                    <v-icon>clear</v-icon>
                  </v-btn>
                </v-list-tile-action>

              </v-list-tile>
              <v-divider v-if="(index + 1) < countMemories" :key="`divider-${index}`"></v-divider>
            </template>
          </v-list>
        </template>
        <template v-else>
          <v-layout justify-center>
            <v-list class="mt-5">
              <v-list-tile>
                <img src="../assets/empty.png">
              </v-list-tile>
            </v-list>
          </v-layout>
          <v-layout justify-center>
            <v-list>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    <span class="grey--text text--lighten-1 ">
                      No memories
                    </span>
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-layout>
        </template>
      </v-list>
    </VuePerfectScrollbar>
  </div>
</template>
<script>
import moment from 'moment'
import { mapState, mapGetters } from 'vuex'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
export default {
  name: 'Sidebar',
  data: () => {
    return {
      newMemory: '',
      memoryId: 0
    }
  },
  components: {
    VuePerfectScrollbar
  },
  computed: {
    ...mapState([
      'memories'
    ]),
    ...mapGetters([
      'countMemories'
    ])
  },
  methods: {
    addMemory () {
      if (this.newMemory !== '' || this.newMemory !== null) {
        const memory = { id: this.memoryId++, title: this.newMemory, description: 'Insert memory description here', done: false, createdDate: moment().format('MMMM Do YYYY') }
        // populate the event array in the store
        this.$store.state.memories.push(memory)
        // clear input field
        this.newMemory = ''
      } else {
        this.error = "Can't add an empty memory"
      }
    },
    removeMemory (index) {
      this.$store.state.memories.splice(index, 1)
    }
  }
}
</script>
