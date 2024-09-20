"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookingsData = exports.InsertBookingsData = exports.deleteBookingsData = exports.getOneBookingsData = exports.getAllBookingsData = void 0;
const Bookings_services_1 = require("./Bookings.services");
const getAllBookingsData = async (c) => {
    try {
        const data = await (0, Bookings_services_1.getAllBookings)();
        return c.json(data, 200);
    }
    catch (err) {
        return c.json({ "message": err }, 500);
    }
};
exports.getAllBookingsData = getAllBookingsData;
const getOneBookingsData = async (c) => {
    const id = c.req.param("id");
    const data = await (0, Bookings_services_1.getOneBookings)(Number(id));
    return c.json(data, 200);
};
exports.getOneBookingsData = getOneBookingsData;
const deleteBookingsData = async (c) => {
    const id = c.req.param("id");
    const data = await (0, Bookings_services_1.deleteBookings)(Number(id));
    return c.json(data, 200);
};
exports.deleteBookingsData = deleteBookingsData;
const InsertBookingsData = async (c) => {
    try {
        const data = await c.req.json();
        const result = await (0, Bookings_services_1.insertBookings)(data);
        return c.json(result, 200);
    }
    catch (err) {
        return c.json({ "message": err }, 400);
    }
};
exports.InsertBookingsData = InsertBookingsData;
const updateBookingsData = async (c) => {
    const id = c.req.param("id");
    try {
        const data = await c.req.json();
        const result = await (0, Bookings_services_1.updateBookings)(Number(id), data);
        return c.json(result, 200);
    }
    catch (err) {
        return c.json({ "message": err }, 400);
    }
};
exports.updateBookingsData = updateBookingsData;
