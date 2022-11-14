import express, { Router } from "express";
import CarController from "./controllers/CarController";
import AuthController from "./controllers/AuthController";
import multer from "multer";
import { storage } from "./utils/multerConfig";
import { AuthToken } from "./middleware/token";

const router = Router();
const upload = multer({ storage: storage });

router.post("/login", AuthController.login);
router.use("/files", express.static("uploads"));

router.get("/cars", CarController.index);

router.use(AuthToken);

router.get("/car/:id", CarController.findById);
router.post("/car", CarController.createCar);
router.put("/car/:id", CarController.update);
router.delete("/car/:id", CarController.delete);

router.put("/upload/:id", upload.single("file"), CarController.uploadImage);

export default router;
