export type UserData = {
  birth: string;
  gender: string;
  name: string;
  nickname: string;
  mobile: string;
  userProfileUrl: string;
};

export type UserProfile = {
  nickname: string;
  userProfileUrl: string;
  birth: string;
};

export type Anniversary = {
  children: string;
  birth: boolean;
  anniversaryCount?: number;
};
