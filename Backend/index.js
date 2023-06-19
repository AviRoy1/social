const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routers/user");
const postRouter = require("./routers/post");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected successfully"))
  .catch(() => {
    console.log("Some error occured");
  });

app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/post", postRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT- ${process.env.PORT}`);
});
