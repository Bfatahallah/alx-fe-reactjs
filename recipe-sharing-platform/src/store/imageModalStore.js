import { create } from 'zustand'

export const useImageModalStore = create((set) => ({
  isOpen: false,
  selectedImage: null,
  openModal: (imageUrl) => set({ isOpen: true, selectedImage: imageUrl }),
  closeModal: () => set({ isOpen: false, selectedImage: null }),
}))