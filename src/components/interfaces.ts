export interface IButtonProps{
  type?: 'primary' | 'default';
}


export interface ICounterManagementProps{
  ownerName: string;
}

export interface ICounterManagementState{
  counter: number;
  userData: IUserData;
  userID: Array<IUserData>;
}

interface IUserData{
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IUserDataAPI{
  data: IUserData; 
}

