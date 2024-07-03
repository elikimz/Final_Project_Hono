import { Hono } from "hono";
import { deletePaymentsData, getAllPaymentsData,getOnePaymentsData,InsertPaymentsData,updatePaymentsData} from "./Payments .controller";
export const usersRouter = new Hono();
export const PaymentsRouter = new Hono();



PaymentsRouter.get("/Payments", getAllPaymentsData)
PaymentsRouter.get("/Payments/:id",getOnePaymentsData)
PaymentsRouter.delete("/Payments/:id",deletePaymentsData)
PaymentsRouter.post("/Payments",InsertPaymentsData)
PaymentsRouter.put("/Payments/:id",updatePaymentsData)
