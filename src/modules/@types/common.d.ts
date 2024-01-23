export type UserData = {
  name: string;
  nickname: string;
  birth: string;
  gender: string;
  phoneNumber: string;
};

export type UserProfileData = {
  name: string;
  nickname: string;
  birth: string;
  gender: string;
  phone: string;
};

export interface UserDataProps {
  userData: UserProfileData;
  setUserData: React.Dispatch<React.SetStateAction<UserProfileData>>;
  onFocus?: (event: React.FocusEvent) => void;
  onBlur?: (event: React.FocusEvent) => void;
  isNicknameError?: boolean;
}
