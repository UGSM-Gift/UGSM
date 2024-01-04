import { ReactNode } from 'react';
import { colors } from 'src/styles/colors';
import styled from 'styled-components';

interface IconBtnWrapperProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (value?: any) => void;
  disabled?: boolean;
}

const IconBtnWrapper = ({ children, type = 'button', onClick, ...rest }: IconBtnWrapperProps) => {
  return (
    <Button type={type} onClick={onClick} {...rest}>
      {children}
    </Button>
  );
};

export default IconBtnWrapper;

const Button = styled.button`
  background-color: ${colors.white};
`;
