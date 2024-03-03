const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/title", async (request, response) => {
  try {
    const titles = await knex("meals").select("title");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

//Get
router.get("/", async (req, res) => {
  try {
    const allMeals = await knex.select("*").from("meal");
    if (allMeals) {
      res.status(200).json(allMeals);
    } else {
      res.status(404).send("Request not found");
    }
  } catch (error) {
    console.error("Server Error", err);
    res.status(500).json({ error: "Server Error: unable to import data" });
  }
});

//Post
router.post("/", async (req, res) => {
  try {
    const newMeal = req.body;
    const newMealAdded = await knex("meal").insert(newMeal);
    if (newMealAdded) {
      res.status(201).json({ message: "good creation" });
    }
    res.status(404).send("Request not found");
  } catch (err) {
    console.error("Server Error", err);
    res.status(500).send({ error: "Server Error: unable to import data" });
  }
});

//Get
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const mealById = await knex
    .select("*")
    .from("meal")
    .where("id", id);
    if (mealById) {
      res.status(200).json(mealById);
    } else {
      res.status(404).send("Request not found");
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error: unable to import data" });
  }
});

//Put
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateMeal = req.body;
    const updatedMealById = await knex("meal")
      .where("id", id)
      .update(updateMeal);
    if (updatedMealById) {
      res.json({ message: "Good updating" });
    } else {
      res.status(404).send("Request not found");
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error: unable to import data" });
  }
});

//Delete
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedById = await knex("meal")
    .where("id", id)
    .del();
    if (deletedById) {
      res.json({ message: "Good deleting" });
    } else {
      res.status(404).json({ error: "Request not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error: unable to import data" });
  }
});


module.exports = router;
