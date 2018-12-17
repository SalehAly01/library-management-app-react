import axios from "./axiosInstance";

export default function editAuthor(data, authorID) {
  return axios.request({
    method: "PATCH",
    url: `/authors/${authorID}`,
    data
  });
}
