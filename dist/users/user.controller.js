"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUsersData = exports.InsertUsersData = exports.deleteUsersData = exports.getOneUserData = exports.getAllUsersData = void 0;
const user_service_1 = require("./user.service");
const getAllUsersData = async (c) => {
    try {
        const data = await (0, user_service_1.getAllUsers)();
        return c.json(data, 200);
    }
    catch (err) {
        return c.json({ "message": err }, 500);
    }
};
exports.getAllUsersData = getAllUsersData;
const getOneUserData = async (c) => {
    const id = c.req.param("id");
    const data = await (0, user_service_1.getOneUsers)(Number(id));
    return c.json(data, 200);
};
exports.getOneUserData = getOneUserData;
const deleteUsersData = async (c) => {
    const id = c.req.param("id");
    const data = await (0, user_service_1.deleteusers)(Number(id));
    return c.json(data, 200);
};
exports.deleteUsersData = deleteUsersData;
const InsertUsersData = async (c) => {
    try {
        const data = await c.req.json();
        const result = await (0, user_service_1.insertusers)(data);
        return c.json(result, 200);
    }
    catch (err) {
        return c.json({ "message": err }, 400);
    }
};
exports.InsertUsersData = InsertUsersData;
const updateUsersData = async (c) => {
    const id = c.req.param("id");
    try {
        const data = await c.req.json();
        const result = await (0, user_service_1.updateusers)(Number(id), data);
        return c.json(result, 200);
    }
    catch (err) {
        return c.json({ "message": err }, 400);
    }
};
exports.updateUsersData = updateUsersData;
