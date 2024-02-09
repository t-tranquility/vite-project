import { create } from 'zustand';

interface MyStoreInterface {
  userName: string;
  suns: number;
  setUserName: (newUsername: string) => void;
  increaseSuns: (points: number) => void;
}

export const useStore = create<MyStoreInterface>((set) => ({
  userName: '',
  suns: 0,
  setUserName: (newUsername) => set({ userName: newUsername }),
  increaseSuns: (points) => set((state) => ({ suns: state.suns + points })),
}));
