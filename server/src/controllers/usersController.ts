import { Request, Response } from "express"
import { createUserService, getUsersService, deleteUserService, getUserByIdService } from "../services/usersService"
import IUser from "../interfaces/IUser";

export const createUser = async (req: Request, res: Response) => {
    const { name, email, birthdate, nDni, credentialsId } = req.body;
    const newUser: IUser = await createUserService({ name, email, birthdate, nDni, credentialsId })
    res.status(201).json(newUser);
}

export const getUsers = async (req: Request, res: Response) => {
    const users: IUser[] = await getUsersService();
    res.status(200).json(users)
}

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.body;
    await getUserByIdService(id);
    res.status(200).json({message: "get user by id"})
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.body;
    await deleteUserService(id);
    res.status(200).json({ message: "Eliminado correctamente" })
}