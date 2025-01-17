import { create } from "zustand";

interface darkMode {
  isDarkMode: boolean;
  toggleDarkMode: (e: any) => void;
}

const useStore = create<darkMode>((set) => ({
  isDarkMode: true,
  toggleDarkMode: (e: any) => {
    set((state) => ({ isDarkMode: e }));
  },
}));

export default useStore;
