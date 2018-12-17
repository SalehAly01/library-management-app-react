import axios from "./axiosInstance";

export default function editCategory(data, categoryID) {
  return axios.request({
    method: "PATCH",
    url: `/categories/${categoryID}`,
    data
  });
}
