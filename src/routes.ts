import express, { Router } from "express";
import CarController from "./controllers/CarController";
import AuthController from "./controllers/AuthController";
import { AuthToken } from "./middleware/token";
const router = Router();
router.post("/login", AuthController.login);

router.use(AuthToken);

router.get("/cars", CarController.index);
router.get("/car/:id", CarController.findById);
router.post("/car", CarController.createCar);
router.put("/car/:id", CarController.update);
router.delete("/car/:id", CarController.delete);

export default router;
