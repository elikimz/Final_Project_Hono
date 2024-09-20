import { Context } from "hono";
import {  Insertvehiclespecification,  deleteAllvehicalspecification, getAllvehicalspecification, getOnevehiclespecification, updatevehicalspecification} from "./VehicleSpecifications.services";


export const getAllvehicalspecificationData = async(c: Context) => {
    try {
        const data = await getAllvehicalspecification()
        console.log('hey')
        return c.json(data, 200)
    } catch (err) {
        return c.json({ "message": err },500)
    }
}

export const getOnevehicalspecificationData =async(c: Context)=>{
    const id = c.req.param("id");
    const data=await getOnevehiclespecification(Number(id))
    return c.json(data,200)


}

export const deleteAllvehicalspecificationData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await  deleteAllvehicalspecification(Number(id))
    return c.json(data,200)
    
}
export const InsertvehicalspecificationData =async(c: Context)=>{
   

    try{
        const data=await c.req.json();
        const result = Insertvehiclespecification(data);
        return c.json(result,200)
    }catch(err) {
    
        return c.json({"message":err},400)
    }
}


export const updatevehicalspecificationData = async (c: Context) => {
    const id = c.req.param("id");
    try {
        const data = await c.req.json();
        const result = await updatevehicalspecification(Number(id), data);  
     return c.json(result, 200);
    } catch (err) {
        return c.json({ "message": err }, 400);
    }
}

