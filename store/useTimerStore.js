import { create } from "zustand";

const useTimerStore = create((set) => {
  return {
    // startTime: null,
    // hasModalShown:
    // typeof window !== "undefined"
    //   ? sessionStorage.getItem("hasModalShown") === "true"
    //   : false,

    // sessionStorage.setItem("hasModalShown", "true");
    startTimer: () => set({ startTime: Date.now() }),
    stopTimer: () => set({ startTime: null }),

    checkElapsedTime: () => {},

    markModalShown: () => {
      // sessionStorage.setItem("hasModalShown", "true");
      // set({ hasModalShown: true });
    },
  };
});

export default useTimerStore;
