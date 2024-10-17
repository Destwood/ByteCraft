import Cookies from 'js-cookie'
import { getContentType } from '../../api/api.helpers'
import { axiosClassic } from '../../api/interceptors'
import { getAuthUrl } from '../../config/api.config'
import { removeTokensStorage, saveToStorage } from './auth.helper'

export const AuthService = {
  async register(email, password, userName) {
    const response = await axiosClassic.post(getAuthUrl('/register'), {
      email,
      password,
      userName,
    })
    if (response.data.accessToken) saveToStorage(response.data)

    return response
  },

  async login(email, password) {
    const response = await axiosClassic.post(getAuthUrl('/login'), {
      email,
      password,
    })
    if (response.data.accessToken) saveToStorage(response.data)

    return response
  },

  async logout() {
    localStorage.removeItem('user')
    removeTokensStorage()
  },

  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken')
    const response = await axiosClassic.post(
      getAuthUrl('/login/access-token'),
      { refreshToken },
      { headers: getContentType() }
    )

    if (response.data.accessToken) saveToStorage(response.data)

    return response
  },
}
