export type SocialLoginType = {
  icon: React.ReactNode;
  socialLogin: string;
  color: string;
  $variant: 'primary' | 'disabled' | 'outline' | 'ghost';
  style?: React.CSSProperties;
};

export type SocialLogin = {
  link: string;
  platform: string;
  icon: JSX.Element;
  $variant: 'primary' | 'disabled' | 'outline' | 'ghost';
  color: string;
  style?: React.CSSProperties;
};
