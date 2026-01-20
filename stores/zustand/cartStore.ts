import { create } from 'zustand';

interface CartState {
  items: string[];
  addItem: (item: string) => void;
  removeItem: (item: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (item) => set((state) => ({ 
    items: state.items.filter(i => i !== item) 
  })),
  clearCart: () => set({ items: [] })
}));
