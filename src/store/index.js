import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  // state
  state: {
    memories: []
  },

  // getters
  getters: {
    getMemories: state => {
      return state.memories
    },
    countMemories: state => {
      return state.memories.length
    }
  },
  // mutations
  mutations: {
    CREATE_MEMORY (state, memory) {
      state.memories.push(memory)
    },
    DELETE_MEMORY (state, index) {
      state.memories.splice(index, 1)
    },
    UPDATE_MEMORY (state, index, memory) {
      state.memories.splice(index, 1, memory)
    }
  },
  // actions
  actions: {
    createMemory (context, payload) {
      const memory = payload
      context.commit('CREATE_MEMORY', memory)
    },
    deleteMemory (context, payload) {
      const index = payload
      context.commit('DELETE_MEMORY', index)
    },
    updateMemory (context, payload) {
      const { index, memory } = payload
      context.commit('UPDATE_MEMORY', index, memory)
    }
  }
})
