import axios from "axios";
import { API_HOST } from "../config/api-config";

const axiosInstance = axios.create({
  baseURL: `${API_HOST}/`
});

export default axiosInstance;
