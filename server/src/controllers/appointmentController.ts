import { Request, Response } from "express"

export const getAppointments = async (req: Request, res: Response) => {
    res.status(200).json({ message: "getAppointments" })
}

export const getAppointmentsById = async (req: Request, res: Response) => {
    res.status(200).json({ massage: "getAppointmentsById" })
}

export const createAppointment = async (req: Request, res: Response) => {
    res.status(200).json({ message: "createAppointment"})
}

export const cancelAppointment = async (req: Request, res: Response) => {
    res.status(200).json({ message: "cancel appointment"})
}