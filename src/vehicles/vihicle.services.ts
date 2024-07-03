import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { Vehicles,VehiclesInsert, VehiclesSelect } from "../drizzle/schema";
import { Context } from "hono";

export const getAllVehicles = async (): Promise<VehiclesSelect[] | null> => {
    return await db.query.Vehicles.findMany()
}
export const getOneVehicles= async (id:number):Promise<VehiclesSelect | undefined> =>{
    
      return await db.query.Vehicles.findFirst({where:eq(Vehicles.id,id)})
} 
 
export const deleteVehicles= async (id:number)=>{

await db.delete(Vehicles).where(eq( Vehicles.id,id))
return "deleted successifully"
}
 
export const insertVehicles= async (data: VehiclesInsert)=>{
   await db.insert(Vehicles).values(data)
   return "user inserted successifully"
} 

export const updateVehicles= async (id:number,data:Partial<VehiclesInsert>)=>{
 await db.update(Vehicles).set(data).where(eq(Vehicles.id,id));
    return "updated successfully"

} 
