import axios from 'axios';
import { create } from 'zustand';

interface UserData {
  response: any;
  error: any;
  access_token: string | null;
  loginUser: (username: string, password: string) => void;
  registerUser: (username: string, password: string) => void;
}

const dburl = import.meta.env.VITE_DBURL;

export const useUserService = create<UserData>((set) => ({
  response: null,
  error: null,
  access_token: null,
  loginUser: async (username: string, password: string) => {
    try {
      const response = await axios.post(`${dburl}/auth/login`, { username, password });
      localStorage.setItem('accessToken', response.data.access_token);
      set({ response: response.data, error: null, access_token: response.data.access_token }); //сюда вместо аксес токена юзера бахнуть
    } catch (error: any) {
      set({ response: error.response.data, error: error.response.data.message, access_token: null });
    }
  }, //isvisible сюда можно
  registerUser: async (username: string, password: string) => {
    try {
      const response = await axios.post(`${dburl}/auth/signup`, { username, password });
      localStorage.setItem('accessToken', response.data.access_token);
    } catch (error: any) {
      set({ response: error.response.data, error: error.response.data.message, access_token: null });
    }
  },
}));
