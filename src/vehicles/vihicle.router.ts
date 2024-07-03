import { Hono } from "hono";
import { deleteVehiclesData, getAllVehiclesData,getOneVehiclesData,InsertVehiclesData,updateVehiclesData} from "./vihicle.contoller";
export const usersRouter = new Hono();
export const VehiclesRouter = new Hono();



VehiclesRouter.get("/Vehicles", getAllVehiclesData)
VehiclesRouter.get("/Vehicles/:id",getOneVehiclesData)
VehiclesRouter.delete("/Vehicles/:id",deleteVehiclesData)
VehiclesRouter.post("/Vehicles",InsertVehiclesData)
VehiclesRouter.put("/Vehicles/:id",updateVehiclesData)
