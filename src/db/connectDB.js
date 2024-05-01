import mongoose from "mongoose";

let dbConnectionURI = process.env.DB_CONNECTION_URL

dbConnectionURI = dbConnectionURI.replace('<username>', process.env.DB_USER)
dbConnectionURI = dbConnectionURI.replace('<password>', process.env.DB_PASS)
const connectDB = async () => {
  try {
    const connectionInterface =
      await mongoose.connect(dbConnectionURI, { dbName: process.env.DB_NAME })
    console.log(`Database connection successful!! DB  HOST: ${connectionInterface.connection.host}`)

  } catch (error) {
    console.log("Database connection failed!!", error)
    process.exit(1)
  }

}

export default connectDB