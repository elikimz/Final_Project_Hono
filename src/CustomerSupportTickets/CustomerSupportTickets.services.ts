import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { CustomerSupportTickets,CustomerSupportTicketsInsert, CustomerSupportTicketsSelect } from "../drizzle/schema";
import { Context } from "hono";

export const getAllCustomerSupportTickets = async (): Promise<CustomerSupportTicketsSelect[] | null> => {
    return await db.query.CustomerSupportTickets.findMany()
}
export const getOneCustomerSupportTickets= async (id:number):Promise<CustomerSupportTicketsSelect | undefined> =>{
    
      return await db.query.CustomerSupportTickets.findFirst({where:eq(CustomerSupportTickets.id,id)})
} 
 
export const deleteCustomerSupportTickets= async (id:number)=>{

await db.delete(CustomerSupportTickets).where(eq( CustomerSupportTickets.id,id))
return "deleted successifully"
}
 
export const insertCustomerSupportTickets= async (data: CustomerSupportTicketsInsert)=>{
   await db.insert(CustomerSupportTickets).values(data)
   return "user inserted successifully"
} 

export const updateCustomerSupportTickets= async (id:number,data:Partial<CustomerSupportTicketsInsert>)=>{
 await db.update(CustomerSupportTickets).set(data).where(eq(CustomerSupportTickets.id,id));
    return "updated successfully"

} 
