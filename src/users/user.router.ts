import { Hono } from "hono";
import { deleteUsersData, getAllUsersData, getOneUserData, InsertUsersData, updateUsersData } from "./user.controller";

export const usersRouter = new Hono();

usersRouter.get("/", getAllUsersData); // Changed from "/users" to "/" to match the route registration
usersRouter.get("/:id", getOneUserData);
usersRouter.delete("/:id", deleteUsersData);
usersRouter.post("/", InsertUsersData);
usersRouter.put("/:id", updateUsersData);
