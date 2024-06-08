import type { Request, Response } from "express";
import Consigment from "../models/Consignment";

export class ConsignmentController {
  static chargeConsignment = async (req: Request, res: Response) => {
    const consignment = new Consigment(req.body);

    try {
      await consignment.save();
      res.send("Remesa cobrada correctamente");
    } catch (error) {
      console.log(error);
    }
  };

  static getAllConsignments = async (req: Request, res: Response) => {
    try {
      const consignments = await Consigment.find();
      res.json(consignments);
    } catch (error) {
      console.log(error);
    }
  };

  static getConsignmentById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const consignment = await Consigment.findById(id);
      if (!consignment) {
        const error = new Error("Remesa no existe");
        return res.status(404).json({ error: error.message });
      }
      res.json(consignment);
    } catch (error) {
      console.log(error);
    }
  };

  static updateConsignment = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const consignment = await Consigment.findByIdAndUpdate(id, req.body);

      if (!consignment) {
        const error = new Error("Remesa no existe");
        return res.status(404).json({ error: error.message });
      }

      await consignment.save();
      res.send("Remesa actualizada");
    } catch (error) {
      console.log(error);
    }
  };

  static deleteConsignment = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const consignment = await Consigment.findById(id);

      if (!consignment) {
        const error = new Error("Remesa no existe");
        return res.status(404).json({ error: error.message });
      }

      await consignment.deleteOne();
      res.send("Remesa Eliminado");
    } catch (error) {
      console.log(error);
    }
  };
}
