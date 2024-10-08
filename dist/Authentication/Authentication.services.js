"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginService = exports.createAuthUserService = void 0;
const schema_1 = require("../drizzle/schema");
const db_1 = require("../drizzle/db");
const drizzle_orm_1 = require("drizzle-orm");
const createAuthUserService = async (user) => {
    try {
        // Insert into Users table
        const createdUser = await db_1.default.insert(schema_1.Users).values({
            full_name: user.full_name,
            email: user.email,
            contact_phone: user.contact_phone,
            address: user.address,
            role: user.role,
            //photo_url: user.photo_url,
        }).returning({ id: schema_1.Users.id });
        // Ensure the user was created and the id is retrieved
        if (!createdUser || !createdUser[0] || !createdUser[0].id) {
            throw new Error("Failed to create user in users table");
        }
        const userId = createdUser[0].id;
        // Insert into Auth table
        await db_1.default.insert(schema_1.Auth).values({
            user_id: userId,
            password: user.password,
            role: user.role === 'user' || user.role === 'admin' ? user.role : 'user',
            email: user.email
        });
        return "User created successfully";
    }
    catch (error) {
        console.error("Error creating user in the database:", error);
        return null;
    }
};
exports.createAuthUserService = createAuthUserService;
const userLoginService = async (user) => {
    const { email, password } = user;
    return await db_1.default.query.Auth.findFirst({
        columns: {
            email: true,
            role: true,
            password: true
        }, where: (0, drizzle_orm_1.sql) ` ${schema_1.Auth.email} = ${email}`,
        with: {
            user: {
                columns: {
                    full_name: true,
                    contact_phone: true,
                    address: true,
                    id: true
                }
            }
        }
    });
};
exports.userLoginService = userLoginService;
