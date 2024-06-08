import { Router } from "express";
import { body, param } from "express-validator";
import { ConsignmentController } from "../controllers/consignmentController";
import { handleInputErrors } from "../middlewares/validation";

const router = Router();

router.post(
  "/",
  body("remittanceCode")
    .notEmpty()
    .withMessage("Código de remesa es obligatorio"),
  body("phone").notEmpty().withMessage("Número de teléfono es obligatorio"),
  body("reasonOrJustification")
    .notEmpty()
    .withMessage(
      "Motivo o justificación de la recepción de fondos es obligatorio"
    ),
  body("relationShipPerson")
    .notEmpty()
    .withMessage("Parentesco con la persona que envía la remesa"),
  handleInputErrors,
  ConsignmentController.chargeConsignment
);
router.get("/", ConsignmentController.getAllConsignments);

router.get(
  "/:id",
  param("id").isMongoId().withMessage("ID no válido"),
  handleInputErrors,
  ConsignmentController.getConsignmentById
);

router.put(
  "/:id",
  param("id").isMongoId().withMessage("ID no válido"),
  body("remittanceCode")
    .notEmpty()
    .withMessage("Código de remesa es obligatorio"),
  body("phone").notEmpty().withMessage("Número de teléfono es obligatorio"),
  body("reasonOrJustification")
    .notEmpty()
    .withMessage(
      "Motivo o justificación de la recepción de fondos es obligatorio"
    ),
  body("relationShipPerson")
    .notEmpty()
    .withMessage("Parentesco con la persona que envía la remesa"),
  handleInputErrors,
  ConsignmentController.updateConsignment
);

router.delete(
  "/:id",
  param("id").isMongoId().withMessage("ID no válido"),
  handleInputErrors,
  ConsignmentController.deleteConsignment
);

export default router;
