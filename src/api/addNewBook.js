import axios from "./axiosInstance";

export default function addNewBook(data) {
  return axios.request({
    method: "POST",
    url: "/books",
    data
  });
}
