const express = require("express");

const cors = require("cors");
const { connection } = require("./config/db");
const { UserRouter } = require("./routes/user.router");
const auth = require("./middlewares/auth.middleware");
const { foodsRouter } = require("./routes/food.router");
const exerciseRouter = require("./routes/exercise.router");

require("dotenv").config();

const PORT = process.env.port;

const app = express();

app.use(express.json());

app.use(cors());

app.use("/users", UserRouter)
app.use("/foods", auth, foodsRouter)
app.use("/exercise", exerciseRouter)

app.get("/", auth, async (req, res) => {
  try {
    res.json({ msg: "Access granted" })
    console.log(req.body)
  } catch (error) {
    res.json({ msg: "Access declined" })
  }
})
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (err) {
    console.log(err);
  }
  console.log(`server started at port ${PORT}`);
});
