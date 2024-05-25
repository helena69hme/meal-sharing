const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const mealsRouter = require("./api/meals");
const reservationsRouter = require("./api/reservations");
const reviewsRouter = require("./api/reviews.js");


const buildPath = path.join(__dirname, "../../dist");
const port = process.env.PORT || 3000;
const cors = require("cors");

//to get connected to the database
const knex = require("./database");

app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(cors());

router.use("/meals", mealsRouter);
router.use("/reservations", reservationsRouter);
router.use("/reviews", reviewsRouter);













const todayDate = new Date();
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
      .send("The data you have requested for Future Meals is not found");
  } catch (err) {
    console.error("Server Error", err);
    res.status(500).send("Error: Not able to fetch data for future meals");
  }
});

if (process.env.API_PATH) {
  app.use(process.env.API_PATH, router);
} else {
  throw "API_PATH is not set. Remember to set it in your .env file"
}

// for the frontend. Will first be covered in the react class
app.use("*", (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});

module.exports = app;
