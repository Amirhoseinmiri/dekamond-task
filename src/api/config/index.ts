import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://randomuser.me";

export const apiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
