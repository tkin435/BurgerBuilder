import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-fb14c.firebaseio.com/",
});

export default instance;
