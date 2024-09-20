"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsRouter = exports.usersRouter = void 0;
const hono_1 = require("hono");
const Payments__controller_1 = require("./Payments .controller");
exports.usersRouter = new hono_1.Hono();
exports.PaymentsRouter = new hono_1.Hono();
exports.PaymentsRouter.get("/Payments", Payments__controller_1.getAllPaymentsData);
exports.PaymentsRouter.get("/Payments/:id", Payments__controller_1.getOnePaymentsData);
exports.PaymentsRouter.delete("/Payments/:id", Payments__controller_1.deletePaymentsData);
exports.PaymentsRouter.post("/Payments", Payments__controller_1.insertPaymentsData);
exports.PaymentsRouter.put("/Payments/:id", Payments__controller_1.updatePaymentsData);
exports.PaymentsRouter.post('/checkout-session', Payments__controller_1.createCheckoutSessionController);
