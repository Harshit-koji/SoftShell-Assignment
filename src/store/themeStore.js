

import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  mode: localStorage.getItem('theme') === 'light', // default mode
  toggleMode: () => {
    set((state) => {
      const newMode = !state.mode;
      localStorage.setItem('theme', newMode ? 'light' : 'dark');
      return { mode: newMode };
    });
  },
}));
