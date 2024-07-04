import IUserDto from "../dto/UserDto";
import IUser from "../interfaces/IUser"

let users: IUser[] = [];

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

export const getUserByIdService = async (id: number) => {
    users = users.filter((user: IUser) => {
        return user.id === id;
    })
}

export const deleteUserService = async (id: number): Promise<void> => {
    users = users.filter((user: IUser) => {
        return user.id != id;
    })
}