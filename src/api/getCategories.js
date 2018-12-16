import axios from "./axiosInstance";

export default function getCategories() {
  return axios.request({
    method: "GET",
    url: `/categories`
  });
}
