"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCustomerSupportTickets = exports.insertCustomerSupportTickets = exports.deleteCustomerSupportTickets = exports.getOneCustomerSupportTickets = exports.getAllCustomerSupportTickets = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const getAllCustomerSupportTickets = async () => {
    return await db_1.default.query.CustomerSupportTickets.findMany();
};
exports.getAllCustomerSupportTickets = getAllCustomerSupportTickets;
const getOneCustomerSupportTickets = async (id) => {
    return await db_1.default.query.CustomerSupportTickets.findFirst({ where: (0, drizzle_orm_1.eq)(schema_1.CustomerSupportTickets.id, id) });
};
exports.getOneCustomerSupportTickets = getOneCustomerSupportTickets;
const deleteCustomerSupportTickets = async (id) => {
    await db_1.default.delete(schema_1.CustomerSupportTickets).where((0, drizzle_orm_1.eq)(schema_1.CustomerSupportTickets.id, id));
    return "deleted successifully";
};
exports.deleteCustomerSupportTickets = deleteCustomerSupportTickets;
const insertCustomerSupportTickets = async (data) => {
    await db_1.default.insert(schema_1.CustomerSupportTickets).values(data);
    return "user inserted successifully";
};
exports.insertCustomerSupportTickets = insertCustomerSupportTickets;
const updateCustomerSupportTickets = async (id, data) => {
    await db_1.default.update(schema_1.CustomerSupportTickets).set(data).where((0, drizzle_orm_1.eq)(schema_1.CustomerSupportTickets.id, id));
    return "updated successfully";
};
exports.updateCustomerSupportTickets = updateCustomerSupportTickets;
