"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const hono_1 = require("hono");
const user_controller_1 = require("./user.controller");
exports.usersRouter = new hono_1.Hono();
exports.usersRouter.get("/", user_controller_1.getAllUsersData); // Changed from "/users" to "/" to match the route registration
exports.usersRouter.get("/:id", user_controller_1.getOneUserData);
exports.usersRouter.delete("/:id", user_controller_1.deleteUsersData);
exports.usersRouter.post("/", user_controller_1.InsertUsersData);
exports.usersRouter.put("/:id", user_controller_1.updateUsersData);
