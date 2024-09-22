"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSupportTicketsRouter = exports.usersRouter = void 0;
const hono_1 = require("hono");
const CustomerSupportTickets_controller_1 = require("./CustomerSupportTickets.controller");
exports.usersRouter = new hono_1.Hono();
exports.CustomerSupportTicketsRouter = new hono_1.Hono();
exports.CustomerSupportTicketsRouter.get("/", CustomerSupportTickets_controller_1.getAllCustomerSupportTicketsData);
exports.CustomerSupportTicketsRouter.get("/:id", CustomerSupportTickets_controller_1.getOneCustomerSupportTicketsData);
exports.CustomerSupportTicketsRouter.delete("/:id", CustomerSupportTickets_controller_1.deleteCustomerSupportTicketsData);
exports.CustomerSupportTicketsRouter.post("/", CustomerSupportTickets_controller_1.InsertCustomerSupportTicketsData);
exports.CustomerSupportTicketsRouter.put("/:id", CustomerSupportTickets_controller_1.updateCustomerSupportTicketsData);
