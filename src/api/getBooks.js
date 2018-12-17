import axios from "./axiosInstance";

export default function getBooks() {
  return axios.request({
    method: "GET",
    url: "/books"
  });
}
