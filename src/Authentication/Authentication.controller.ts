import "dotenv/config";
import { Context } from "hono";
import { createAuthUserService ,userLoginService} from "./Authentication.services";
import { sign } from "hono/jwt";
const bcrypt = require("bcrypt");

export const registerUser = async (c: Context) => {
    try {
        console.log(await c.req.json());

       
        const user = await c.req.json();

        // Hash the user's password
        const pass = user.password;
        const hashedPassword = await bcrypt.hash(pass, 10);
        user.password = hashedPassword; 

        const createdUser = await createAuthUserService(user);

        if (!createdUser) {
            console.error("User creation failed in service");
            return c.text("User not created", 404);
        }

        return c.json({ msg: createdUser }, 201);
    } catch (error: any) {
        console.error("Error during user registration:", error);
        return c.json({ error: error?.message }, 400);
    }
};

export const loginUser = async (c: Context) => {
    try {
        const user = await c.req.json();
        console.log('Login attempt:', user);
 
        // Check if user exists
        const userExist = await userLoginService(user);
        console.log('User found:', userExist);
        if (!userExist) {
            console.error('User not found');
            return c.json({ error: "User not found" }, 404);
        }
 
        // Compare passwords
        const userMatch = userExist && userExist.password? await bcrypt.compare(user.password, userExist.password) : false;
        if (!userMatch) {
            console.error('Invalid credentials');
            return c.json({ error: "Invalid credentials" }, 401);
        }
 
        // Create a payload
        const payload = {
            sub: userExist.username,
            role: userExist.role,
            exp: Math.floor(Date.now() / 1000) + (60 * 180)  // 3 hours => SESSION EXPIRATION
        };
        const secret = process.env.JWT_SECRET as string;  // Secret key
        const token = await sign(payload, secret);  // Create a JWT token
 
        const userResponse = {
            username: userExist.username,
            role: userExist.role,
        };
       
        return c.json({ token, user: userResponse }, 200);
    } catch (error: any) {
        console.error('Error in loginUser:', error);
        return c.json({ error: error?.message }, 500);
    }
}
 
 
 