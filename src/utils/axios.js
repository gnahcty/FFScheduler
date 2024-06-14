
import { useUserStore } from "@/stores/userStore";
import axios from "axios";
// create an axios instance
export const api = axios.create({
  baseURL: import.meta.env.VITE_API,
})
export const apiAuth = axios.create({
  baseURL: import.meta.env.VITE_API,
})

apiAuth.interceptors.request.use(config => {
  const user = useUserStore()
  config.headers.Authorization = `Bearer ${user.token.value}`
  return config
})