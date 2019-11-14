const categoryUrl = '/api/dashboard/categories/'
export const state = () => ({
  categories: []
})

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  UPDATE_CATEGORY(state, obj) {
    if (obj.index > -1) {
      Object.assign(state.categories[obj.index], obj.category)
    } else {
      state.categories.push(obj.category)
    }
  },
  DELETE_CATEGORY(state, category) {
    state.categories.splice(state.categories.indexOf(category), 1)
  }
}

export const actions = {
  async setCategories({ commit }) {
    const response = await this.$axios.$get(categoryUrl)
    commit('SET_CATEGORIES', response)
    return response
  },
  async storeCategory({ _ }, category) {
    const response = await this.$axios.$post(categoryUrl, category)
    return response
  },
  async deleteCategory({ commit }, category) {
    const response = await this.$axios.$delete(
      categoryUrl + category.id + '/delete'
    )
    commit('DELETE_CATEGORY', category)
    return response
  },
  async updateCategory({ commit }, obj) {
    const response = await this.$axios.$put(
      categoryUrl + obj.category.id + '/edit',
      obj.category
    )
    commit('UPDATE_CATEGORY', obj)
    return response
  }
}
