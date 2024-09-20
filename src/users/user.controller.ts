import { Context } from "hono";
import {  insertusers, deleteusers, getAllUsers, getOneUsers, updateusers } from "./user.service";


export const getAllUsersData = async(c: Context) => {
    try {
        const data = await getAllUsers()
        return c.json(data, 200)
    } catch (err) {
        return c.json({ "message": err },500)
    }
}
export const getOneUserData =async(c: Context)=>{
    const id = c.req.param("id");
    const data=await getOneUsers(Number(id))
    return c.json(data,200)


}

export const deleteUsersData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await deleteusers(Number(id))
    return c.json(data,200)
    
}
export const InsertUsersData =async(c: Context)=>{
   

    try{
        const data=await c.req.json();
       
        const result = await insertusers(data);
        return c.json(result,200)
    }catch(err) {
    
        return c.json({"message":err},400)
    }
}


export const updateUsersData = async (c: Context) => {
    const id = c.req.param("id");
    try {
        const data = await c.req.json();
        const result = await updateusers(Number(id), data);  
     return c.json(result, 200);
    } catch (err) {
        return c.json({ "message": err }, 400);
    }
}


