export type UserData = {
  birthdate: string;
  gender: string;
  name: string;
  nickname: string;
  mobile: string;
  profileImgFile: string | null;
};

export type UserProfile = {
  nickname: string;
  profileImgFile: string | null;
  birthdata: string;
};

export type Anniversary = {
  children: string;
  birthdata: boolean;
  anniversaryCount?: number;
};
