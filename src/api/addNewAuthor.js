import axios from "./axiosInstance";

export default function addNewAuthor(data) {
  return axios.request({
    method: "POST",
    url: "/authors",
    data
  });
}
