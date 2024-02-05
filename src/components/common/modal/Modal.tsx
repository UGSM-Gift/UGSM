import React from 'react';
import { usePreventScroll } from 'src/hooks/usePreventScroll';
import { useModalStore } from 'src/zustand/useModalStore';
import styled from 'styled-components';
import Typography from '../Typography';

const Modal = (title: string, child: React.ReactNode, footerContent: string) => {
  usePreventScroll();
  return (
    <ModalContainer>
      <Header>
        <Typography $variant='title3'>{title}</Typography>
      </Header>
      <Content>{child}</Content>
      <Footer>{footerContent}</Footer>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div``;

const Header = styled.div``;

const Content = styled.div``;

const Footer = styled.div``;
