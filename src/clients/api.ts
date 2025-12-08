import axios from 'axios'


export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzY3OTZiMzY0NzU0YmQxM2NlNmY3ZiIsInVzZXJuYW1lIjoidXNlcjIiLCJlbWFpbCI6InVzZXIyQHRlc3QuY29tIiwicm9sZSI6InVzZXIifSwiaWF0IjoxNzY1MTc4OTI1LCJleHAiOjE3NjUxODYxMjV9.FHknNsw9QIt0fT04ful2nI8gvDCCN_rK4YQ1D23FiBw"
    }
});