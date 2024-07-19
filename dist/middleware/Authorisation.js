"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorisation = exports.adminRoleAuthorisation = exports.AuthorisationMiddleware = exports.verifyToken = void 0;
require("dotenv/config");
const jwt_1 = require("hono/jwt");
const verifyToken = async (token, secret) => {
    try {
        const decoded = await (0, jwt_1.verify)(token, secret);
        return decoded;
    }
    catch (error) {
        return null;
    }
};
exports.verifyToken = verifyToken;
const AuthorisationMiddleware = async (c, next, requiredRole) => {
    const token = c.req.header("Authorization");
    if (!token)
        return c.json({ error: "Token not provided" }, 401);
    const decoded = await (0, exports.verifyToken)(token, process.env.JWT_SECRET);
    if (!decoded)
        return c.json({ error: "Invalid token" }, 401);
    if (decoded.role !== requiredRole)
        return c.json({ error: "Unauthorized" }, 401);
    return next();
};
exports.AuthorisationMiddleware = AuthorisationMiddleware;
const adminRoleAuthorisation = async (c, next) => await (0, exports.AuthorisationMiddleware)(c, next, "admin");
exports.adminRoleAuthorisation = adminRoleAuthorisation;
const Authorisation = async (c, next) => await (0, exports.AuthorisationMiddleware)(c, next, "user");
exports.Authorisation = Authorisation;
