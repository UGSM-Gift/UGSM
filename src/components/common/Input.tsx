import React, { ForwardedRef, InputHTMLAttributes, ReactElement, ReactNode, useId } from 'react';
import { Children, forwardRef } from 'react';
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
  type?: string;
};

const Input = ({
  label,
  children,
  bottomText,
  successMessage = '확인되었습니다',
  errorMessage = '다시 확인해주세요',
  type = 'text',

  ...props
}: InputProps) => {
  const child =
    Children.only<ReactElement<{ error?: boolean; success?: boolean; id?: string }>>(children);
  const id = useId();
  const getStatus = (prop: boolean | undefined) => prop ?? false;
  const isError = getStatus(child.props.error);
  const isSuccess = getStatus(child.props.success);
  const shouldRenderBottomText = !(isSuccess || isError) && bottomText !== null;

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

type StyledInputProps = {
  $success?: boolean;
  $error?: boolean;
  $style?: CSSProp;
  $iconStyle?: CSSProp;
  icon?: React.ReactNode;
  timer?: number;
  onClick?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

const renderInput = (
  { $success, $error, $style, ...props }: StyledInputProps,
  ref: ForwardedRef<HTMLInputElement>
) => <StyledInput ref={ref} $error={$error} $success={$success} $style={$style} {...props} />;

// text
Input.TextField = forwardRef<HTMLInputElement, StyledInputProps>((props, ref) => {
  return renderInput(props, ref);
});

// text + icon
Input.IconTextField = forwardRef<HTMLInputElement, StyledInputProps>(
  ({ onClick, icon, $iconStyle, ...props }, ref) => {
    return (
      <InputWithIcon>
        {renderInput(props, ref)}
        <ContentBox>
          {icon && (
            <IconBtnWrapper onClick={onClick} $iconStyle={$iconStyle}>
              {icon}
            </IconBtnWrapper>
          )}
        </ContentBox>
      </InputWithIcon>
    );
  }
);

// text + timer
Input.TimerTextField = forwardRef<HTMLInputElement, StyledInputProps>(({ timer, ...props }, ref) => {
  return (
    <InputWithIcon>
      {renderInput(props, ref)}
      <ContentBox>
        {timer && timer > 0 ? (
          <TimeBox>
            <Typography $variant='caption1'>{`0:${timer.toString().padStart(2, '0')}`}</Typography>{' '}
          </TimeBox>
        ) : null}
      </ContentBox>
    </InputWithIcon>
  );
});

const Layout = styled.div`
  width: 100%;
`;
const BottomTextStyle = ({ $error, $success }: { $error?: boolean; $success?: boolean }) => css`
  color: ${$error ? colors.errorColor : $success ? colors.successColor : colors.gray[20]};
`;

const StyledBottomText = styled.p<{ $error?: boolean; $success?: boolean }>`
  margin-top: 10px;
  font-size: 13px;
  font-weight: 400;
  color: ${colors.gray[40]};
  ${BottomTextStyle}
`;

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

const applyStatusStyle = ({ $error, $success }: { $error?: boolean; $success?: boolean }) => css`
  border: 1px solid ${$error ? colors.errorColor : $success ? colors.successColor : colors.gray[20]};
`;

const StyledInput = styled.input<Omit<StyledInputProps, 'icon' | 'timer' | 'onClick'>>`
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

  ${applyStatusStyle}

  ${({ $style }) => css`
    ${$style}
  `};
`;
