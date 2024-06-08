import type { Request, Response } from "express";
import Account from "../models/Account";

export class AccountController {
  static createBanckAccount = async (req: Request, res: Response) => {
    const banckAccount = new Account(req.body);

    try {
      await banckAccount.save();
      res.send("Cuenta bancaria creada correctamente");
    } catch (error) {
      console.log(error);
    }
  };

  static getAllBanckAccount = async (req: Request, res: Response) => {
    try {
      const banckAccount = await Account.find();
      res.json(banckAccount);
    } catch (error) {
      console.log(error);
    }
  };

  static getBanckAccountById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const banckAccountt = await Account.findById(id);
      if (!banckAccountt) {
        const error = new Error("Cuenta bancaria no existente");
        return res.status(404).json({ error: error.message });
      }
      res.json(banckAccountt);
    } catch (error) {
      console.log(error);
    }
  };

  static updateBanckAccount = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const banckAccount = await Account.findByIdAndUpdate(id, req.body);

      if (!banckAccount) {
        const error = new Error("Remesa no existe");
        return res.status(404).json({ error: error.message });
      }

      await banckAccount.save();
      res.send("Cuenta bancaria actualizada");
    } catch (error) {
      console.log(error);
    }
  };

  static deleteBanckAccount = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const banckAccount = await Account.findById(id);

      if (!banckAccount) {
        const error = new Error("Cuenta bancaria no existente");
        return res.status(404).json({ error: error.message });
      }

      await banckAccount.deleteOne();
      res.send("Cuenta bancaria eliminado");
    } catch (error) {
      console.log(error);
    }
  };
}
