"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const hono_1 = require("hono");
const zod_validator_1 = require("@hono/zod-validator");
const Authentication_controller_1 = require("./Authentication.controller");
const validators_1 = require("../validators");
exports.authRouter = new hono_1.Hono();
exports.authRouter.post('/register', (0, zod_validator_1.zValidator)('json', validators_1.registerUserSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), Authentication_controller_1.registerUser);
exports.authRouter.post('/login', (0, zod_validator_1.zValidator)('json', validators_1.loginUserSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), Authentication_controller_1.loginUser);
