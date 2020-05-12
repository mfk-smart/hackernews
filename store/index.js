import axios from '~/plugins/axios'

export const state = () => ({
  ids: []
})

export const mutations = {
  setItems(state, items) {
    state.items = items
  }
}
export const actions = {
  async LOAD_ITEMS({commit}, dataURL) {
    const response = await axios.get(dataURL)
    const ids = response.data

    const tenIds = ids.slice(0, 10)
    const itemsPromises = tenIds.map(id => axios.get(`item/${id}.json`))
    const itemsReponses = await Promise.all(itemsPromises)

    const items = itemsReponses.map(res => res.data)

    commit('setItems', items)
  }
}
