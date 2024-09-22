import { Hono } from "hono";
import {getAllvehicalspecificationData, deleteAllvehicalspecificationData,getOnevehicalspecificationData,InsertvehicalspecificationData,updatevehicalspecificationData} from "./VehicleSpecifications.controller";
export const usersRouter = new Hono();
export const vehicleSpecificationsRouter=new Hono()


vehicleSpecificationsRouter.get("/", getAllvehicalspecificationData)
vehicleSpecificationsRouter.get("/:id",getOnevehicalspecificationData)
vehicleSpecificationsRouter.delete("/:id",deleteAllvehicalspecificationData)
vehicleSpecificationsRouter.post("/",InsertvehicalspecificationData)
vehicleSpecificationsRouter.put("/:id",updatevehicalspecificationData)
