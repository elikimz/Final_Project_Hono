"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVehicles = exports.insertVehicles = exports.deleteVehicles = exports.getOneVehicles = exports.getAllVehicles = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const getAllVehicles = async () => {
    return await db_1.default.query.Vehicles.findMany({
        with: {
            vehicleSpecifications: {
                columns: {
                    id: true,
                    manufacturer: true,
                    model: true,
                    year: true,
                    fuel_type: true,
                    engine_capacity: true,
                    transmission: true,
                    seating_capacity: true,
                    color: true,
                    features: true,
                    image_url: true
                }
            }
        }
    });
};
exports.getAllVehicles = getAllVehicles;
const getOneVehicles = async (id) => {
    return await db_1.default.query.Vehicles.findFirst({ where: (0, drizzle_orm_1.eq)(schema_1.Vehicles.id, id) });
};
exports.getOneVehicles = getOneVehicles;
const deleteVehicles = async (id) => {
    await db_1.default.delete(schema_1.Vehicles).where((0, drizzle_orm_1.eq)(schema_1.Vehicles.id, id));
    return "deleted successifully";
};
exports.deleteVehicles = deleteVehicles;
const insertVehicles = async (data) => {
    await db_1.default.insert(schema_1.Vehicles).values(data);
    return "user inserted successifully";
};
exports.insertVehicles = insertVehicles;
const updateVehicles = async (id, data) => {
    await db_1.default.update(schema_1.Vehicles).set(data).where((0, drizzle_orm_1.eq)(schema_1.Vehicles.id, id));
    return "updated successfully";
};
exports.updateVehicles = updateVehicles;
