import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

const mongo_URL =
  "mongodb+srv://admin:admin@cluster0.arx43qq.mongodb.net/?retryWrites=true&w=majority";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));

app.use("/api", router );

mongoose.set("strictQuery", false);

async function startApp() {
  try {
    await mongoose.connect(mongo_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

startApp();
