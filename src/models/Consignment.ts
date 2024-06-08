import mongoose, { Schema, Document } from "mongoose";

export type ConsigmentType = Document & {
  remittanceCode: string;
  phone: string;
  reasonOrJustification: string;
  relationShipPerson: string;
};

const ConsigmentSchema: Schema = new Schema({
  remittanceCode: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  reasonOrJustification: {
    type: String,
    required: true,
    trim: true,
  },
  relationShipPerson: {
    type: String,
    required: true,
    trim: true,
  },
});

const Consigment = mongoose.model<ConsigmentType>(
  "Consigment",
  ConsigmentSchema
);
export default Consigment;
