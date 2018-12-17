import axios from "./axiosInstance";

export default function editBook(data, bookID) {
  return axios.request({
    method: "PATCH",
    url: `/books/${bookID}`,
    data
  });
}
