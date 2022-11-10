import { Request, Response } from "express";
import CarModel from "../database/CarModel";

const CarController = {
  async index(req: Request, res: Response): Promise<Response> {
    const cars = await CarModel.find();
    return res.json(cars);
  },

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const car = await CarModel.findById(id);
      return res.json(car);
    } catch (err) {
      throw err;
    }
  },

  async createCar(req: Request, res: Response): Promise<Response> {
    try {
      const { brand, model, version, year, km, exchangeType, value } = req.body;
      const car = await CarModel.create({
        brand,
        model,
        version,
        year,
        km,
        exchangeType,
        value,
      });
      return res.json({ error: false, message: "Car successfully created!" });
    } catch (err) {
      throw err;
    }
  },

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const data = req.body;

      const car = await CarModel.findByIdAndUpdate(id, data);
      return res.json({
        error: false,
        message: "Car successfully updated!",
      });
    } catch (err) {
      throw err;
    }
  },

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const car = await CarModel.findByIdAndDelete(id);
      return res.json({ error: false, message: "Car successfully deleted!" });
    } catch (err) {
      throw err;
    }
  },


export default CarController;
