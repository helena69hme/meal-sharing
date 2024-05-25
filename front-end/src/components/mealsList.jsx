/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'

import { baseUrl } from '../apiurl.js'
import { MealCard } from './meal-card.jsx'

function MealsList() {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${baseUrl()}meals`)
        const data = await response.json()
        setMeals(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching meals:', error)
      }
    }

    getData()
  }, [])

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        ((<h4 className="title">List of meals and prices</h4>),
        (
          <div className="meals-list__wrapper">
            {meals.map((meal) => (
              <MealCard
                key={meal.id}
                meal={meal}
              />
            ))}
          </div>
        ))
      )}
    </div>
  )
}
export default MealsList
