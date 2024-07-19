"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePaymentsData = exports.InsertPaymentsData = exports.deletePaymentsData = exports.getOnePaymentsData = exports.getAllPaymentsData = void 0;
const Payments__services_1 = require("./Payments .services");
const getAllPaymentsData = async (c) => {
    try {
        const data = await (0, Payments__services_1.getAllPayments)();
        return c.json(data, 200);
    }
    catch (err) {
        return c.json({ "message": err }, 500);
    }
};
exports.getAllPaymentsData = getAllPaymentsData;
const getOnePaymentsData = async (c) => {
    const id = c.req.param("id");
    const data = await (0, Payments__services_1.getOnePayments)(Number(id));
    return c.json(data, 200);
};
exports.getOnePaymentsData = getOnePaymentsData;
const deletePaymentsData = async (c) => {
    const id = c.req.param("id");
    const data = await (0, Payments__services_1.deletePayments)(Number(id));
    return c.json(data, 200);
};
exports.deletePaymentsData = deletePaymentsData;
const InsertPaymentsData = async (c) => {
    try {
        const data = await c.req.json();
        const result = await (0, Payments__services_1.insertPayments)(data);
        return c.json(result, 200);
    }
    catch (err) {
        return c.json({ "message": err }, 400);
    }
};
exports.InsertPaymentsData = InsertPaymentsData;
const updatePaymentsData = async (c) => {
    const id = c.req.param("id");
    try {
        const data = await c.req.json();
        const result = await (0, Payments__services_1.updatePayments)(Number(id), data);
        return c.json(result, 200);
    }
    catch (err) {
        return c.json({ "message": err }, 400);
    }
};
exports.updatePaymentsData = updatePaymentsData;
