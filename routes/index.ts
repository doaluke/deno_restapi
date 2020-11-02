import { Router } from "https://deno.land/x/oak/mod.ts";

import { CarsController } from '../controllers/index.ts';


const router = new Router();

router
  .get("/", CarsController.root)
  .get("/api/cars", CarsController.getCars)
  .post("/api/cars", CarsController.CreateCar)
  .delete("/api/cars/:id", CarsController.DeleteCarById)
  .put("/api/cars/:id", CarsController.updateCar)
  .get("/api/cars/:id", CarsController.getCar)
 

export default router;


