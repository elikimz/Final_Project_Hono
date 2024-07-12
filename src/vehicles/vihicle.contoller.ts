import { Context } from "hono";
import {  insertVehicles, deleteVehicles, getAllVehicles, getOneVehicles, updateVehicles } from "./vihicle.services";


export const getAllVehiclesData = async(c: Context) => {
    try {
        const data = await getAllVehicles()
        return c.json(data, 200)
    } catch (err) {
        return c.json({ "message": err },500)
    }
}
export const getOneVehiclesData =async(c: Context)=>{
    const id = c.req.param("id");
    const data=await getOneVehicles(Number(id))
    return c.json(data,200)


}

export const deleteVehiclesData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await deleteVehicles(Number(id))
    return c.json(data,200)
    
}
export const InsertVehiclesData =async(c: Context)=>{
   

    try{
        const data=await c.req.json();
        
        const result = await insertVehicles(data);
        return c.json(result,200)
    }catch(err) {
    
        return c.json({"message":err},400)
    }
}


export const updateVehiclesData = async (c: Context) => {
    const id = c.req.param("id");
    try {
        const data = await c.req.json();
        const result = await updateVehicles(Number(id), data);  
     return c.json(result, 200);
    } catch (err) {
        return c.json({ "message": err }, 400);
    }
}


