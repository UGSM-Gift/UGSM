export type UserData = {
  name: string;
  nickname: string;
  birth: string;
  gender: string;
  phoneNumber: string;
};

export type UserProfileData = {
  nickname: string;
  birth: string;
  gender: string;
};

export interface UserDataProps {
  userData: UserProfileData;
  setUserData: React.Dispatch<React.SetStateAction<UserProfileData>>;
}
