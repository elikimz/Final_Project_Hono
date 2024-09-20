"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePayments = exports.insertPayments = exports.deletePayments = exports.getOnePayments = exports.getAllPayments = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const getAllPayments = async () => {
    return await db_1.default.query.Payments.findMany();
};
exports.getAllPayments = getAllPayments;
const getOnePayments = async (id) => {
    return await db_1.default.query.Payments.findFirst({ where: (0, drizzle_orm_1.eq)(schema_1.Payments.id, id) });
};
exports.getOnePayments = getOnePayments;
const deletePayments = async (id) => {
    await db_1.default.delete(schema_1.Payments).where((0, drizzle_orm_1.eq)(schema_1.Payments.id, id));
    return "deleted successifully";
};
exports.deletePayments = deletePayments;
const insertPayments = async (data) => {
    await db_1.default.insert(schema_1.Payments).values(data);
    return "user inserted successifully";
};
exports.insertPayments = insertPayments;
const updatePayments = async (id, data) => {
    await db_1.default.update(schema_1.Payments).set(data).where((0, drizzle_orm_1.eq)(schema_1.Payments.id, id));
    return "updated successfully";
};
exports.updatePayments = updatePayments;
