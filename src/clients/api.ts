import axios from 'axios'


export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzdiNTFjODdkZTY5M2NmMTUzZDBlNyIsInVzZXJuYW1lIjoidXNlcjciLCJlbWFpbCI6InVzZXI3QHRlc3QuY29tIiwicm9sZSI6InVzZXIifSwiaWF0IjoxNzY1NDczNDc0LCJleHAiOjE3NjU1NTk4NzR9.BZrKp4VFg_MHlMlewCqx5hnvFt7xoGloc5wifRPJpRQ"
    }
});