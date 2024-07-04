import { Router } from "express";
import { createUser, getUsers, deleteUser, getUserById } from "../controllers/usersController";
import auth from "../middlewares/auth";

const users: Router = Router();

users.post("/register", createUser)

users.get("/", auth, getUsers)

users.get("/:id", getUserById)

users.delete("/", deleteUser)

export default users;