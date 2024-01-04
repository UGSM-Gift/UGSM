import { ReactNode } from 'react';
import { colors } from 'src/styles/colors';
import styled from 'styled-components';

interface BtnWrapperProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (value?: any) => void;
  disabled?: boolean;
}

const BtnWrapper = ({ children, type = 'button', onClick, ...rest }: BtnWrapperProps) => {
  return (
    <Button type={type} onClick={onClick} {...rest}>
      {children}
    </Button>
  );
};

export default BtnWrapper;

const Button = styled.button`
  background-color: ${colors.white};
`;
