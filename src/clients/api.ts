import axios from 'axios'


export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzdiNTFjODdkZTY5M2NmMTUzZDBlNyIsInVzZXJuYW1lIjoidXNlcjciLCJlbWFpbCI6InVzZXI3QHRlc3QuY29tIiwicm9sZSI6InVzZXIifSwiaWF0IjoxNzY1Mzg3MjgwLCJleHAiOjE3NjU0NzM2ODB9.CDN_8VxHiF8EwGQjUTLiT3gFhSs9cQum5CEa1R5JSjU"
    }
});