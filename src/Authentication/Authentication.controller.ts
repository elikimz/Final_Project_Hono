import "dotenv/config";
import { Context } from "hono";
import { createAuthUsersService, getOneUsers, UserLoginService } from "./Authentication.services";
const bcrypt = require("bcrypt");
import { sign } from "hono/jwt";
import { Users } from "../drizzle/schema";




export const registerUsers = async (c: Context) => {
    try {

        // console.log(await c.req.json())
        const Users = await c.req.json();
        const pass = Users.password;
        const hashedPassword = await bcrypt.hash(pass, 10);
        delete Users.password
        // console.log(Users)
        // Users.password = hashedPassword;
        const createdUser = await createAuthUsersService(Users);
        console.log(createdUser[0])
        if (!createdUser) return c.text("User not created", 404);
        return c.json({ msg: createdUser }, 201);

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }

}

export const loginUsers = async (c: Context) => {

    try {
        const Users = await c.req.json();
        //check user exist
        console.log(Users)
        const UsersExist = await UserLoginService(Users);
        console.log(UsersExist)
        if (UsersExist === null) return c.json({ error: "User not found" }, 404);  // not found         
        const userMatch = await bcrypt.compare(Users.password, UsersExist?.password as string);
        console.log(userMatch)
        if (!userMatch) {
            return c.json({ error: "invalid login details!!!" }, 401);  // unauthorized
        } else {
            // create a payload
            const payload = {
                sub: UsersExist?. user_id,
                // role: UsersExist?.role,
                exp: Math.floor(Date.now() / 1000) + (60 * 180)  // 3 hour  => SESSION EXPIRATION
            }
            console.log(process.env.JWT_SECRET)
            let secret = process.env.JWT_SECRET as string;  // secret key
            console.log(secret); //
            const token = await sign(payload, secret);   // create a JWT token
            let user = UsersExist?.user_id;
            // let role = UsersExist?.role;
            return c.json({ token, user: {user } }, 200);  // return token and user details
        }
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }

}


export const getOneUsersData =async(c: Context)=>{
    const id = c.req.param("id");
    const data=await getOneUsers(Number(id))
    return c.json(data,200)


}
