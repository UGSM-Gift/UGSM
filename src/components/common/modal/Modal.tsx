import React, { useEffect } from 'react';
import { usePreventScroll } from 'src/hooks/usePreventScroll';
import { useModalStore } from 'src/zustand/useModalStore';
import styled, { css } from 'styled-components';

type IsModalContainerProps = {
  type?: string;
};

const Modal = ({ type }: { type?: string }) => {
  const closeModal = useModalStore((state) => state.closeModal);
  const handleModalClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
  };
  usePreventScroll();
  return (
    <Backdrop onClick={closeModal}>
      <ModalContainer type={type} onClick={handleModalClick}>
        modal <div onClick={closeModal}>모달창 닫기</div>
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;

const modalStyleByType = (type?: string) => {
  switch (type) {
    case 'card':
      return css`
        width: 500px;
        height: 500px;
      `;
    case 'slide':
      return css`
        width: 100vw;
        height: 500px;
      `;
    case 'full':
      return css`
        width: 100vw;
        height: 100vh;
      `;
  }
};

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

const ModalContainer = styled.div<IsModalContainerProps>`
  ${(props) => modalStyleByType(props.type)}
  background-color: #fff;
  z-index: 2;
`;
