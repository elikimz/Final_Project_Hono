import { Hono } from "hono";
import { deleteBookingsData, getAllBookingsData,getOneBookingsData,InsertBookingsData,updateBookingsData} from "./Bookings.controller";
export const usersRouter = new Hono();
export const BookingsRouter=new Hono();


BookingsRouter.get("/Bookings", getAllBookingsData)
BookingsRouter.get("/Bookings/:id",getOneBookingsData)
BookingsRouter.delete("/Bookings/:id",deleteBookingsData)
BookingsRouter.post("/Bookings",InsertBookingsData)
BookingsRouter.put("/Bookings/:id",updateBookingsData)
