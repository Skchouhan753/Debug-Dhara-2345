const express = require("express");

const cors = require("cors");
const { connection } = require("./config/db");

require("dotenv").config();

const PORT = process.env.port;

const app = express();

app.use(express.json());

app.use(cors());

app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`server started at port ${PORT}`);
    console.log("connected to DB");
  } catch (err) {
    console.log(err);
  }
});
