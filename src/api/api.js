// api.js
import axios from "axios"
import { toast } from "react-toastify"

const api = axios.create({
  baseURL: "https://chess-encryption-api-production.up.railway.app/",
  timeout: 120000,
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status
    const detail = error.response?.data?.detail

    let message = "Something went wrong"

    if (detail?.message) {
      message = detail.message
    } else if (status === 401) {
      message = "Unauthorized. Please login again."
    } else if (status === 403) {
      message = "You don't have permission."
    } else if (status === 404) {
      message = "Resource not found."
    } else if (status === 413) {
      message = "File too large."
    } else if (status === 500) {
      message = "Server error. Try again later."
    }

    toast.error(message)

    return Promise.reject(new Error(message))
  }
)

export default api
