import axios from "axios";

const instance = axios.create({
  baseURL: "http://109.167.145.3",
  timeout: 6000,
});

export { instance };
