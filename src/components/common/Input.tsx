import type {
  ForwardedRef,
  HTMLAttributes,
  InputHTMLAttributes,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from 'react';
import { Children, forwardRef, cloneElement } from 'react';
import { css, styled } from 'styled-components';
import type { CSSProp } from 'styled-components';

import { colors } from 'src/styles/colors';
import Typography from './Typography';
// input props
type InputProps = {
  label?: ReactNode;
  children: ReactElement;
  bottomText?: string;
  errorMessage?: string;
  $style?: CSSProp;
};
// input
const Input = ({
  label,
  children,
  bottomText,
  errorMessage = '잘못된 입력입니다.',
  $style,
  ...props
}: PropsWithChildren<InputProps> & HTMLAttributes<HTMLDivElement>) => {
  // children으로부터 단일 React 요소만 추출
  const child = Children.only<ReactElement<{ error?: boolean; id?: string }>>(children);
  // 자식 요소에서 에러 상태 확인
  const isError: boolean = child.props.error ?? false;

  return (
    <Layout {...props}>
      <Typography variant='subtitle2'>{label}</Typography>
      {cloneElement(child, { ...child.props })}
      {isError && <StyledBottomText $error={true}>{errorMessage}</StyledBottomText>}
      {bottomText !== null && <StyledBottomText>{bottomText}</StyledBottomText>}
    </Layout>
  );
};

export default Input;
// layout
const Layout = styled.div`
  width: 100%;
`;
// bottom
const StyledBottomText = styled.p<{ $error?: boolean }>`
  position: absolute;
  margin-top: 10px;
  font-size: 1.6rem;
  font-weight: 200;

  ${({ $error }) => css`
    color: ${$error ? colors.primary[600] : colors.gray[40]};
  `};
`;
// textfield props
type TextFieldProps = {
  error?: boolean;
  $style?: CSSProp;
} & InputHTMLAttributes<HTMLInputElement>;

Input.TextField = forwardRef(
  ({ error, $style, ...props }: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
    return <StyledInput ref={ref} $style={$style} {...props} />;
  }
);

type StyledInputProps = Pick<TextFieldProps, '$style'>;

const StyledInput = styled.input<StyledInputProps>`
  &:disabled {
    background-color: ${colors.gray[50]};
  }

  width: 100%;
  padding: 20px;

  border-radius: 7px;
  border: 1px solid ${colors.gray[20]};
  margin-top: 10px;

  ${({ $style, theme }) => css`
    background-color: ${theme.background};
    ${$style}
  `};
`;
