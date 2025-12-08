import axios from 'axios'


export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzY5YWVhZTU2ZmIxMjllMTQwOTg5YyIsInVzZXJuYW1lIjoidXNlcjQiLCJlbWFpbCI6InVzZXI0QHRlc3QuY29tIiwicm9sZSI6InVzZXIifSwiaWF0IjoxNzY1MTg2MjkyLCJleHAiOjE3NjUyNzI2OTJ9.JEHmIuHk4ctES2hX8kOgQncnYKTykoVG5PywQAFdyJ0"
    }
});