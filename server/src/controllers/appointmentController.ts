import { Request, Response } from "express"

export const getAppointments = (req: Request, res: Response) => {
    res.status(200).json({ message: "getAppointments" })
}

export const getAppointmentsById = (req: Request, res: Response) => {
    res.status(200).json({ massage: "getAppointmentsById" })
}

export const createAppointment = (req: Request, res: Response) => {
    res.status(200).json({ message: "createAppointment"})
}