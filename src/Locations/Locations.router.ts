import { Hono } from "hono";
import { deleteLocationsData, getAllLocationsData,getOneUserData,InsertLocationsData,updateLocationsData} from "./Locations.controller";
export const LocationsRouter = new Hono();


LocationsRouter.get("/Locations", getAllLocationsData)
LocationsRouter.get("/Locations/:id",getOneUserData)
LocationsRouter.delete("/Locations/:id",deleteLocationsData)
LocationsRouter.post("/Locations",InsertLocationsData)
LocationsRouter.put("/Locations/:id",updateLocationsData)
