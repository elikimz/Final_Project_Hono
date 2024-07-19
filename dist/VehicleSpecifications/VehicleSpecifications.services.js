"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatevehicalspecification = exports.Insertvehiclespecification = exports.deleteAllvehicalspecification = exports.getOnevehiclespecification = exports.getAllvehicalspecification = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const getAllvehicalspecification = async () => {
    return await db_1.default.query.VehicleSpecifications.findMany({
        with: {
            vehicles: {
                columns: {
                    id: true,
                    vehicleSpec_id: true,
                    rental_rate: true,
                    availability: true,
                    //  created_at: true,
                    //  updated_at: true,
                }
            },
        }
    });
};
exports.getAllvehicalspecification = getAllvehicalspecification;
const getOnevehiclespecification = async (id) => {
    return await db_1.default.query.VehicleSpecifications.findFirst({ where: (0, drizzle_orm_1.eq)(schema_1.VehicleSpecifications.id, id) });
};
exports.getOnevehiclespecification = getOnevehiclespecification;
const deleteAllvehicalspecification = async (id) => {
    await db_1.default.delete(schema_1.VehicleSpecifications).where((0, drizzle_orm_1.eq)(schema_1.VehicleSpecifications.id, id));
    return "deleted successifully";
};
exports.deleteAllvehicalspecification = deleteAllvehicalspecification;
const Insertvehiclespecification = async (data) => {
    await db_1.default.insert(schema_1.VehicleSpecifications).values(data);
    return " inserted successifully";
};
exports.Insertvehiclespecification = Insertvehiclespecification;
const updatevehicalspecification = async (id, data) => {
    await db_1.default.update(schema_1.VehicleSpecifications).set(data).where((0, drizzle_orm_1.eq)(schema_1.VehicleSpecifications.id, id));
    return "updated successfully";
};
exports.updatevehicalspecification = updatevehicalspecification;
