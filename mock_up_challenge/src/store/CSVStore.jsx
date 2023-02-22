import { create } from "zustand";

const initialCSVStore = {
  csvData: {},
};

export const useCSVStore = create((set) => ({
  setCSVData: (csvData) => set({ csvData }),

  resetCSVData: () => {
    set(initialCSVStore);
  },
}));

export default useCSVStore;
