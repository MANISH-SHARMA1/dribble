const express = require("express");
const dbConnect = require("./dbConnect");
const cors = require("cors");
const morgan = require("morgan");

const authRoute = require("./routers/auth");

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "djfo5hloh",
  api_key: "461488537141589",
  api_secret: "O3I4d-1C6QvCxdviWj3IRgTNQBw",
});

const app = express();

//middlewares
app.use(express.json({ limit: "10mb" }));
app.use(morgan("common"));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use("/auth", authRoute);

app.post("/");

const PORT = 4000;

dbConnect();

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
