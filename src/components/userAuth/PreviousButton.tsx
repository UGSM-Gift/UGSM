import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Back } from '@assets/icons/backIcon.svg';
import styled from 'styled-components';
import IconBtnWrapper from '@components/common/IconBtnWrapper';

const ButtonBox = styled.div`
  margin-bottom: 30px;
  font-size: 2rem;
  background-color: #fff;
`;

interface PrevioustButtonProps {
  onClick: () => void;
  step: number;
}

const PreviousButton: React.FC<PrevioustButtonProps> = ({ onClick, step }) => {
  const handleHomeClick = () => {
    navigate('/login');
  };

  const navigate = useNavigate();

  return (
    <ButtonBox>
      <IconBtnWrapper onClick={step === 1 ? handleHomeClick : onClick}>
        <Back />
      </IconBtnWrapper>
    </ButtonBox>
  );
};

export default PreviousButton;
