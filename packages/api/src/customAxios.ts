import axios from 'axios';
import {useAuthStore} from "@repo/store";
// import * as dotenv from 'dotenv';

// dotenv.config();

const customAxios = axios.create({
  baseURL: "https://scenario-api.euns.dev",
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

customAxios.interceptors.request.use(
  async (config) => {
    const {accessToken} = useAuthStore.getState();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
        const {refreshToken, setAccessToken, setRefreshToken} = useAuthStore.getState();
        if (refreshToken) {
        try {
            const { data } = await axios.post(`${process.env.EXPO_PUBLIC_API_BASE_URL}/auth/refresh`, {
                refreshToken,
            });

            setAccessToken(data.accessToken);
            setRefreshToken(data.refreshToken);
            
            error.config.headers.Authorization = `Bearer ${data.accessToken}`;
            return customAxios(error.config);
        } catch (refreshError) {
            console.error('Token refresh failed:', refreshError);
            setRefreshToken("")
            setAccessToken("")
        }
      }
    }

    return Promise.reject(error);
  }
);

export default customAxios;