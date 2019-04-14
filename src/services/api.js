import axios from "axios";

const api = axios.create({
    baseURL: "https://boxes-upload.herokuapp.com/"
});

export default api;

