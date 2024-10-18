import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { AuthService } from '../../services/auth/auth.service'
import { errorCatch } from '../../api/api.helpers'
import { toastError } from '../../utils/toast-error'

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password, userName }, thunkApi) => {
    try {
      const response = await AuthService.register(email, password, userName)
      toast.success('Ви успішно зареєструвались!')
      return response.data
    } catch (error) {
      toastError(error)
      return thunkApi.rejectWithValue(error)
    }
  }
)

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkApi) => {
    try {
      const response = await AuthService.login(email, password)
      toast.success('Ви успішно авторизувались!')
      return response.data
    } catch (error) {
      toastError(error)
      return thunkApi.rejectWithValue(error)
    }
  }
)

export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout()
})

export const checkAuth = createAsyncThunk(
  'auth/check-auth',
  async (_, thunkApi) => {
    try {
      const response = await AuthService.getNewTokens()
      return response.data
    } catch (error) {
      if (errorCatch(error) === 'jwt expired') {
        toast.error('Вихід з аккаунту.')
        thunkApi.dispatch(logout())
      }
      return thunkApi.rejectWithValue(error)
    }
  }
)
