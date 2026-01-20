import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ShoppingState {
  cart: Product[];
  totalItems: number;
  totalPrice: number;
  hydrated: boolean;
  
  // Actions
  addProduct: (product: Omit<Product, 'quantity'>) => void;
  removeProduct: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  setHydrated: () => void;
}

export const useShoppingStore = create<ShoppingState>()(
  persist(
    (set, get) => ({
      cart: [],
      totalItems: 0,
      totalPrice: 0,
      hydrated: false,

      addProduct: (product) => {
        const existingProduct = get().cart.find(p => p.id === product.id);
        
        if (existingProduct) {
          set((state) => ({
            cart: state.cart.map(p =>
              p.id === product.id
                ? { ...p, quantity: p.quantity + 1 }
                : p
            )
          }));
        } else {
          set((state) => ({
            cart: [...state.cart, { ...product, quantity: 1 }]
          }));
        }

        // Calculate totals
        const { cart } = get();
        set({
          totalItems: cart.reduce((sum, p) => sum + p.quantity, 0),
          totalPrice: cart.reduce((sum, p) => sum + (p.price * p.quantity), 0)
        });
      },

      removeProduct: (id) => {
        set((state) => ({
          cart: state.cart.filter(p => p.id !== id)
        }));

        const { cart } = get();
        set({
          totalItems: cart.reduce((sum, p) => sum + p.quantity, 0),
          totalPrice: cart.reduce((sum, p) => sum + (p.price * p.quantity), 0)
        });
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeProduct(id);
          return;
        }

        set((state) => ({
          cart: state.cart.map(p =>
            p.id === id ? { ...p, quantity } : p
          )
        }));

        const { cart } = get();
        set({
          totalItems: cart.reduce((sum, p) => sum + p.quantity, 0),
          totalPrice: cart.reduce((sum, p) => sum + (p.price * p.quantity), 0)
        });
      },

      clearCart: () => set({
        cart: [],
        totalItems: 0,
        totalPrice: 0
      }),

      setHydrated: () => set({ hydrated: true })
    }),
    {
      name: 'shopping-cart-storage', // localStorage key
      storage: createJSONStorage(() => localStorage),
      
      // Sync across tabs using storage event
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    }
  )
);

// Listen for storage events (cross-tab sync)
if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => {
    if (e.key === 'shopping-cart-storage' && e.newValue) {
      const newState = JSON.parse(e.newValue);
      useShoppingStore.setState(newState.state);
    }
  });
}
