import axios from "axios";
const url = "https://jsonplaceholder.typicode.com";
// const url = "http://localhost:8089";

const API = axios.create({
    baseURL: url,

});

// export const fetchProducts = () => API.get(`/products`);
export const fetchPosts = () => API.get(`/posts`);
