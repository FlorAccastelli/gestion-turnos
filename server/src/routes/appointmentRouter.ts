import { Router } from "express";
import { createAppointment, getAppointments, getAppointmentsById } from "../controllers/appointmentController";

const appointments: Router = Router();

appointments.get("/", getAppointments);
appointments.get("/:id", getAppointmentsById)
appointments.post("/schedule", createAppointment)

//PUT /appoinment/cancel => Cancelar un turno

export default appointments;