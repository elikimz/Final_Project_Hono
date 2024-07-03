import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { VehicleSpecifications,VehicleSpecificationsInsert,VehicleSpecificationsSelect} from "../drizzle/schema";


export const getAllvehicalspecification = async (): Promise<VehicleSpecificationsSelect[] | null> => {
    return await db.query.VehicleSpecifications.findMany()
}
export const getOnevehiclespecification= async (id:number):Promise<VehicleSpecificationsSelect | undefined> =>{
    
      return await db.query.VehicleSpecifications.findFirst({where:eq( VehicleSpecifications.id,id)})
} 
 
export const deleteAllvehicalspecification= async (id:number)=>{

await db.delete(VehicleSpecifications).where(eq( VehicleSpecifications.id,id))
return "deleted successifully"
}
 
export const Insertvehiclespecification= async (data: VehicleSpecificationsInsert)=>{
   await db.insert(VehicleSpecifications).values(data)
   return " inserted successifully"
} 

export const updatevehicalspecification= async (id:number,data:Partial<VehicleSpecificationsInsert>)=>{
 await db.update(VehicleSpecifications).set(data).where(eq(VehicleSpecifications.id,id));
    return "updated successfully"

} 