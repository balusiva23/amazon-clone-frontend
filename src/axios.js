import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-clone-backend-awjn.onrender.com/",
  //baseURL: "http://localhost:4000",
});

export default instance;
