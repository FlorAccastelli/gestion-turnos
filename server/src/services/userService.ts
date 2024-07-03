import IUserDto from "../dto/UserDto";
import IUser from "../interfaces/IUser"

const users: IUser[] = [];

let id: number = 1;

export const createUserService = async (userData: IUserDto): Promise<IUser> => {
    const newUser: IUser = {
        id,
        name: userData.name,
        email: userData.email,
        active: userData.active
    }
    users.push(newUser);
    id++;
    return newUser;
}

export const getUsersService = async (): Promise<IUser[]> => {
    return users;
}

export const deleteUserService = async () => {}