import { Auth , AuthOnUser, Users, authOnUser,usersInsert,usersSelect } from "../drizzle/schema";
import db from "../drizzle/db";
import { eq, sql } from "drizzle-orm";

type returnType = Array<number>
export const createAuthUsersService = async (UsersDetails: usersInsert) => {
    await db.insert(Users).values(UsersDetails).returning({id:UsersDetails.id}).execute()
    // return "User created successfully";
}


export const getOneUsers= async (id:number):Promise<usersSelect  | undefined> =>{
    
    return await db.query.Users.findFirst({where:eq(Users.id,id)})
} 


export const UserLoginService = async (Users: authOnUser) => {
    const {   user_id, password } = Users;
    return await db.query.Auth.findFirst({
        columns: {
            user_id: true,
            password: true
        }, where: sql` ${Auth.  user_id} = ${ user_id}`,
        with: {
            user: {
                columns: {
                    full_name: true,
                    contact_phone: true,
                    id: true
                }
            }
        }
    })
}
