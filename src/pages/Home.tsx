import Modal from '@components/common/modal/Modal';
import YearWheel from '@components/datepicker/YearWheel';
import React, { useEffect } from 'react';
import { useModalStore } from 'src/zustand/useModalStore';
import BasicLayout from './layout/BasicLayout';

const Home = () => {
  const { isOpen, content, openModal, closeModal } = useModalStore((state) => ({
    isOpen: state.isOpen,
    content: state.content,
    closeModal: state.closeModal,
    openModal: state.openModal,
  }));
  // const openModal = useModalStore((state) => state.openModal);
  // const closeModal = useModalStore((state) => state.closeModal);

  return (
    <BasicLayout>
      <div onClick={() => openModal('card', <Modal />)}>모달창 열기</div>
      {isOpen && <Modal type={'card'} />}
    </BasicLayout>
  );
};

export default Home;
