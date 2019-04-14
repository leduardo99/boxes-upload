import axios from "axios";

const api = axios.create({
    baseURL: "https://upload-archives.herokuapp.com/"
});

export default api;

