import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

const requests = {
}
export {api, requests};