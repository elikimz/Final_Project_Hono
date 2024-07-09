import { Auth, Users,AuthOnUser, authOnUser  } from "../drizzle/schema";
import db from "../drizzle/db";
import { sql } from "drizzle-orm";


export const createAuthUserService = async (user: AuthOnUser): Promise<string | null> => {
    try {
        // Insert into Users table
        const createdUser = await db.insert(Users).values({
           
        }).returning({ id: Users.id });

        // Ensure the user was created and the id is retrieved
        if (!createdUser || !createdUser[0] || !createdUser[0].id) {
            throw new Error("Failed to create user in users table");
        }

        const userId = createdUser[0].id;

        // Insert into Auth table
        await db.insert(Auth).values({
            user_id: userId,
            password: user.password,
            role: user.role,
       
        });

        return "User created successfully";
    } catch (error) {
        console.error("Error creating user in the database:", error);
        return null;
    }
};

export const userLoginService = async (user: AuthOnUser) => {
    const { username, password } = user;
    return await db.query.Auth.findFirst({
        columns: {
            username: true,
            role: true,
            password: true
        }, where: sql` ${Auth.username} = ${username}`,
        with: {
            user: {
                columns: {
                    full_name: true,
                    contact_phone: true,
                    // address: true,
                    id: true
                }
            }
        }
    })
}