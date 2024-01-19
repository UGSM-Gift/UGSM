import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { CSSProp } from 'styled-components/dist/types';

interface BtnWrapperProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  $iconStyle?: CSSProp;
}

const IconBtnWrapper = ({
  children,
  type = 'button',
  onClick,
  $iconStyle,
  ...rest
}: BtnWrapperProps) => {
  return (
    <Button type={type} onClick={onClick} $iconStyle={$iconStyle} {...rest}>
      {children}
    </Button>
  );
};

export default IconBtnWrapper;

const Button = styled.button<{ $iconStyle: CSSProp }>`
  ${({ $iconStyle }) => css`
    ${$iconStyle}
  `};
  &:hover {
    border: none;
  }
  background-color: transparent;
`;
