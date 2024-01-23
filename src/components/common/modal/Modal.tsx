import React from 'react';
import styled from 'styled-components';
import Typography from '../Typography';

const Modal = (title: string, content: React.ReactNode, footerContent: string) => {
  return (
    <ModalContainer>
      <Header>
        <Typography $variant='title3'>{title}</Typography>
      </Header>
      <Content>{content}</Content>
      <Footer>{footerContent}</Footer>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div``;

const Header = styled.div``;

const Content = styled.div``;

const Footer = styled.div``;
