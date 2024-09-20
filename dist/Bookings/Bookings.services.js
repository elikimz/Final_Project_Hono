"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookings = exports.insertBookings = exports.deleteBookings = exports.getOneBookings = exports.getAllBookings = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const getAllBookings = async () => {
    return await db_1.default.query.Bookings.findMany();
};
exports.getAllBookings = getAllBookings;
const getOneBookings = async (id) => {
    return await db_1.default.query.Bookings.findFirst({ where: (0, drizzle_orm_1.eq)(schema_1.Bookings.id, id) });
};
exports.getOneBookings = getOneBookings;
const deleteBookings = async (id) => {
    await db_1.default.delete(schema_1.Bookings).where((0, drizzle_orm_1.eq)(schema_1.Bookings.id, id));
    return "deleted successfully";
};
exports.deleteBookings = deleteBookings;
const insertBookings = async (data) => {
    const result = await db_1.default.insert(schema_1.Bookings).values(data).returning();
    return result[0];
};
exports.insertBookings = insertBookings;
const updateBookings = async (id, data) => {
    await db_1.default.update(schema_1.Bookings).set(data).where((0, drizzle_orm_1.eq)(schema_1.Bookings.id, id));
    return "updated successfully";
};
exports.updateBookings = updateBookings;
