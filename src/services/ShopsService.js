import api from '@/services/api'

export default {
  fetchShops () {
    return api().get('shops')
  },
  addNewShop (params) {
    return api().post('shops', params)
  },
  getShop (params) {
    return api().get(`shops/${params.id}`)
  },
  updateShop (params) {
    return api().put(`shops/${params.id}`, params)
  },
  deleteShop (id) {
    return api().delete(`shops/${id}`)
  },
  searchProduct (params) {
    return api().get(`shops/${params.shop}/${params.id}`)
  }
}
