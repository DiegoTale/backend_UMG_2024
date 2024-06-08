import mongoose, { Schema, Document } from "mongoose";

export interface ITransferType extends Document {
  accountName: number;
  status: boolean;
}

const TypeTransferSchema: Schema = new Schema({
  typeTransferName: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const TransferType = mongoose.model<ITransferType>(
  "TransferType",
  TypeTransferSchema
);
export default TransferType;
