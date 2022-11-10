import express, { Router } from "express";
import CarController from "./controllers/CarController";
const router = Router();
router.get("/cars", CarController.index);
router.get("/car/:id", CarController.findById);
router.post("/car", CarController.createCar);
router.put("/car/:id", CarController.update);
router.delete("/car/:id", CarController.delete);

export default router;
