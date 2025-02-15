import { create } from "zustand";

const useStore = create((set) => ({
  showModal: false,

  setShowModalFalse: () => {
    set({ showModal: false });
  },

  init: () => {
    if (sessionStorage.getItem("modalHasSeen") === null) {
      sessionStorage.setItem("modalHasSeen", false);
    }
    let modalHasSeen = sessionStorage.getItem("modalHasSeen");

    if (!modalHasSeen || modalHasSeen === "false") {
      setTimeout(() => {
        sessionStorage.setItem("modalHasSeen", "true");
        set({ showModal: true });
      }, 30000);
    }
  },

  closeModal: () => set({ showModal: false }),
}));

export default useStore;
