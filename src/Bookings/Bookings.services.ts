import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { Bookings, BookingsInsert, BookingsSelect } from "../drizzle/schema";

export const getAllBookings = async (): Promise<BookingsSelect[] | null> => {
    return await db.query.Bookings.findMany();
}

export const getOneBookings = async (id: number): Promise<BookingsSelect | undefined> => {
    return await db.query.Bookings.findFirst({ where: eq(Bookings.id, id) });
}

export const deleteBookings = async (id: number) => {
    await db.delete(Bookings).where(eq(Bookings.id, id));
    return "deleted successfully";
}

export const insertBookings = async (data: BookingsInsert): Promise<BookingsSelect | undefined> => {
    const result = await db.insert(Bookings).values(data).returning();
    return result[0];
}

export const updateBookings = async (id: number, data: Partial<BookingsInsert>) => {
    await db.update(Bookings).set(data).where(eq(Bookings.id, id));
    return "updated successfully";
}
