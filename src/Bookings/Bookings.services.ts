import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import {Bookings,BookingsInsert, BookingsSelect } from "../drizzle/schema";
import { Context } from "hono";

export const getAllBookings = async (): Promise<BookingsSelect[] | null> => {
    return await db.query.Bookings.findMany()
}
export const getOneBookings= async (id:number):Promise<BookingsSelect | undefined> =>{
    
      return await db.query.Bookings.findFirst({where:eq(Bookings.id,id)})
} 
 
export const deleteBookings= async (id:number)=>{

await db.delete(Bookings).where(eq(Bookings.id,id))
return "deleted successifully"
}
 
export const insertBookings= async (data:BookingsInsert)=>{
   await db.insert(Bookings).values(data)
   return "user inserted successifully"
} 

export const updateBookings= async (id:number,data:Partial<BookingsInsert>)=>{
 await db.update(Bookings).set(data).where(eq(Bookings.id,id));
    return "updated successfully"

} 
