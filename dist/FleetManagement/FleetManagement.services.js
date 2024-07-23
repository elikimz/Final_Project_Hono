"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFleetManagement = exports.insertFleetManagement = exports.deleteFleetManagement = exports.getOneFleetManagement = exports.getAllFleetManagement = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const getAllFleetManagement = async () => {
    return await db_1.default.query.FleetManagement.findMany();
};
exports.getAllFleetManagement = getAllFleetManagement;
const getOneFleetManagement = async (id) => {
    return await db_1.default.query.FleetManagement.findFirst({ where: (0, drizzle_orm_1.eq)(schema_1.FleetManagement.id, id) });
};
exports.getOneFleetManagement = getOneFleetManagement;
const deleteFleetManagement = async (id) => {
    await db_1.default.delete(schema_1.FleetManagement).where((0, drizzle_orm_1.eq)(schema_1.FleetManagement.id, id));
    return "deleted successifully";
};
exports.deleteFleetManagement = deleteFleetManagement;
const insertFleetManagement = async (data) => {
    await db_1.default.insert(schema_1.FleetManagement).values(data);
    console.log(schema_1.FleetManagement);
    return "user inserted successifully";
};
exports.insertFleetManagement = insertFleetManagement;
const updateFleetManagement = async (id, data) => {
    await db_1.default.update(schema_1.FleetManagement).set(data).where((0, drizzle_orm_1.eq)(schema_1.FleetManagement.id, id));
    return "updated successfully";
};
exports.updateFleetManagement = updateFleetManagement;
