import { Hono } from "hono";
import { deleteFleetManagementData, getAllFleetManagementData,getOneFleetManagementData,InsertFleetManagementData,updateFleetManagementData} from "./FleetManagement.controller";
export const FleetManagementRouter = new Hono();



FleetManagementRouter.get("/FleetManagement", getAllFleetManagementData)
FleetManagementRouter.get("/FleetManagement/:id",getOneFleetManagementData)
FleetManagementRouter.delete("/FleetManagement/:id",deleteFleetManagementData)
FleetManagementRouter.post("/FleetManagement",InsertFleetManagementData)
FleetManagementRouter.put("/FleetManagement/:id",updateFleetManagementData)
