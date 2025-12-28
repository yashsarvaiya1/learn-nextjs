import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CounterState } from "@/models/zustand-demo/types";
import { count } from "console";

interface CounterStore extends CounterState {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementBy: (amount: number) => void;
}

export const useCounterStore = create<CounterStore>()(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
      incrementBy: (amount) =>
        set((state) => ({ count: state.count + amount })),
    }),
    {
      name: "counter-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
