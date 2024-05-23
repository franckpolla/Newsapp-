 import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!); //the exclamation mark is used to tell typescript that this is not nul or undefined because typescript is smart enough to know that this is not null or undefined because By default, TypeScript treats environment variables as potentially undefined, even if you expect them to be set.

    console.log("DB Connected");
  } catch (error: any) {
    console.log(error.message);
    process.exit(1);
  }
};

export default dbConnect;
 