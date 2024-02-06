import React, { useEffect } from 'react';
import { usePreventScroll } from 'src/hooks/usePreventScroll';
import { useModalStore } from 'src/zustand/useModalStore';
import styled from 'styled-components';

const Modal = () => {
  const closeModal = useModalStore((state) => state.closeModal);
  const handleModalClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
  };
  usePreventScroll();
  return (
    <Backdrop onClick={closeModal}>
      <ModalContainer onClick={handleModalClick}>
        modal <div onClick={closeModal}>모달창 닫기</div>
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;

const Backdrop = styled.div`
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  z-index: 1;
`;

const ModalContainer = styled.div`
  width: 400px;
  height: 400px;
  background-color: #fff;
  z-index: 2;
`;
