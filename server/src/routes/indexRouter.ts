import { Router } from "express";
import users from "./usersRouter";
import appointments from "./appointmentRouter";

const router: Router = Router();

router.use("/users", users)
router.use("/appointments", appointments)

export default router;