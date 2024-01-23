export const colors = {
  gray: {
    10: '#f2f4f8',
    20: '#dde1e6',
    30: '#c1c7cd',
    40: '#a2a9b0',
    50: '#878d96',
    60: '#697077',
    70: '#4d5358',
    80: '#343a3f',
    90: '#21272a',
    100: '#121619',
  },
  primary: {
    50: '#FFE4EE',
    100: '#FEBAD4',
    200: '#FF8CB7',
    300: '#FF599A',
    400: '#FF2882',
    500: '#FF0069',
    600: '#EE0067',
    700: '#D70062',
    800: '#C2005F',
    900: '#9B0059',
  },
  secondary: {
    50: '#DEF1FE',
    100: '#B0DBFD',
    200: '#7EC6FC',
    300: '#4BB0FB',
    400: '#219FFB',
    500: '#0090FA',
    600: '#0081F1',
    700: '#006EDB',
    800: '#0B5DC6',
    900: '#1440A5',
  },
  sub: {
    50: '#E1E2EA',
    100: '#B6B8CC',
    200: '#8A8EAB',
    300: '#62678C',
    400: '#484C78',
    500: '#313365',
    600: '#2C2E5D',
    700: '#262753',
    800: '#201F48',
    900: '#171434',
  },
  // 다른 컬러들
  primaryColor: '#003D87',
  secondaryColor: '#0F62FE',
  subColor: '#A6C8FF',
  whiteColor: '#ffffff',
  errorColor: '#DA1E28',
  warningColor: '#DA1E28',
  successColor: '#DA1E28',
  overlayColor: '#121619 / 50%',
  white: '#fff',
  black: '#000',
  disable: '#F2F4F5',
};

// import React, { ForwardedRef, InputHTMLAttributes, ReactElement, ReactNode, useId } from 'react';
// import { Children, forwardRef } from 'react';
// import { css, styled } from 'styled-components';
// import type { CSSProp } from 'styled-components';
// import Typography from './Typography';
// import { colors } from 'src/styles/colors';
// import IconBtnWrapper from './IconBtnWrapper';

// type InputProps = {
//   label?: ReactNode;
//   children: ReactElement;
//   bottomText?: string;
//   errorMessage?: string;
//   successMessage?: string;
//   type?: string;
// };

// const Input = ({
//   label,
//   children,
//   bottomText,
//   successMessage = '확인되었습니다',
//   errorMessage = '다시 확인해주세요',
//   type = 'text',
//   ...props
// }: InputProps) => {
//   const child =
//     Children.only<ReactElement<{ error?: boolean; success?: boolean; id?: string }>>(children);
//   const id = useId();
//   const getStatus = (prop: boolean | undefined) => prop ?? false;
//   const isError = getStatus(child.props.error);
//   const isSuccess = getStatus(child.props.success);
//   const shouldRenderBottomText = !(isSuccess || isError) && bottomText !== null;

//   const renderChild = (child: ReactElement) =>
//     React.cloneElement(child, {
//       id,
//       'data-type': type,
//       ...child.props,
//     });

//   return (
//     <Layout {...props}>
//       {label && (
//         <Typography $variant='subtitle2'>
//           <Label>{label}</Label>
//         </Typography>
//       )}
//       {React.Children.map(children, renderChild)}
//       {isSuccess && <StyledBottomText $success={isSuccess}>{successMessage}</StyledBottomText>}
//       {isError && <StyledBottomText $error={isError}>{errorMessage}</StyledBottomText>}
//       {shouldRenderBottomText && <StyledBottomText>{bottomText}</StyledBottomText>}
//     </Layout>
//   );
// };

// export default Input;

// type StyledInputProps = {
//   $success?: boolean;
//   $error?: boolean;
//   $style?: CSSProp;
//   $iconStyle?: CSSProp;
//   icon?: React.ReactNode;
//   timer?: number;
// } & InputHTMLAttributes<HTMLInputElement>;

// const renderInput = (
//   { $success, $error, icon, $style, $iconStyle, ...props }: StyledInputProps,
//   ref: ForwardedRef<HTMLInputElement>
// ) => <StyledInput ref={ref} $error={$error} $success={$success} $style={$style} {...props} />;

// // text input
// Input.TextField = forwardRef((props: StyledInputProps, ref: ForwardedRef<HTMLInputElement>) => {
//   return renderInput(props, ref);
// });

// // txt + content  input
// Input.TextInteractiveField = forwardRef(
//   (
//     { $iconStyle, icon, onClick, timer, ...props }: StyledInputProps,
//     ref: ForwardedRef<HTMLInputElement>
//   ) => {
//     return (
//       <InputWithIcon>
//         {renderInput(props, ref)}
//         <ContentBox>
//           {timer && timer > 0 ? (
//             <TimeBox>
//               <Typography $variant='caption1'>{`0:${timer.toString().padStart(2, '0')}`}</Typography>{' '}
//             </TimeBox>
//           ) : null}
//           {icon && <IconBtnWrapper $iconStyle={$iconStyle}>{icon}</IconBtnWrapper>}
//         </ContentBox>
//       </InputWithIcon>
//     );
//   }
// );

// // dateField
// Input.DateField = (props: StyledInputProps, ref: ForwardedRef<HTMLInputElement>) => {
//   return <DatePickerWrapper>{renderInput(props, ref)}</DatePickerWrapper>;
// };

// const Layout = styled.div`
//   width: 100%;
// `;
// const BottomTextStyle = ({ $error, $success }: { $error?: boolean; $success?: boolean }) => css`
//   color: ${$error ? colors.errorColor : $success ? colors.successColor : colors.gray[20]};
// `;

// const StyledBottomText = styled.p<{ $error?: boolean; $success?: boolean }>`
//   margin-top: 10px;
//   font-size: 13px;
//   font-weight: 400;
//   color: ${colors.gray[40]};
//   ${BottomTextStyle}
// `;

// const ContentBox = styled.div`
//   position: absolute;
//   top: 50%;
//   right: 5px;
//   transform: translateY(-50%);
// `;

// const Label = styled.div`
//   margin-bottom: 10px;
// `;

// const TimeBox = styled.div`
//   margin-right: 10px;
// `;

// const InputWithIcon = styled.div`
//   position: relative;
// `;

// const DatePickerWrapper = styled.div``;

// const applyStatusStyle = ({ $error, $success }: { $error?: boolean; $success?: boolean }) => css`
//   border: 1px solid ${$error ? colors.errorColor : $success ? colors.successColor : colors.gray[20]};
// `;

// const StyledInput = styled.input<Omit<StyledInputProps, 'icon' | 'timer' | 'onClick'>>`
//   &::placeholder {
//     color: ${colors.gray[40]};
//   }
//   &:disabled {
//     background-color: ${colors.disable};
//   }
//   width: 100%;
//   padding: 20px 16px;
//   font-size: 15px;
//   border-radius: 8px;
//   border: 1px solid ${colors.gray[20]};

//   ${applyStatusStyle}

//   ${({ $style }) => css`
//     ${$style}
//   `};
//   ${({ $iconStyle }) => css`
//     ${$iconStyle}
//   `};
// `;
