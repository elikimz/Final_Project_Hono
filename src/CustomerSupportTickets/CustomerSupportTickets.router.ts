import { Hono } from "hono";
import { deleteCustomerSupportTicketsData, getAllCustomerSupportTicketsData,getOneCustomerSupportTicketsData,InsertCustomerSupportTicketsData,updateCustomerSupportTicketsData} from "./CustomerSupportTickets.controller";
export const usersRouter = new Hono();
export const CustomerSupportTicketsRouter = new Hono();



CustomerSupportTicketsRouter.get("/CustomerSupportTickets", getAllCustomerSupportTicketsData)
CustomerSupportTicketsRouter.get("/CustomerSupportTickets/:id",getOneCustomerSupportTicketsData)
CustomerSupportTicketsRouter.delete("/CustomerSupportTickets/:id",deleteCustomerSupportTicketsData)
CustomerSupportTicketsRouter.post("/CustomerSupportTickets",InsertCustomerSupportTicketsData)
CustomerSupportTicketsRouter.put("/CustomerSupportTickets/:id",updateCustomerSupportTicketsData)
