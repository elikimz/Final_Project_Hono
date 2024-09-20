"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFleetManagementData = exports.InsertFleetManagementData = exports.deleteFleetManagementData = exports.getOneFleetManagementData = exports.getAllFleetManagementData = void 0;
const FleetManagement_services_1 = require("./FleetManagement.services");
const getAllFleetManagementData = async (c) => {
    try {
        const data = await (0, FleetManagement_services_1.getAllFleetManagement)();
        return c.json(data, 200);
    }
    catch (err) {
        return c.json({ "message": err }, 500);
    }
};
exports.getAllFleetManagementData = getAllFleetManagementData;
const getOneFleetManagementData = async (c) => {
    const id = c.req.param("id");
    const data = await (0, FleetManagement_services_1.getOneFleetManagement)(Number(id));
    return c.json(data, 200);
};
exports.getOneFleetManagementData = getOneFleetManagementData;
const deleteFleetManagementData = async (c) => {
    const id = c.req.param("id");
    const data = await (0, FleetManagement_services_1.deleteFleetManagement)(Number(id));
    return c.json(data, 200);
};
exports.deleteFleetManagementData = deleteFleetManagementData;
const InsertFleetManagementData = async (c) => {
    try {
        const data = await c.req.json();
        const result = await (0, FleetManagement_services_1.insertFleetManagement)(data);
        return c.json(result, 200);
        console.log(result);
    }
    catch (err) {
        return c.json({ "message": err }, 400);
    }
};
exports.InsertFleetManagementData = InsertFleetManagementData;
const updateFleetManagementData = async (c) => {
    const id = c.req.param("id");
    try {
        const data = await c.req.json();
        const result = await (0, FleetManagement_services_1.updateFleetManagement)(Number(id), data);
        return c.json(result, 200);
    }
    catch (err) {
        return c.json({ "message": err }, 400);
    }
};
exports.updateFleetManagementData = updateFleetManagementData;
