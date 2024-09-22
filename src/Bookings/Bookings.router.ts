import { Hono } from "hono";
import { deleteBookingsData, getAllBookingsData,getOneBookingsData,InsertBookingsData,updateBookingsData} from "./Bookings.controller";
export const usersRouter = new Hono();
export const BookingsRouter=new Hono();


BookingsRouter.get("/", getAllBookingsData)
BookingsRouter.get("/:id",getOneBookingsData)
BookingsRouter.delete("/:id",deleteBookingsData)
BookingsRouter.post("/",InsertBookingsData)
BookingsRouter.put("/:id",updateBookingsData)
