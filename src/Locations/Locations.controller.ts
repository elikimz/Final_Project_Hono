import { Context } from "hono";
import {  insertLocations, deleteLocations, getAllLocations, getOneLocations, updateLocations } from "./Locations.services";


export const getAllLocationsData = async(c: Context) => {
    try {
        const data = await getAllLocations()
        return c.json(data, 200)
    } catch (err) {
        return c.json({ "message": err },500)
    }
}
export const getOneUserData =async(c: Context)=>{
    const id = c.req.param("id");
    const data=await getOneLocations(Number(id))
    return c.json(data,200)


}

export const deleteLocationsData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await deleteLocations(Number(id))
    return c.json(data,200)
    
}
export const InsertLocationsData =async(c: Context)=>{
   

    try{
        const data=await c.req.json();
       
        const result = await insertLocations(data);
        return c.json(result,200)
    }catch(err) {
    
        return c.json({"message":err},400)
    }
}


export const updateLocationsData = async (c: Context) => {
    const id = c.req.param("id");
    try {
        const data = await c.req.json();
        const result = await updateLocations(Number(id), data);  
     return c.json(result, 200);
    } catch (err) {
        return c.json({ "message": err }, 400);
    }
}


