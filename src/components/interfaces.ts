export interface IButtonProps{
  type?: 'primary' | 'default';
}


export interface ICounterManagementProps{
  ownerName: string;
}

export interface ICounterManagementState{
  counter: number;
  users: string[];
}


