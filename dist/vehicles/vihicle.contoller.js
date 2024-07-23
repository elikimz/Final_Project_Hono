"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVehiclesData = exports.InsertVehiclesData = exports.deleteVehiclesData = exports.getOneVehiclesData = exports.getAllVehiclesData = void 0;
const vihicle_services_1 = require("./vihicle.services");
const getAllVehiclesData = async (c) => {
    try {
        const data = await (0, vihicle_services_1.getAllVehicles)();
        return c.json(data, 200);
    }
    catch (err) {
        return c.json({ "message": err }, 500);
    }
};
exports.getAllVehiclesData = getAllVehiclesData;
const getOneVehiclesData = async (c) => {
    const id = c.req.param("id");
    const data = await (0, vihicle_services_1.getOneVehicles)(Number(id));
    return c.json(data, 200);
};
exports.getOneVehiclesData = getOneVehiclesData;
const deleteVehiclesData = async (c) => {
    const id = c.req.param("id");
    const data = await (0, vihicle_services_1.deleteVehicles)(Number(id));
    return c.json(data, 200);
};
exports.deleteVehiclesData = deleteVehiclesData;
const InsertVehiclesData = async (c) => {
    try {
        const data = await c.req.json();
        const result = await (0, vihicle_services_1.insertVehicles)(data);
        return c.json(result, 200);
    }
    catch (err) {
        return c.json({ "message": err }, 400);
    }
};
exports.InsertVehiclesData = InsertVehiclesData;
const updateVehiclesData = async (c) => {
    const id = c.req.param("id");
    try {
        const data = await c.req.json();
        const result = await (0, vihicle_services_1.updateVehicles)(Number(id), data);
        return c.json(result, 200);
    }
    catch (err) {
        return c.json({ "message": err }, 400);
    }
};
exports.updateVehiclesData = updateVehiclesData;
