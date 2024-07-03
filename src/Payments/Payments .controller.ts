import { Context } from "hono";
import {  insertPayments, deletePayments, getAllPayments, getOnePayments, updatePayments } from "./Payments .services";


export const getAllPaymentsData = async(c: Context) => {
    try {
        const data = await getAllPayments()
        return c.json(data, 200)
    } catch (err) {
        return c.json({ "message": err },500)
    }
}
export const getOnePaymentsData =async(c: Context)=>{
    const id = c.req.param("id");
    const data=await getOnePayments(Number(id))
    return c.json(data,200)


}

export const deletePaymentsData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await deletePayments(Number(id))
    return c.json(data,200)
    
}
export const InsertPaymentsData =async(c: Context)=>{
   

    try{
        const data=await c.req.json();
        // const password=data.password;
        // const hashedPassword=await bcrypt.hash(password,10);
        // data.password = hashedPassword ;
        const result = await insertPayments(data);
        return c.json(result,200)
    }catch(err) {
    
        return c.json({"message":err},400)
    }
}


export const updatePaymentsData = async (c: Context) => {
    const id = c.req.param("id");
    try {
        const data = await c.req.json();
        const result = await updatePayments(Number(id), data);  
     return c.json(result, 200);
    } catch (err) {
        return c.json({ "message": err }, 400);
    }
}


