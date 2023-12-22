export type UserData = {
  nickname: string;
  birth: string;
  gender: string;
};

export interface UserDataProps {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}
