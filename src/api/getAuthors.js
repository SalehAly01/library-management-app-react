import axios from "./axiosInstance";

export default function getAuthors() {
  return axios.request({
    method: "GET",
    url: "/authors"
  });
}
