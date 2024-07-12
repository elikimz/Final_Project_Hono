import { Context } from "hono";
import {  insertCustomerSupportTickets, deleteCustomerSupportTickets, getAllCustomerSupportTickets, getOneCustomerSupportTickets, updateCustomerSupportTickets } from "./CustomerSupportTickets.services";


export const getAllCustomerSupportTicketsData = async(c: Context) => {
    try {
        const data = await getAllCustomerSupportTickets()
        return c.json(data, 200)
    } catch (err) {
        return c.json({ "message": err },500)
    }
}
export const getOneCustomerSupportTicketsData =async(c: Context)=>{
    const id = c.req.param("id");
    const data=await getOneCustomerSupportTickets(Number(id))
    return c.json(data,200)


}

export const deleteCustomerSupportTicketsData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await deleteCustomerSupportTickets(Number(id))
    return c.json(data,200)
    
}
export const InsertCustomerSupportTicketsData =async(c: Context)=>{
   

    try{
        const data=await c.req.json();
        const result = await insertCustomerSupportTickets(data);
        return c.json(result,200)
    }catch(err) {
    
        return c.json({"message":err},400)
    }
}


export const updateCustomerSupportTicketsData = async (c: Context) => {
    const id = c.req.param("id");
    try {
        const data = await c.req.json();
        const result = await updateCustomerSupportTickets(Number(id), data);  
     return c.json(result, 200);
    } catch (err) {
        return c.json({ "message": err }, 400);
    }
}


