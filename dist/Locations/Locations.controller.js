"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLocationsData = exports.InsertLocationsData = exports.deleteLocationsData = exports.getOneUserData = exports.getAllLocationsData = void 0;
const Locations_services_1 = require("./Locations.services");
const getAllLocationsData = async (c) => {
    try {
        const data = await (0, Locations_services_1.getAllLocations)();
        return c.json(data, 200);
    }
    catch (err) {
        return c.json({ "message": err }, 500);
    }
};
exports.getAllLocationsData = getAllLocationsData;
const getOneUserData = async (c) => {
    const id = c.req.param("id");
    const data = await (0, Locations_services_1.getOneLocations)(Number(id));
    return c.json(data, 200);
};
exports.getOneUserData = getOneUserData;
const deleteLocationsData = async (c) => {
    const id = c.req.param("id");
    const data = await (0, Locations_services_1.deleteLocations)(Number(id));
    return c.json(data, 200);
};
exports.deleteLocationsData = deleteLocationsData;
const InsertLocationsData = async (c) => {
    try {
        const data = await c.req.json();
        const result = await (0, Locations_services_1.insertLocations)(data);
        return c.json(result, 200);
    }
    catch (err) {
        return c.json({ "message": err }, 400);
    }
};
exports.InsertLocationsData = InsertLocationsData;
const updateLocationsData = async (c) => {
    const id = c.req.param("id");
    try {
        const data = await c.req.json();
        const result = await (0, Locations_services_1.updateLocations)(Number(id), data);
        return c.json(result, 200);
    }
    catch (err) {
        return c.json({ "message": err }, 400);
    }
};
exports.updateLocationsData = updateLocationsData;
