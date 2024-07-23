"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLocations = exports.insertLocations = exports.deleteLocations = exports.getOneLocations = exports.getAllLocations = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const getAllLocations = async () => {
    return await db_1.default.query.Locations.findMany();
};
exports.getAllLocations = getAllLocations;
const getOneLocations = async (id) => {
    return await db_1.default.query.Locations.findFirst({ where: (0, drizzle_orm_1.eq)(schema_1.Locations.id, id) });
};
exports.getOneLocations = getOneLocations;
const deleteLocations = async (id) => {
    await db_1.default.delete(schema_1.Locations).where((0, drizzle_orm_1.eq)(schema_1.Locations.id, id));
    return "deleted successifully";
};
exports.deleteLocations = deleteLocations;
const insertLocations = async (data) => {
    await db_1.default.insert(schema_1.Locations).values(data);
    return "user inserted successifully";
};
exports.insertLocations = insertLocations;
const updateLocations = async (id, data) => {
    await db_1.default.update(schema_1.Locations).set(data).where((0, drizzle_orm_1.eq)(schema_1.Locations.id, id));
    return "updated successfully";
};
exports.updateLocations = updateLocations;
