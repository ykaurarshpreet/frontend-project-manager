import axios from 'axios'


export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzdiNTFjODdkZTY5M2NmMTUzZDBlNyIsInVzZXJuYW1lIjoidXNlcjciLCJlbWFpbCI6InVzZXI3QHRlc3QuY29tIiwicm9sZSI6InVzZXIifSwiaWF0IjoxNzY1MzkxMDQ3LCJleHAiOjE3NjU0Nzc0NDd9.qtfYno4vdyFOeJexy9lo5Np-L3OUM6jYyIoymjqUfMw"
    }
});