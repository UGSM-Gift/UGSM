import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
  type: string | null;
  content: React.ReactNode | boolean;
  openModal: (type: string, content: React.ReactNode) => void;
  closeModal: () => void;
}
export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  type: null,
  content: null,
  openModal: (type?: any, content?: any) =>
    set((state) => {
      console.log('Opening modal', state.isOpen); // 모달 열림 상태 로그
      return { ...state, isOpen: true, type, content };
    }),
  closeModal: () =>
    set((state) => {
      console.log('Closing modal', { isOpen: false }); // 모달 닫힘 상태 로그
      return { ...state, isOpen: false, content: null, type: null };
    }),
}));
