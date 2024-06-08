import type { Request, Response } from "express";
import TransferType from "../models/TransferType";

export class TransferTypeController {
  static createTransferType = async (req: Request, res: Response) => {
    const transferType = new TransferType(req.body);

    try {
      await transferType.save();
      res.send("Tipo de transferencia agregada");
    } catch (error) {
      console.log(error);
    }
  };

  static getAllTransferType = async (req: Request, res: Response) => {
    try {
      const transferType = await TransferType.find();
      res.json(transferType);
    } catch (error) {
      console.log(error);
    }
  };

  static getTransferTypeById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const transferTypet = await TransferType.findById(id);
      if (!transferTypet) {
        const error = new Error("Tipo de transferencia no existe");
        return res.status(404).json({ error: error.message });
      }
      res.json(transferTypet);
    } catch (error) {
      console.log(error);
    }
  };

  static updateTransferType = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const transferType = await TransferType.findByIdAndUpdate(id, req.body);

      if (!transferType) {
        const error = new Error("Tipo de transferencia no existente");
        return res.status(404).json({ error: error.message });
      }

      await transferType.save();
      res.send("Tipo de transferencia actualizada");
    } catch (error) {
      console.log(error);
    }
  };

  static deleteTransferType = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const transferType = await TransferType.findById(id);

      if (!transferType) {
        const error = new Error("Tipo de transferencia no existente");
        return res.status(404).json({ error: error.message });
      }

      await transferType.deleteOne();
      res.send("Tipo de transferencia eliminado");
    } catch (error) {
      console.log(error);
    }
  };
}
