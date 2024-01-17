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
  type?: string;
};

const Input = ({
  label,
  children,
  bottomText,
  successMessage = '확인되었습니다',
  errorMessage = '다시 확인해주세요',
  $style,
  type = 'text',
  ...props
}: PropsWithChildren<InputProps> & HTMLAttributes<HTMLDivElement>) => {
  const child =
    Children.only<ReactElement<{ error?: boolean; success?: boolean; id?: string }>>(children);
  const id = useId();
  const isError: boolean = child.props.error ?? false;
  const isSuccess: boolean = child.props.success ?? false;
  const shouldRenderBottomText = !isSuccess && !isError && bottomText !== null;

  const renderChild = (child: ReactElement) =>
    React.cloneElement(child, {
      id,
      'data-type': type,
      ...child.props,
    });

  return (
    <Layout {...props}>
      {label && (
        <Typography $variant='subtitle2'>
          <Label>{label}</Label>
        </Typography>
      )}
      {React.Children.map(children, renderChild)}
      {isSuccess && <StyledBottomText $success={isSuccess}>{successMessage}</StyledBottomText>}
      {isError && <StyledBottomText $error={isError}>{errorMessage}</StyledBottomText>}
      {shouldRenderBottomText && <StyledBottomText>{bottomText}</StyledBottomText>}
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
  color: ${colors.gray[40]};
  ${({ $error, $success }) => css`
    // 에러 상태 스타일
    ${$error &&
    css`
      color: ${colors.errorColor};
    `}

    // 성공 상태 스타일
    ${$success &&
    css`
      color: ${colors.successColor};
    `}
  `};
`;

type StyledInputProps = {
  success?: boolean;
  error?: boolean;
  $style?: CSSProp;
  $iconStyle?: CSSProp;
  icon?: React.ReactNode;
  timer?: number;
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

// txt + content  input
Input.TextInteractiveField = forwardRef(
  (
    { $iconStyle, icon, onClick, timer, ...props }: StyledInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <InputWithIcon>
        {renderInput(props, ref)}
        <ContentBox>
          {timer && timer > 0 ? (
            <TimeBox>
              <Typography $variant='caption1'>{`0:${timer.toString().padStart(2, '0')}`}</Typography>{' '}
            </TimeBox>
          ) : null}

          {icon && (
            <IconBtnWrapper $iconStyle={$iconStyle} onClick={onClick}>
              {icon}
            </IconBtnWrapper>
          )}
        </ContentBox>
      </InputWithIcon>
    );
  }
);

// dateField
Input.DateField = (props: StyledInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return <DatePickerWrapper>{renderInput(props, ref)}</DatePickerWrapper>;
};

const ContentBox = styled.div`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
`;

const Label = styled.div`
  margin-bottom: 10px;
`;

const TimeBox = styled.div`
  margin-right: 10px;
`;

const InputWithIcon = styled.div`
  position: relative;
`;

const DatePickerWrapper = styled.div``;

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
