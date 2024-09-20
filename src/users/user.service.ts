import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { Users,usersInsert, usersSelect } from "../drizzle/schema";
import { Context } from "hono";

export const getAllUsers = async (): Promise<usersSelect[] | null> => {
    return await db.query.Users.findMany()
}
export const getOneUsers= async (id:number):Promise<usersSelect | undefined> =>{
    
      return await db.query.Users.findFirst({where:eq(Users.id,id)})
} 
 
export const deleteusers= async (id:number)=>{

await db.delete(Users).where(eq( Users.id,id))
return "deleted successifully"
}
 
export const insertusers= async (data: usersInsert)=>{
   await db.insert(Users).values(data)
   return "user inserted successifully"
} 

export const updateusers= async (id:number,data:Partial<usersInsert>)=>{
 await db.update(Users).set(data).where(eq(Users.id,id));
    return "updated successsfully"

} 
