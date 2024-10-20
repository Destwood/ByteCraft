import axios, { axiosClassic } from '../../api/interceptors'
import { getCategoryUrl } from '../../config/api.config'

export const CategoryService = {
  async getAll() {
    const response = await axiosClassic.get(getCategoryUrl(''))

    return response.data
  },
  async createProduct(productData) {
    const response = await axios.post(getCategoryUrl(''), productData)
    return response.data
  },
}
export default CategoryService
