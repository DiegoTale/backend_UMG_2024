import { Router } from "express";
import { body, param } from "express-validator";
import { ConsignmentController } from "../controllers/consignmentController";
import { handleInputErrors } from "../middlewares/validation";
import { AccountController } from "../controllers/accountController";

const router = Router();

router.post(
  "/",
  body("accountName")
    .notEmpty()
    .withMessage("El nombre de la cuenta es obligatorio"),
  body("accountNumber")
    .isLength({ min: 10 })
    .withMessage("El número de la cuenta es obligatorio, minimo 10 caracteres"),
  handleInputErrors,
  AccountController.createBanckAccount
);

router.get("/", AccountController.getAllBanckAccount);

router.get(
  "/:id",
  param("id").isMongoId().withMessage("ID no válido"),
  handleInputErrors,
  AccountController.getBanckAccountById
);

router.put(
  "/:id",
  param("id").isMongoId().withMessage("ID no válido"),
  body("accountName")
    .notEmpty()
    .withMessage("El nombre de la cuenta es obligatorio"),
  body("accountNumber")
    .isLength({ min: 10 })
    .withMessage("El número de la cuenta es obligatorio, minimo 10 caracteres"),
  handleInputErrors,
  AccountController.updateBanckAccount
);

router.delete(
  "/:id",
  param("id").isMongoId().withMessage("ID no válido"),
  handleInputErrors,
  AccountController.deleteBanckAccount
);

export default router;
