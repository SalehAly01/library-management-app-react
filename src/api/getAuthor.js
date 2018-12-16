import axios from "./axiosInstance";

export default function getAuthor(id) {
  return axios.request({
    method: "GET",
    url: `/authors/${id}`
  });
}
