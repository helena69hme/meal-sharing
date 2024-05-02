import React from "react";
import PropTypes from "prop-types";
import ListItemWithBorder from "./listItemWithBorder";

function Meal({ meal }) {
  const specialMeals = ["Ghorme sabzi", "Sushi"];
  return (
    <ListItemWithBorder>
      <div className="meal-card">
        <h3>
          {meal.title}{" "}
          
            <img
              className="offer-image"
              src="./"
              alt="VegetarianStir-Fry"
            />
         
        </h3>
        <p className="description">{meal.description}</p>
        <p>
          <strong>Price: </strong>
          <span style={{ color: "brown" }}>{meal.price} kr. </span>
        </p>
        <p>
          <img className="meal-image" src={meal.image_url} alt={meal.title} />
        </p>
      </div>
    </ListItemWithBorder>
  );
}
Meal.propTypes = {
  meal: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
export default Meal;