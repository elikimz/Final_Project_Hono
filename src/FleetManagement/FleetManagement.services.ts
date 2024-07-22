import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import {FleetManagement,FleetManagementInsert,FleetManagementSelect } from "../drizzle/schema";
import { Context } from "hono";

export const getAllFleetManagement = async (): Promise<FleetManagementSelect[] | null> => {
    return await db.query.FleetManagement.findMany()
}
export const getOneFleetManagement= async (id:number):Promise<FleetManagementSelect | undefined> =>{
    
      return await db.query.FleetManagement.findFirst({where:eq(FleetManagement.id,id)})
} 
 
export const deleteFleetManagement= async (id:number)=>{

await db.delete(FleetManagement).where(eq(FleetManagement.id,id))
return "deleted successifully"
}
 
export const insertFleetManagement= async (data:FleetManagementInsert)=>{
   await db.insert(FleetManagement).values(data)
   console.log(FleetManagement)
   return "user inserted successifully"
} 

export const updateFleetManagement= async (id:number,data:Partial<FleetManagementInsert>)=>{
 await db.update(FleetManagement).set(data).where(eq(FleetManagement.id,id));
    return "updated successfully"

} 
