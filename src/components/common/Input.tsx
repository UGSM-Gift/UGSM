import {
  ForwardedRef,
  HTMLAttributes,
  InputHTMLAttributes,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useId,
} from 'react';
import { Children, cloneElement, forwardRef } from 'react';
import { css, styled } from 'styled-components';
import type { CSSProp } from 'styled-components';

import Typography from './Typography';
import { colors } from 'src/styles/colors';

type InputProps = {
  label?: ReactNode;
  children: ReactElement;
  bottomText?: string;
  errorMessage?: string;
  successMessage?: string;
  $style?: CSSProp;
};

const Input = ({
  label,
  children,
  bottomText,
  successMessage = '확인',
  errorMessage = '잘못된 입력입니다.',
  $style,
  ...props
}: PropsWithChildren<InputProps> & HTMLAttributes<HTMLDivElement>) => {
  const child =
    Children.only<ReactElement<{ error?: boolean; success?: boolean; id?: string }>>(children);
  const id = useId();
  const isError: boolean = child.props.error ?? false;
  const isSuccess: boolean = child.props.success ?? false;

  return (
    <Layout {...props}>
      <Typography variant='subtitle2'>{label}</Typography>
      {cloneElement(child, { id, ...child.props })}
      {isSuccess && <StyledBottomText $success={true}>{successMessage}</StyledBottomText>}
      {isError && <StyledBottomText $error={true}>{errorMessage}</StyledBottomText>}
      {bottomText !== null && <StyledBottomText>{bottomText}</StyledBottomText>}
    </Layout>
  );
};

export default Input;

const Layout = styled.div`
  width: 100%;
`;

const StyledBottomText = styled.p<{ $error?: boolean; $success?: boolean }>`
  margin-top: 10px;
  font-size: 13px;
  font-weight: 400;

  ${({ $error }) => css`
    color: ${$error ? colors.warningColor : colors.gray[40]};
  `};
  ${({ $success }) => css`
    color: ${$success ? colors.successColor : colors.gray[40]};
  `};
`;

type TextFieldProps = {
  success?: boolean;
  error?: boolean;
  $style?: CSSProp;
} & InputHTMLAttributes<HTMLInputElement>;

Input.TextField = forwardRef(
  ({ success, error, $style, ...props }: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
    return <StyledInput ref={ref} $style={$style} {...props} />;
  }
);

type StyledInputProps = Pick<TextFieldProps, '$style'>;

const StyledInput = styled.input<StyledInputProps>`
  &:disabled {
    background-color: ${colors.disable};
  }
  width: 100%;
  padding: 20px 16px;
  font-size: 15px;
  border-radius: 8px;
  border: 1px solid ${colors.gray[20]};
  margin-top: 10px;

  ${({ $style }) => css`
    ${$style}
  `};
`;
