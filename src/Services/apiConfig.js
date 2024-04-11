import axios from "axios";

const getToken = () => {
  return new Promise((resolve) => {
    if (localStorage.getItem("token")) {
      resolve(`Bearer ${localStorage.getItem("token")}`);
    } else {
      resolve(null);
    }
  });
};

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://ourappname.herokuapp.com/api" //update this once backend is deployed
      : "http://localhost:3017/api",
});

api.interceptors.request.use(
  async function (config) {
    const token = await getToken();
    if (token) {
      config.headers["Authorization"] = await getToken();
    }
    return config;
  },
  function (error) {
    console.log("Request error: ", error);
    return Promise.reject(error);
  }
);

export default api;
