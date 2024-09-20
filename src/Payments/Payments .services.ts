import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import {Payments,PaymentsInsert, PaymentsSelect } from "../drizzle/schema";
import { Context } from "hono";

export const getAllPayments = async (): Promise<PaymentsSelect[] | null> => {
    return await db.query.Payments.findMany()
}
export const getOnePayments= async (id:number):Promise<PaymentsSelect | undefined> =>{
    
      return await db.query.Payments.findFirst({where:eq(Payments.id,id)})
} 
 
export const deletePayments= async (id:number)=>{

await db.delete(Payments).where(eq(Payments.id,id))
return "deleted successifully"
}
 
export const insertPayments= async (data: PaymentsInsert)=>{
   await db.insert(Payments).values(data)
   return "user inserted successifully"
} 

export const updatePayments= async (id:number,data:Partial<PaymentsInsert>)=>{
 await db.update(Payments).set(data).where(eq(Payments.id,id));
    return "updated successfully"

} 
