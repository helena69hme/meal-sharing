const express = require("express");
const router = express.Router();
const knex = require("../database");

  router.get("/", async (req, res) => {
    //week3
    const { maxPrice, availableReservations, title, dateAfter, dateBefore, limit, sortKey,} =
    req.query;
  
    let sortDir = req.query.sortDir;

    const response = {
      data: [],
      status: 200,
      message: "the message",
    };

  try {

    // api/meals?maxPrice=90
    if (maxPrice) {
      const result = await knex
        .select("*")
        .from("meal")
        .where("price", "<", +maxPrice);

      response.data = result;
    }

    //api/meals?availableReservations=true
    if (availableReservations===true) {
      const result = await knex
      .select('meal_id', 'meal_title', 'max_reservations', knex
      .raw('-SUM(number_of_guests)'), knex
      .raw('max_reservations - SUM(number_of_guests)'))
      .from('meal')
      .leftJoin('reservation', 'meal_id', 'reservation.meal_id')
      .groupBy('meal_id')
      .having(knex.raw('SUM(number_of_guests) < max_reservations'));

      response.data = result;
    } else {
      result = await knex
      .select('meal_id', 'meal_title', 'max_reservations', knex
      .raw('-SUM(number_of_guests)'), knex
      .raw('max_reservations - SUM(number_of_guests)'))
      .from('meal')
      .leftJoin('reservation', 'meal_id', 'reservation.meal_id')
      .groupBy('meal_id')
      .having(knex.raw('SUM(number_of_guests) > max_reservations'));

      response.data = result;
    }

    //api/meals?title=Rød%20grød
    if (title) {
      const result = await knex("meals")
      .select("*")
      .where("title", "like", `%${title}%`);

      response.data = result;
    }

    //api/meals?dateAfter=2022-10-01
    if (dateAfter) {
      const result = await knex
        .select("*")
        .from("meals")
        .where("meal_time", ">", new Date(dateAfter));

      response.data = result;
    }

    //api/meals?dateBefore=2022-08-08
    if (dateBefore) {
      const result = await knex("meals")
      .select("*")
      .where("meal_time", "<", dateBefore);

      response.data = result;
    }

    //api/meals?limit=7
    if (limit) {
      const result = await knex("meal")
        .select("*")
        .limit(+limit);

      response.data = result;
    }

    //api/meals?sortKey=price
    if (["meal_time", "max_reservations", "price"].includes(sortKey)) {
      const result = await knex("meal")
        .select("*")
        .orderBy(sortKey, sortDir === "desc" ? sortDir : "asc");

      response.data = result;
    }

    //api/meals?sortKey=price&sortDir=desc
    if (["meal_time", "max_reservations", "price"].includes(sortKey)) {

      if (sortDir === "asc" || sortDir === "desc") {
        const result = await knex("meal")
          .select("*")
          .orderBy(sortKey, sortDir);

        response.data = result;
      }
    }

    res.status(response.status).json({ data: response.data, message: response.message });
  } catch (error) {
    console.error("Server Error", error);
    res.status(500).json({ error: "ERROR" });
 
  }
});

module.exports = router;
