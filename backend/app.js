import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
export const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(cors());
import { userRouter } from "./routes/User.js";
app.use("/api/v1", userRouter);
