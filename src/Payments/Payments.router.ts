import { Hono } from "hono";
import { deletePaymentsData, getAllPaymentsData,getOnePaymentsData,createCheckoutSessionController,insertPaymentsData,updatePaymentsData} from "./Payments .controller";
export const usersRouter = new Hono();
export const PaymentsRouter = new Hono();



PaymentsRouter.get("/Payments", getAllPaymentsData)
PaymentsRouter.get("/Payments/:id",getOnePaymentsData)
PaymentsRouter.delete("/Payments/:id",deletePaymentsData)
PaymentsRouter.post("/Payments",insertPaymentsData)
PaymentsRouter.put("/Payments/:id",updatePaymentsData)
PaymentsRouter.post('/checkout-session', createCheckoutSessionController)