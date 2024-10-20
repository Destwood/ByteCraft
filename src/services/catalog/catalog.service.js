import { axiosClassic } from '../../api/interceptors'
import { getCatalogUrl } from '../../config/api.config'

export const CatalogService = {
  async getProducts() {
    const response = await axiosClassic.get(getCatalogUrl(''))
    console.log(response)
    return response.data
  },

  async getProductById(id) {
    const response = await axiosClassic.get(getCatalogUrl(`/${id}`))
    return response.data
  },

  async createProduct(fundData) {
    const response = await axiosClassic.post(getCatalogUrl(''), fundData)
    return response.data
  },

  async updateProduct(id, updatedData) {
    const response = await axiosClassic.put(
      getCatalogUrl(`/${id}`),
      updatedData
    )
    return response.data
  },

  async deleteProduct(id) {
    const response = await axiosClassic.delete(getCatalogUrl(`/${id}`))
    return response.data
  },
}
export default CatalogService
