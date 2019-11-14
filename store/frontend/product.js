const productUrl = '/api/frontend/products/'

export const state = () => ({
  products: [],
  product: {}
})

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_PRODUCT(state, product) {
    state.product = product
  }
}

export const actions = {
  async setProducts({ commit }) {
    const response = await this.$axios.get(productUrl)
    commit('SET_PRODUCTS', response.data)
    return response
  },
  async setProductById({ commit }, id) {
    const response = await this.$axios.get(productUrl + id)
    commit('SET_PRODUCT', response.data)
    return response
  }
}
