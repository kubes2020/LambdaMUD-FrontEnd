import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: `Token ${token}`,
    },
    baseURL: "https://mud-adventure.herokuapp.com/api",
  });
};
