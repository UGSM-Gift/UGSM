import React from 'react';
import { useNavigate } from 'react-router-dom';
import Back from 'src/assets/icons/BackIcon.svg';
import styled from 'styled-components';

const Button = styled.button`
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
    <Button onClick={step === 1 ? handleHomeClick : onClick}>
      <Back />
    </Button>
  );
};

export default PreviousButton;
