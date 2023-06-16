import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface IModalStore {
  isModalOpen: boolean;
  toggleOpenModal: () => void;
}

export const useModalStore = create<IModalStore>()(
  devtools(
    persist(
      (set) => ({
        isModalOpen: false,
        toggleOpenModal: () =>
          set((state) => ({
            isModalOpen: !state.isModalOpen,
          })),
      }),
      { name: "modal-store" }
    )
  )
);
