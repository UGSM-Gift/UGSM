import { ReactNode } from 'react';
import { colors } from 'src/styles/colors';
import styled from 'styled-components';

interface IconWrapperProps {
  children: ReactNode;
  onClick?: () => void;
}

const IconWrapper = ({ children, onClick, ...rest }: IconWrapperProps) => {
  return (
    <Icon onClick={onClick} {...rest}>
      {children}
    </Icon>
  );
};

export default IconWrapper;

const Icon = styled.button`
  background-color: ${colors.white};
`;
