"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCustomerSupportTicketsData = exports.InsertCustomerSupportTicketsData = exports.deleteCustomerSupportTicketsData = exports.getOneCustomerSupportTicketsData = exports.getAllCustomerSupportTicketsData = void 0;
const CustomerSupportTickets_services_1 = require("./CustomerSupportTickets.services");
const getAllCustomerSupportTicketsData = async (c) => {
    try {
        const data = await (0, CustomerSupportTickets_services_1.getAllCustomerSupportTickets)();
        return c.json(data, 200);
    }
    catch (err) {
        return c.json({ "message": err }, 500);
    }
};
exports.getAllCustomerSupportTicketsData = getAllCustomerSupportTicketsData;
const getOneCustomerSupportTicketsData = async (c) => {
    const id = c.req.param("id");
    const data = await (0, CustomerSupportTickets_services_1.getOneCustomerSupportTickets)(Number(id));
    return c.json(data, 200);
};
exports.getOneCustomerSupportTicketsData = getOneCustomerSupportTicketsData;
const deleteCustomerSupportTicketsData = async (c) => {
    const id = c.req.param("id");
    const data = await (0, CustomerSupportTickets_services_1.deleteCustomerSupportTickets)(Number(id));
    return c.json(data, 200);
};
exports.deleteCustomerSupportTicketsData = deleteCustomerSupportTicketsData;
const InsertCustomerSupportTicketsData = async (c) => {
    try {
        const data = await c.req.json();
        const result = await (0, CustomerSupportTickets_services_1.insertCustomerSupportTickets)(data);
        return c.json(result, 200);
    }
    catch (err) {
        return c.json({ "message": err }, 400);
    }
};
exports.InsertCustomerSupportTicketsData = InsertCustomerSupportTicketsData;
const updateCustomerSupportTicketsData = async (c) => {
    const id = c.req.param("id");
    try {
        const data = await c.req.json();
        const result = await (0, CustomerSupportTickets_services_1.updateCustomerSupportTickets)(Number(id), data);
        return c.json(result, 200);
    }
    catch (err) {
        return c.json({ "message": err }, 400);
    }
};
exports.updateCustomerSupportTicketsData = updateCustomerSupportTicketsData;
