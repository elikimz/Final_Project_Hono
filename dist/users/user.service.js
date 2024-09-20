"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateusers = exports.insertusers = exports.deleteusers = exports.getOneUsers = exports.getAllUsers = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const getAllUsers = async () => {
    return await db_1.default.query.Users.findMany();
};
exports.getAllUsers = getAllUsers;
const getOneUsers = async (id) => {
    return await db_1.default.query.Users.findFirst({ where: (0, drizzle_orm_1.eq)(schema_1.Users.id, id) });
};
exports.getOneUsers = getOneUsers;
const deleteusers = async (id) => {
    await db_1.default.delete(schema_1.Users).where((0, drizzle_orm_1.eq)(schema_1.Users.id, id));
    return "deleted successifully";
};
exports.deleteusers = deleteusers;
const insertusers = async (data) => {
    await db_1.default.insert(schema_1.Users).values(data);
    return "user inserted successifully";
};
exports.insertusers = insertusers;
const updateusers = async (id, data) => {
    await db_1.default.update(schema_1.Users).set(data).where((0, drizzle_orm_1.eq)(schema_1.Users.id, id));
    return "updated successsfully";
};
exports.updateusers = updateusers;
