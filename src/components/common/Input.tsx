import React, {
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
import IconBtnWrapper from './IconBtnWrapper';

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
      {label && <Typography variant='subtitle2'>{label}</Typography>}
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

type StyledInputProps = {
  success?: boolean;
  error?: boolean;
  $style?: CSSProp;
  $iconStyle?: CSSProp;
  icon?: React.ReactNode;
  onClick?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

const renderInput = (
  { success, error, icon, $style, $iconStyle, ...props }: StyledInputProps,
  ref: ForwardedRef<HTMLInputElement>
) => <StyledInput ref={ref} error={error} success={success} $style={$style} {...props} />;

// text input
Input.TextField = forwardRef((props: StyledInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return renderInput(props, ref);
});
// txt + icon  input
Input.TextIconField = forwardRef(
  ({ $iconStyle, icon, onClick, ...props }: StyledInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <InputWithIcon>
        {renderInput(props, ref)}
        <IconBox>
          {' '}
          {icon && (
            <IconBtnWrapper $iconStyle={$iconStyle} onClick={onClick}>
              {icon}
            </IconBtnWrapper>
          )}
        </IconBox>
      </InputWithIcon>
    );
  }
);

const IconBox = styled.div`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
`;

const InputWithIcon = styled.div`
  position: relative;
`;

const StyledInput = styled.input<StyledInputProps>`
  &::placeholder {
    color: ${colors.gray[40]};
  }
  &:disabled {
    background-color: ${colors.disable};
  }
  width: 100%;
  padding: 20px 16px;
  font-size: 15px;
  border-radius: 8px;
  border: 1px solid ${colors.gray[20]};

  ${({ error, success }) => css`
    // 에러 상태 스타일
    ${error &&
    css`
      border: 1px solid ${colors.errorColor};
    `}

    // 성공 상태 스타일
    ${success &&
    css`
      border: 1px solid ${colors.successColor};
    `}
  `};

  ${({ $style }) => css`
    ${$style}
  `};
  ${({ $iconStyle }) => css`
    ${$iconStyle}
  `};
`;
