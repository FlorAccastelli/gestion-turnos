import { Router } from "express";
import { createAppointment, getAppointments, getAppointmentsById, cancelAppointment } from "../controllers/appointmentController";

const appointments: Router = Router();

appointments.get("/", getAppointments);

appointments.get("/:id", getAppointmentsById);

appointments.post("/schedule", createAppointment);

appointments.put("/cancel", cancelAppointment)

export default appointments;