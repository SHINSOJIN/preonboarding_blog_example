import axios from 'axios';
const HOST = process.env.REACT_APP_BASE_URL

export const api = axios.create({
    baseURL: HOST || 'http://localhost:4000',
    timeout: 1000,
    headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});
