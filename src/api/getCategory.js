import axios from "./axiosInstance";

export default function getCategory(id) {
  return axios.request({
    method: "GET",
    url: `/categories/${id}`
  });
}
