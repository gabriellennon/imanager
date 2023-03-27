import axios from 'axios';

export const api = axios.create({
    // Utilizando aplicacao com create react app
    // baseURL: process.env. REACT_APP_URL_BASE

    // Utilizando vite
    baseURL: import.meta.env.VITE_API_URL
})