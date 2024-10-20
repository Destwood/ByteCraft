import axios, { axiosClassic } from '../../api/interceptors'
import { getFundUrl } from '../../config/api.config'

export const FundService = {
  async getFunds() {
    const response = await axiosClassic.get(getFundUrl(''))

    return response.data
  },

  async getFundById(id) {
    const response = await axiosClassic.get(getFundUrl(`/${id}`))
    return response.data
  },

  async createFund(fundData) {
    const response = await axios.post(getFundUrl('/create'), fundData)
    return response.data
  },

  async updateFund(id, updatedData) {
    const response = await axiosClassic.put(getFundUrl(`/${id}`), updatedData)
    return response.data
  },

  async deleteFund(id) {
    const response = await axiosClassic.delete(getFundUrl(`/${id}`))
    return response.data
  },
}
export default FundService
