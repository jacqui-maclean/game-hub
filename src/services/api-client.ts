import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3d7e42daafc74bce9143867b900651f9",
  },
});
