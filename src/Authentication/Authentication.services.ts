import { Auth, Users,AuthOnUser, usersInsert  } from "../drizzle/schema";
import db from "../drizzle/db";
import { sql } from "drizzle-orm";


export const createAuthUserService = async (user:  usersInsert & { password: string }): Promise<string | null> => {
    try {
        // Insert into Users table
        const createdUser = await db.insert(Users).values({
          full_name: user.full_name,
          email: user.email,
          contact_phone: user.contact_phone,
          address: user.address,
          role: user.role,
          //photo_url: user.photo_url,
        

       
           
        }).returning({ id: Users.id});

        // Ensure the user was created and the id is retrieved
        if (!createdUser || !createdUser[0] || !createdUser[0].id) {
            throw new Error("Failed to create user in users table");
        }

        const userId = createdUser[0].id;

        // Insert into Auth table
           await db.insert(Auth).values({
            
            user_id: userId,
            password: user.password,
            role: user.role === 'user' || user.role === 'admin' ? user.role : 'user',
            email:user.email
       
        });

        return "User created successfully";
    } catch (error) {
        console.error("Error creating user in the database:", error);
        return null;
    }
};


export const userLoginService = async (user: AuthOnUser) => {
    const { email,password } = user;
    return await db.query.Auth.findFirst({
        columns: {
            email: true,
            role: true,
            password: true
        }, where: sql` ${Auth.email} = ${email}`,
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
    })
}