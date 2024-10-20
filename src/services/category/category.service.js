import { axiosClassic } from '../../api/interceptors'
import { getCategoryUrl } from '../../config/api.config'

export const CategoryService = {
  async getAll() {
    const response = await axiosClassic.get(getCategoryUrl(''))

    return response.data
  },
}
export default CategoryService
