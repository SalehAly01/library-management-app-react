import axios from "./axiosInstance";

export default function getBook(id) {
  return axios.request({
    method: "GET",
    url: `/books/${id}`
  });
}
