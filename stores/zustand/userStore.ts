import { create } from 'zustand';

interface User {
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
  login: (name: string, email: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  login: (name, email) => set({ user: { name, email } }),
  logout: () => set({ user: null })
}));
