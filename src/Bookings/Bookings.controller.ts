import { Context } from "hono";
import { insertBookings, deleteBookings, getAllBookings, getOneBookings, updateBookings } from "./Bookings.services";

export const getAllBookingsData = async (c: Context) => {
    try {
        const data = await getAllBookings();
        return c.json(data, 200);
    } catch (err) {
        return c.json({ "message": err }, 500);
    }
}

export const getOneBookingsData = async (c: Context) => {
    const id = c.req.param("id");
    const data = await getOneBookings(Number(id));
    return c.json(data, 200);
}

export const deleteBookingsData = async (c: Context) => {
    const id = c.req.param("id");
    const data = await deleteBookings(Number(id));
    return c.json(data, 200);
}

export const InsertBookingsData = async (c: Context) => {
    try {
        const data = await c.req.json();
        const result = await insertBookings(data);
        return c.json(result, 200);
    } catch (err) {
        return c.json({ "message": err }, 400);
    }
}

export const updateBookingsData = async (c: Context) => {
    const id = c.req.param("id");
    try {
        const data = await c.req.json();
        const result = await updateBookings(Number(id), data);
        return c.json(result, 200);
    } catch (err) {
        return c.json({ "message": err }, 400);
    }
}
