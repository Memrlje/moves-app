import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    activeTabIndex: 0,
    movies: [],
    shows: [],
  },
  mutations: {
    CHANGE_TAB(state, payload) {
        state.activeTabIndex = payload
    },
    CHANGE_MOVIES(state, payload) {
        state.movies = payload
    },
    CHANGE_SHOWS(state, payload) {
        state.shows = payload
    }
  },
  actions: {
      changeTab(context, payload) {
        context.commit('CHANGE_TAB', payload)
      },
      filterMovies(context, payload) {
        context.commit('CHANGE_MOVIES', payload)
      },
      filterShows(context, payload) {
        context.commit('CHANGE_SHOWS', payload)
      },
  }
})

export default store