import { Context } from "hono";
import {  insertFleetManagement, deleteFleetManagement, getAllFleetManagement, getOneFleetManagement, updateFleetManagement } from "./FleetManagement.services";
import { json } from "stream/consumers";


export const getAllFleetManagementData = async(c: Context) => {
    try {
        const data = await getAllFleetManagement()
        return c.json(data, 200)
    } catch (err) {
        return c.json({ "message": err },500)
    }
}
export const getOneFleetManagementData =async(c: Context)=>{
    const id = c.req.param("id");
    const data=await getOneFleetManagement(Number(id))
    return c.json(data,200)


}

export const deleteFleetManagementData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await deleteFleetManagement(Number(id))
    return c.json(data,200)
    
}
export const InsertFleetManagementData =async(c: Context)=>{
   
   

    try{
        const data=await c.req.json();
        const result = await insertFleetManagement(data);
        return c.json(result,200)
        console.log(result)
        
    }catch(err) {
    
        return c.json({"message":err},400)
    }
    
}


export const updateFleetManagementData = async (c: Context) => {
    const id = c.req.param("id");
    try {
        const data = await c.req.json();
        const result = await updateFleetManagement(Number(id), data);  
     return c.json(result, 200);
    } catch (err) {
        return c.json({ "message": err }, 400);
    }
}






