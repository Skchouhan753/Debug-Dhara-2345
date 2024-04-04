const { Router } = require("express");
const { FoodModel } = require("../models/food.model");

const foodsRouter = Router();

foodsRouter.post("/create", async (req, res) => {
    try {
        const data = req.body;
        const food = FoodModel(data)
        await food.save()
        res.status(200).send({ msg: "Foods saved to DB" });
    } catch (error) {
        res.status(400).send({ msg: "Error", error })
    }
});


foodsRouter.get("/", async (req, res) => {
    const { q } = req.query;
    try {
        const foods = await FoodModel.find({ "name": { $regex: q, $options: "i" } })
        res.status(200).send(foods)

    } catch (error) {
        res.status(400).json({ msg: "Error", error })
    }
})


module.exports = { foodsRouter };