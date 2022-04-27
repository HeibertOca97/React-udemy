export interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UserDataAPI {
  data: UserData;
}

export interface UserManagementProps {}

export interface UserManagementState {
  users: UserData[];
  currentUserId: number;
}
