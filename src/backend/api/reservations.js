const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/contact_name", async (request, response) => {
  try {
    const allReservations = await knex("reservation")
    .select("contact_name");
    response.json(allReservations);
  } catch (error) {
    throw error;
  }
});

//Get
router.get("/", async (req, res) => {
    try {
      const allReservations = await knex
      .select("*")
      .from("reservation");
      if (allReservations) {
        res.status(200).json(allReservations);
      } else {
        res.status(404).send("Request not found");
      }
    } catch (error) {
      res.status(500).json({ error: "Server Error: unable to import data" });
    }
  });

  //Post
  router.post("/", async (req, res) => {
    try {
      const newReservation = req.body;
      const newReservationAdded = await knex("reservation")
      .insert(newReservation);
      if (newReservationAdded) {
        res.status(201).json({ message: "Good creation" });
      }
      res.status(404).send("Request not found");
    } catch (err) {
      res.status(500).send({ error: "Server Error: unable to import data" });
    }
  });

  //Get
  router.get("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const reservationById = await knex
        .select("*")
        .from("reservation")
        .where("id", id);
      if (mealById) {
        res.status(200).json(reservationById);
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
    const updateReservation = req.body;
    const updatedReservationById = await knex("meal")
      .where("id", id)
      .update(updateReservation);
    if (updatedReservationById) {
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
      const deletedReservationById = await knex("meal")
      .where("id", id)
      .del();
      if (deletedReservationById) {
        res.json({ message: "Good deleting" });
      } else {
        res.status(404).json({ error: "Request not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Server Error: unable to import data" });
    }
  });

  module.exports = router;
  