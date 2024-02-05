import { type } from '@testing-library/user-event/dist/type';
import { create } from 'zustand';

export const useModalStore = create((set) => {
  isOpen: false;
  type: null;
  content: null;
  openModal: (type: any, content: any) => set({ isOpen: true, type, content });
  closeModal: () => set({ isOpen: false, content: null, type: null });
});
