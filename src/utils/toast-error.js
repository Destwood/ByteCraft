import { toast } from 'react-toastify'
import { errorCatch } from '../api/api.helpers'

export const toastError = (error, title) => {
  const message = errorCatch(error)
  toast.error(title || 'Помилка', message)
  throw message
}
