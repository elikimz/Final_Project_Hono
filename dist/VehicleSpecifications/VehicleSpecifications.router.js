"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicleSpecificationsRouter = exports.usersRouter = void 0;
const hono_1 = require("hono");
const VehicleSpecifications_controller_1 = require("./VehicleSpecifications.controller");
exports.usersRouter = new hono_1.Hono();
exports.vehicleSpecificationsRouter = new hono_1.Hono();
exports.vehicleSpecificationsRouter.get("/vehicalspecification", VehicleSpecifications_controller_1.getAllvehicalspecificationData);
exports.vehicleSpecificationsRouter.get("/vehicalspecification/:id", VehicleSpecifications_controller_1.getOnevehicalspecificationData);
exports.vehicleSpecificationsRouter.delete("/vehicalspecification/:id", VehicleSpecifications_controller_1.deleteAllvehicalspecificationData);
exports.vehicleSpecificationsRouter.post("/vehicalspecification", VehicleSpecifications_controller_1.InsertvehicalspecificationData);
exports.vehicleSpecificationsRouter.put("/vehicalspecification/:id", VehicleSpecifications_controller_1.updatevehicalspecificationData);