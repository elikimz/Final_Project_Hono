import { Hono } from "hono";
import { deleteLocationsData, getAllLocationsData,getOneUserData,InsertLocationsData,updateLocationsData} from "./Locations.controller";
export const LocationsRouter = new Hono();


LocationsRouter.get("/", getAllLocationsData)
LocationsRouter.get("/:id",getOneUserData)
LocationsRouter.delete("/:id",deleteLocationsData)
LocationsRouter.post("/",InsertLocationsData)
LocationsRouter.put("/:id",updateLocationsData)
