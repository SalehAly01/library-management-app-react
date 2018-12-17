import axios from "./axiosInstance";

export default function addNewCategory(data) {
  return axios.request({
    method: "POST",
    url: "/categories",
    data
  });
}
