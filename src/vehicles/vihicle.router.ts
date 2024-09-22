import { Hono } from "hono";
import { deleteVehiclesData, getAllVehiclesData,getOneVehiclesData,InsertVehiclesData,updateVehiclesData} from "./vihicle.contoller";
export const usersRouter = new Hono();
export const VehiclesRouter = new Hono();



VehiclesRouter.get("/", getAllVehiclesData)
VehiclesRouter.get("/:id",getOneVehiclesData)
VehiclesRouter.delete("/:id",deleteVehiclesData)
VehiclesRouter.post("/",InsertVehiclesData)
VehiclesRouter.put(":id",updateVehiclesData)
