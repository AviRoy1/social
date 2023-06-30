const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routers/user");
const postRouter = require("./routers/post");
const cors = require("cors");
const socket = require("socket.io");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected successfully"))
  .catch(() => {
    console.log("Some error occured");
  });

app.use(cors());
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/post", postRouter);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT- ${process.env.PORT}`);
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();

io.on("connection", (socket) => {
  global.chatsocket = socket;

  socket.on("addUser", (id) => {
    onlineUsers.set(id, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-receive", data.message);
    }
  });
});
