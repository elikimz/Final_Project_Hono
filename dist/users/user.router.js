"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const hono_1 = require("hono");
const user_controller_1 = require("./user.controller");
exports.usersRouter = new hono_1.Hono();
exports.usersRouter.get("/users", user_controller_1.getAllUsersData);
exports.usersRouter.get("/users/:id", user_controller_1.getOneUserData);
exports.usersRouter.delete("/users/:id", user_controller_1.deleteUsersData);
exports.usersRouter.post("/users", user_controller_1.InsertUsersData);
exports.usersRouter.put("/users/:id", user_controller_1.updateUsersData);
