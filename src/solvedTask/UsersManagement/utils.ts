import { UserData } from "./interface";

export const hasUserAlreadyFetched = (users: UserData[], userId: number) => {
    return !!users.filter(user => user.id === userId)[0];
}
