const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const mealsRouter = require("./api/meals");
const buildPath = path.join(__dirname, "../../dist");
const port = process.env.PORT || 3000;
const cors = require("cors");
const knex = require("./database");

// For week4 no need to look into this!
// Serve the built client html
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(cors());

router.use("/meals", mealsRouter);

//app.get("/my-route", (req, res) => {
//res.send("Hi friend");
//});

const todayDate = new Date();
//future meals
app.get("/future-meals", async (req, res) => {
  try {
    const futureMeals = await knex
      .select("*")
      .from("meal")
      .where("meal_time", ">", todayDate);
    if (futureMeals.lenght > 0) {
      res.status(200).json(futureMeals);
    }
    res
      .status(404)
      .send("Not found");
  } catch (err) {
    console.error("Server Error", err);
    res.status(500).send("Error: Unable to fetch");
  }
});

//past meals
app.get("/past-meals", async (req, res) => {
  try{
    const pastMeals = await knex
    .select("*")
    .from("meal")
    .where("meal_time", "<", todayDate);
    if (pastMeals.length > 0) {
      res.status(200).json(pastMeals);
    }
    res
    .status(404)
    .send("Not found");
  } catch (err) {
    console.error("Server Error", err);
    res.status(500).send("Error: Unable to fetch")
  }
})

//All meals
app.get("/all-meals", async (req, res) => {
  try{
  const allMeals = await knex
  .select("*")
  .from("meal")
  .orderBy("id");
  if (allMeals > 0) {
    res.status(200).json(allMeals);
  }
  res
  .status(400)
  .send("Not found");
} catch (err) {
  console.error("Server Error", err);
  res.status(500).send("Error: Unable to fetch")
}
})

//first meal
app.get("/first-meal" , async (req, res) => {
  try{
    const firstMeal = await knex
    .select("*")
    .from("meal")
    .orderBy("id")
    .limit(1);
    if (firstMeal > 0) {
      res.status(200).json(firstMeal);
    }
    res
    .status(404)
    .send("Not found");
  } catch (err) {
    console.error("Server Error", err);
    res.status(500).send("Error: Unable to fetch")
  }
})

//last meal
app.get("/last-meal", async (req, res) => {
  try{
    const lastMeal = await knex
    .select("*")
    .from("meal")
    .orderBy("id", "desc")
    .limit(1);
    if (lastMeal > 0) {
      res.status(200).json(lastMeal);
    }
    res
    .status(404)
    .send("Not found");
  } catch (err) {
    console.error("Server Error", err);
    res.status(500).send("Error:Unable to fetch")
  }
})



if (process.env.API_PATH) {
  app.use(process.env.API_PATH, router);
} else {
  throw "API_PATH is not set. Remember to set it in your .env file";
}

// for the frontend. Will first be covered in the react class
app.use("*", (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});

module.exports = app;
 