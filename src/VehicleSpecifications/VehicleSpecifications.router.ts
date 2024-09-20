import { Hono } from "hono";
import {getAllvehicalspecificationData, deleteAllvehicalspecificationData,getOnevehicalspecificationData,InsertvehicalspecificationData,updatevehicalspecificationData} from "./VehicleSpecifications.controller";
export const usersRouter = new Hono();
export const vehicleSpecificationsRouter=new Hono()


vehicleSpecificationsRouter.get("/vehicalspecification", getAllvehicalspecificationData)
vehicleSpecificationsRouter.get("/vehicalspecification/:id",getOnevehicalspecificationData)
vehicleSpecificationsRouter.delete("/vehicalspecification/:id",deleteAllvehicalspecificationData)
vehicleSpecificationsRouter.post("/vehicalspecification",InsertvehicalspecificationData)
vehicleSpecificationsRouter.put("/vehicalspecification/:id",updatevehicalspecificationData)
