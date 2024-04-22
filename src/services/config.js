import axios from "axios";
// baseUrl ro inja mizarim ke agar niyazi be taghir dashte bashe fagat ye ja taghir bedim.
const api = axios.create({ baseURL: "https://fakestoreapi.com" });
// baraye response hayi ke be ezaye har request miyad response.data shun ro migirim ke har dafa dobarekari code surat
// nagire.
api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);
export default api;
