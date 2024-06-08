import colors from "colors";
import mongoose from "mongoose";
import { exit } from "node:process";

export const MongoDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB);
    const url = `${connection.host}:${connection.port}`;
    console.log(colors.magenta.bold(`MongoDB Conectado en: ${url}`));

    return true;
  } catch (error) {
    console.log(colors.red.bold("Error al conectar a MongoDB"));
    exit(1);
  }
};
