import type { HTMLAttributes, PropsWithChildren } from 'react';
import { css, styled } from 'styled-components';
import type { CSSProp } from 'styled-components';
import { colors } from 'src/styles/colors';

type Props = {
  variant:
    | 'largetitle'
    | 'title1'
    | 'title2'
    | 'title3'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'button1'
    | 'button2'
    | 'caption1'
    | 'caption2';
  fontSize?: string;
  fontWeight?: string;
  color?: string;

  $style?: CSSProp;
} & HTMLAttributes<HTMLHeadingElement>;

const TAG_MAPPING = {
  largetitle: 'largetitle',
  title1: 'title1',
  title2: 'title2',
  title3: 'title3',
  subtitle1: 'subtitle1',
  subtitle2: 'subtitle2',
  body1: 'body1',
  body2: 'body2',
  button1: 'button1',
  button2: 'button2',
  caption1: 'caption1',
  caption2: 'caption2',
};

const FONT_STYLE = {
  fontSize: {
    largetitle: '32px',
    title1: '28px',
    title2: '22px',
    title3: '20px',
    subtitle1: '16px',
    subtitle2: '14px',
    body1: '16px',
    body2: '15px',
    button1: '16px',
    button2: '15px',
    caption1: '13px',
    caption2: '12px',
  },
  fontWeight: {
    largetitle: 600,
    title1: 600,
    title2: 500,
    title3: 500,
    subtitle1: 600,
    subtitle2: 600,
    body1: 400,
    body2: 400,
    button1: 600,
    button2: 500,
    caption1: 400,
    caption2: 400,
  },
  lineHeight: {
    largetitle: '110%',
    title1: '110%',
    title2: '110%',
    title3: '110%',
    subtitle1: '110%',
    subtitle2: '110%',
    body1: '110%',
    body2: '105%',
    button1: '24px', // 'line-height' 값이 'px' 단위일 수 있음
    button2: '20px',
    caption1: '110%',
    caption2: '110%',
  },
  letterSpacing: {
    largetitle: '0px',
    title1: '0px',
    title2: '0px',
    title3: '0px',
    subtitle1: '0px',
    subtitle2: '0px',
    body1: '0px',
    body2: '0px',
    button1: '0px',
    button2: '0px',
    caption1: '0px',
    caption2: '0px',
  },
} as const;
const Typography = ({
  variant,
  fontSize,
  fontWeight,
  color,
  $style,
  children,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <StyledTypography
      as={TAG_MAPPING[variant]}
      variant={variant}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      $style={$style}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

const StyledTypography = styled.div<Props>`
  white-space: pre-line;

  ${({ variant, fontSize, fontWeight, color, $style }) => css`
    font-size: ${fontSize || FONT_STYLE.fontSize[variant]};
    font-weight: ${fontWeight || FONT_STYLE.fontWeight[variant]};
    line-height: ${FONT_STYLE.lineHeight[variant]};
    letter-spacing: ${FONT_STYLE.letterSpacing[variant]};
    color: ${color || colors.black};

    ${$style};
  `};
`;

export default Typography;
