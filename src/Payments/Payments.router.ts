import { Hono } from "hono";
import { deletePaymentsData, getAllPaymentsData,getOnePaymentsData,createCheckoutSessionController,insertPaymentsData,updatePaymentsData} from "./Payments .controller";
export const usersRouter = new Hono();
export const PaymentsRouter = new Hono();



PaymentsRouter.get("/", getAllPaymentsData)
PaymentsRouter.get("/:id",getOnePaymentsData)
PaymentsRouter.delete("/:id",deletePaymentsData)
PaymentsRouter.post("/",insertPaymentsData)
PaymentsRouter.put("/:id",updatePaymentsData)
PaymentsRouter.post('/checkout-session', createCheckoutSessionController)