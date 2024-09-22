import { Hono } from "hono";
import { deleteFleetManagementData, getAllFleetManagementData,getOneFleetManagementData,InsertFleetManagementData,updateFleetManagementData} from "./FleetManagement.controller";
export const FleetManagementRouter = new Hono();



FleetManagementRouter.get("/", getAllFleetManagementData)
FleetManagementRouter.get("/:id",getOneFleetManagementData)
FleetManagementRouter.delete("/:id",deleteFleetManagementData)
FleetManagementRouter.post("/",InsertFleetManagementData)
FleetManagementRouter.put("/:id",updateFleetManagementData)
