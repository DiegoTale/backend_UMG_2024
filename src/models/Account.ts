import mongoose, { Schema, Document } from "mongoose";

export interface IAccount extends Document {
  accountName: number;
  accountNumber: string;
}

const AccountSchema: Schema = new Schema({
  accountName: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  accountNumber: {
    type: String,
    required: true,
    unique: true,
  },
});

const Account = mongoose.model<IAccount>("Account", AccountSchema);
export default Account;
