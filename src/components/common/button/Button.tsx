import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { css, styled } from 'styled-components';
import type { CSSProp, RuleSet } from 'styled-components';

import { Radius, Size } from 'src/types/style';
import { RADIUS, SIZE } from 'src/constants/style';
import { colors } from 'src/styles/colors';

type Include<T, U> = T extends U ? T : never;

type ButtonSizeType = Include<Size, 'small' | 'medium' | 'large'>;
type ButtonRadiusType = Include<Radius, 'small' | 'medium' | 'large'>;

const SIZE_TYPE: Record<ButtonSizeType, RuleSet<object>> = {
  small: css`
    padding: 16px;
    font-size: ${SIZE.small};
    font-weight: 500;
    line-height: 20px;
  `,

  medium: css`
    padding: 16px;
    font-size: ${SIZE.medium};
    font-weight: 600;
    line-height: 24px;
  `,

  large: css`
    /*현재 미디움이랑 동일 */
  `,
};

const RADIUS_TYPE: Record<ButtonRadiusType, RuleSet<object>> = {
  small: css`
    border-radius: ${RADIUS.small};
  `,

  medium: css`
    border-radius: ${RADIUS.medium};
  `,

  large: css`
    border-radius: ${RADIUS.large};
  `,
};

const VARIANT_TYPE = {
  primary: css`
    background-color: ${colors.primary[400]};
    color: ${colors.white};
  `,

  disabled: css`
    background-color: ${colors.gray[20]};
    color: ${colors.white};
  `,

  outline: css`
    color: ${colors.primary[400]};
    border: 1px solid ${colors.primary[400]};
  `,
  grayOutline: css`
    color: ${colors.gray[60]};
    border: 1px solid ${colors.gray[20]};
  `,

  ghost: css`
    color: ${colors.gray[30]};
    border: 1px solid ${colors.gray[30]};
  `,
  lightPrimary: css`
    color: ${colors.primary[800]};
    background-color: rgba(255, 228, 238, 0.4);
    border: 1px solid ${colors.primary[100]};
  `,
  lightGhost: css`
    color: ${colors.gray[50]};
    background-color: ${colors.white};
    border: 1px solid ${colors.gray[50]};
  `,

  lightDisabled: css`
    color: ${colors.gray[10]};
    border: 1px solid ${colors.gray[30]};
  `,
} as const;

type Props = {
  $variant: keyof typeof VARIANT_TYPE;
  size?: ButtonSizeType;
  radius?: ButtonRadiusType;
  $block?: boolean;
  $style?: CSSProp;
};

const Button = ({
  $variant,
  children,
  onClick,
  disabled,
  size = 'medium',
  radius = 'small',
  $block = true,
  $style,
  ...props
}: PropsWithChildren<Props> & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton
      onClick={onClick}
      $variant={$variant}
      size={size}
      radius={radius}
      disabled={disabled}
      $block={$block}
      $style={$style}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<Props>`
  background-color: transparent;
  position: relative;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
  /* &:hover {
    border: none;
  } */
  ${({ $block, $style, size = 'medium', $variant, radius = 'small' }) => css`
    ${VARIANT_TYPE[$variant]}
    ${SIZE_TYPE[size]}
    ${RADIUS_TYPE[radius]}
    width: ${$block ? '100%' : 'fit-content'};

    ${$style}
  `}
`;
