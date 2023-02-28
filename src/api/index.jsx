import axios from "axios";
import { createContext } from "react";

export const http = axios.create({
    baseURL : 'https://api.rawg.io/api'
})

export const APIKEY = createContext('c606c3657aeb4a399b5a43f45deed3de')