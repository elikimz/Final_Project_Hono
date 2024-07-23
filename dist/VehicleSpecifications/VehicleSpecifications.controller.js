"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatevehicalspecificationData = exports.InsertvehicalspecificationData = exports.deleteAllvehicalspecificationData = exports.getOnevehicalspecificationData = exports.getAllvehicalspecificationData = void 0;
const VehicleSpecifications_services_1 = require("./VehicleSpecifications.services");
const getAllvehicalspecificationData = async (c) => {
    try {
        const data = await (0, VehicleSpecifications_services_1.getAllvehicalspecification)();
        console.log('hey');
        return c.json(data, 200);
    }
    catch (err) {
        return c.json({ "message": err }, 500);
    }
};
exports.getAllvehicalspecificationData = getAllvehicalspecificationData;
const getOnevehicalspecificationData = async (c) => {
    const id = c.req.param("id");
    const data = await (0, VehicleSpecifications_services_1.getOnevehiclespecification)(Number(id));
    return c.json(data, 200);
};
exports.getOnevehicalspecificationData = getOnevehicalspecificationData;
const deleteAllvehicalspecificationData = async (c) => {
    const id = c.req.param("id");
    const data = await (0, VehicleSpecifications_services_1.deleteAllvehicalspecification)(Number(id));
    return c.json(data, 200);
};
exports.deleteAllvehicalspecificationData = deleteAllvehicalspecificationData;
const InsertvehicalspecificationData = async (c) => {
    try {
        const data = await c.req.json();
        const result = (0, VehicleSpecifications_services_1.Insertvehiclespecification)(data);
        return c.json(result, 200);
    }
    catch (err) {
        return c.json({ "message": err }, 400);
    }
};
exports.InsertvehicalspecificationData = InsertvehicalspecificationData;
const updatevehicalspecificationData = async (c) => {
    const id = c.req.param("id");
    try {
        const data = await c.req.json();
        const result = await (0, VehicleSpecifications_services_1.updatevehicalspecification)(Number(id), data);
        return c.json(result, 200);
    }
    catch (err) {
        return c.json({ "message": err }, 400);
    }
};
exports.updatevehicalspecificationData = updatevehicalspecificationData;
