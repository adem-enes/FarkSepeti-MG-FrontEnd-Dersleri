import axios from "axios";
const url = "https://localhost:44313/api";

const API = axios.create({
    baseURL: url,

});

export const urunOlurtur = (urun) => API.post(`/urunler`, urun);
export const urunGuncelle = (urun) => API.put(`/urunler`, urun);
export const urunleriGetir = () => API.get(`/urunler`);
export const urunleriDetayliGetir = () => API.get(`/urunler/detay`);
export const urunGetir = (id) => API.get(`/urunler/${id}`);
