import React, { ForwardedRef, InputHTMLAttributes, ReactElement, ReactNode, useId } from 'react';
import { forwardRef } from 'react';
import { css, styled } from 'styled-components';
import type { CSSProp } from 'styled-components';
import Typography from './Typography';
import { colors } from 'src/styles/colors';
import IconBtnWrapper from './IconBtnWrapper';

const aertMessages: { [key: string]: string } = {
  default: '* 이름 외 2~16자의 한글, 영문, 숫자만 사용해주세요',
  regexError: '* 이름 외 2~16자의 한글, 영문, 숫자만 사용해주세요',
  duplicationError: '사용중인 닉네임입니다. 다른 닉네임을 사용해주세요',
  phoneAuth: '* 인증번호가 다릅니다. 다시 입력해주세요',
};

type InputProps = {
  label?: ReactNode;
  children: ReactElement;
  type?: string;
  error?: string;
};

const Input = ({
  label,
  children,
  error,
  type = 'text',

  ...props
}: InputProps) => {
  const id = useId();
  const isError = Boolean(error);

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

      {isError ? (
        <StyledBottomText $error={error === 'default' ? false : true}>
          {aertMessages[error || 'default']}
        </StyledBottomText>
      ) : null}
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
  { $success = false, $error = false, $style, ...props }: StyledInputProps,
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

const BottomTextStyle = ({ $error }: { $error?: boolean }) => `
  color: ${$error ? colors.errorColor : colors.gray[40]};
`;

const StyledBottomText = styled.p<{ $error?: boolean }>`
  margin-top: 10px;
  font-size: 13px;
  font-weight: 400;
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

const applyStatusStyle = ({ $error }: { $error?: boolean }) => css`
  border: 1px solid ${$error ? colors.errorColor : colors.gray[20]};
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
