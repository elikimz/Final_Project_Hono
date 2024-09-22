import { Hono } from "hono";
import { deleteCustomerSupportTicketsData, getAllCustomerSupportTicketsData,getOneCustomerSupportTicketsData,InsertCustomerSupportTicketsData,updateCustomerSupportTicketsData} from "./CustomerSupportTickets.controller";
export const usersRouter = new Hono();
export const CustomerSupportTicketsRouter = new Hono();



CustomerSupportTicketsRouter.get("/", getAllCustomerSupportTicketsData)
CustomerSupportTicketsRouter.get("/:id",getOneCustomerSupportTicketsData)
CustomerSupportTicketsRouter.delete("/:id",deleteCustomerSupportTicketsData)
CustomerSupportTicketsRouter.post("/",InsertCustomerSupportTicketsData)
CustomerSupportTicketsRouter.put("/:id",updateCustomerSupportTicketsData)
