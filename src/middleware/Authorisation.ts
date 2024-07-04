import "dotenv/config";
import { verify } from "hono/jwt"
import { Context, Next } from "hono";

export const verifyToken = async (token: string, secret: string) => {
    try {
        const decoded = await verify(token as string, secret)
        return decoded;
    } catch (error: any) {
        return null
    }
}

export const AuthorisationMiddleware = async (c: Context, next: Next, requiredRole: string) => {
    const token = c.req.header("Authorization");

    if (!token) return c.json({ error: "Token not provided" }, 401);

    const decoded = await verifyToken(token, process.env.JWT_SECRET as string);

    if (!decoded) return c.json({ error: "Invalid token" }, 401);

    if (decoded.role !== requiredRole) return c.json({ error: "Unauthorized" }, 401);

    return next();
}

export const adminRoleAuthorisation = async (c: Context, next: Next) => await AuthorisationMiddleware(c, next, "admin")
export const Authorisation = async (c: Context, next: Next) => await AuthorisationMiddleware(c, next, "user")





