import axios from "axios"

export const http = axios.create({
    baseURL: 'https://genius.p.rapidapi.com/search'
})