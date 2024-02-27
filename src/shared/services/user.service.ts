import axios from 'axios';
import { create } from 'zustand';

interface UserData {
  response: any;
  error: any;
  sendUserName: (username: string, password: string) => void;
  registerUser: (username: string, password: string) => void;
}
const dburl = 'http://localhost:3000';

export const userService = create<UserData>((set) => ({
  response: null,
  error: null,
  sendUserName: async (username: string, password: string) => {
    try {
      const response = await axios.post(`${dburl}/auth/login`, { username, password });
      set({ response: response.data, error: null });
    } catch (error) {
      set({ response: null, error: error.message });
    }
  },
  registerUser: async (username: string, password: string) => {
    try {
      const response = await axios.post(`${dburl}/auth/signup`, { username, password });
      set({ response: response.data, error: null });
    } catch (error) {
      set({ response: null, error: error.message });
    }
  },
}));
