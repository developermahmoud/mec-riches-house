export const state = () => ({
  loading: false
})

export const mutations = {
  SET_LOADING(state, value) {
    state.loading = value
  }
}

export const actions = {
  setLoading({ commit }, value) {
    commit('SET_LOADING', value)
  }
}
