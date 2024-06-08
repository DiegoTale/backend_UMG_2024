import { Router } from "express";
import { body, param } from "express-validator";
import { handleInputErrors } from "../middlewares/validation";
import { TransferTypeController } from "../controllers/transferTypeControllet";

const router = Router();

router.post(
  "/",
  body("typeTransferName")
    .notEmpty()
    .withMessage("El tipo de transferencia es obligatorio"),
  handleInputErrors,
  TransferTypeController.createTransferType
);

router.get("/", TransferTypeController.getAllTransferType);

router.get(
  "/:id",
  param("id").isMongoId().withMessage("ID no válido"),
  handleInputErrors,
  TransferTypeController.getTransferTypeById
);

router.put(
  "/:id",
  param("id").isMongoId().withMessage("ID no válido"),
  body("typeTransferName")
    .notEmpty()
    .withMessage("El tipo de transferencia actualizada"),
  handleInputErrors,
  TransferTypeController.updateTransferType
);

router.delete(
  "/:id",
  param("id").isMongoId().withMessage("ID no válido"),
  handleInputErrors,
  TransferTypeController.deleteTransferType
);

export default router;
