import axios from 'axios'


export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5NDdiZDA5YzYyMzIyNzk2YjllN2YyZSIsInVzZXJuYW1lIjoidXNlcjEwMCIsImVtYWlsIjoidXNlcjEwMEB0ZXN0LmNvbSIsInJvbGUiOiJ1c2VyIn0sImlhdCI6MTc2NjMwOTE1MSwiZXhwIjoxNzY2Mzk1NTUxfQ.A0VP0m8jL7DmpMJtf8Biiri2noMEEtBLH6IGqpnXiOU"
    }
});