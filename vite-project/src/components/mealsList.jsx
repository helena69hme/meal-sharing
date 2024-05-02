import { useState, useEffect } from "react";
import ListItemWithBorder from "./listItemWithBorder.jsx";
import apiurl from "../apiurl.js";
import Meal from "./meal.jsx";

function MealsList() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(apiurl("/api/meals"))
      .then((response) => response.json())
      .then((data) => {
        setMeals(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching meals:", error));
  }, []);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        ((<h4 className="title">List of meals and prices</h4>),
        (
          <ul style={{ paddingLeft: "30px" }}>
            {meals.map((meal) => (
              <ListItemWithBorder key={meal.id}>
              <Meal meal={meal}/>
              </ListItemWithBorder>
               
              
            ))}
          </ul>
        ))
      )}
    </div>
  );
}
export default MealsList;