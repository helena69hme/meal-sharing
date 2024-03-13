const express = require("express");
const router = express.Router();
const knex = require("../database");

//GET ---/api/reviews
router.get("/", async (req, res) => {
    try {
      const result = await knex
      .select("*")
      .from("review");
      if (result) {
        res
        .status(200).json({ data: result, message: "the review of all meals" });
      }
    
    } catch (error) {
      console.error("Server Error", error);
      res.status(500).json({ error: "unable to import data" });
    }
  });

  //GET ---/api/meals/:meal_id/reviews
router.get("/:meal_id", async (req, res) => {
    const mealId = req.params.meal_id;
    try {
      const result = await knex
      .from("reviews")
      .where({ meal_id: mealId });
      if (result) {
      res
      .status(200).json({ data: result, message: "The specific meal" });
      }
    } catch (error) {
      console.error("Server Error",error);
      res.status(500).json({ error: "unable to import data" });
    }
  });

  //POST ---/api/reviews
  router.post("/", async (req, res) => {
    try {
      const newReview = req.body;
      const NewReviewAdded = await knex
      .from("review")
      .insert(newReview);
      
      res
        .status(201)
        .json({ data: newReview, message: "the new review" });
    } catch (error) {
      console.error("Server Error", error);
      res.status(500).json({ error: "unable to import data" });
    }
  });

  //PUT ---/api/reviews/:id
  router.put("/:id", async(req,res)=>{
    try{
      const reviewId = req.params.id
      const updateReview = req.body
      const reviews = await knex
      .from("Review")
      .where("id","=", reviewId)
      .update(updateReview);
      
      res
      .status(200).json({ data: reviews, message: "the updated review" });

    }catch(error){
      console.error("Server Error", error);
      res.status(500).json({ error: "unable to import data" });
    }
  });

  //DELETE ---/api/reviews/:id
  router.delete("/:id", async (req, res) => {
    try {
      const { id: reviewId } = req.params;
      const deleteReview = await knex
      .from("review")
      .where("id", "=", reviewId)
      .del();
  
      if (deleteReview) {
        res.status(200).json({ data: deleteReview, message: "the review has deleted successfully" });
      }
    } catch (error) {
      console.error("Server Error", error);
      res.status(500).json({ error: "unable to import data" });
    }
  });
  module.exports = router;

