import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { Locations,LocationsInsert, LocationsSelect } from "../drizzle/schema";
import { Context } from "hono";

export const getAllLocations = async (): Promise<LocationsSelect[] | null> => {
    return await db.query.Locations.findMany()
}
export const getOneLocations= async (id:number):Promise<LocationsSelect | undefined> =>{
    
      return await db.query.Locations.findFirst({where:eq(Locations.id,id)})
} 
 
export const deleteLocations= async (id:number)=>{

await db.delete(Locations).where(eq( Locations.id,id))
return "deleted successifully"
}
 
export const insertLocations= async (data: LocationsInsert)=>{
   await db.insert(Locations).values(data)
   return "user inserted successifully"
} 

export const updateLocations= async (id:number,data:Partial<LocationsInsert>)=>{
 await db.update(Locations).set(data).where(eq(Locations.id,id));
    return "updated successfully"

} 
