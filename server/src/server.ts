import express from "express";
import router from "./routes/indexRouter"
import morgan from "morgan";

const server = express();

server.use(express.json())
server.use(morgan("dev"))

server.use(router)

export default server;