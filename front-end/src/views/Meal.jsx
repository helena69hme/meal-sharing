import './Meal.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../apiurl'
import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners'

export function Meal() {
  const { mealId } = useParams()
  const [mealData, setMealData] = useState(undefined)

  const fetchMealDetails = async () => {
    if (mealData) return

    try {
      const response = await fetch(`${baseUrl()}meals/${mealId}`)
      if (response.ok) {
        const data = await response.json()

        const reservationResponse = await fetch(
          `${baseUrl()}meals/${mealId}/reservations`
        )
        const reservation = await reservationResponse.json()

        const date = new Date(data.meal_time)
        setMealData({
          ...data,
          mealTime: `${date.getDate()}-${
            date.getMonth() + 1
          }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
          availableMeals: reservation.availableMeals,
          maxReservation: reservation.maxReserve,
        })
      } else {
        throw new Error('Failed to fetch meal details')
      }
    } catch (error) {
      console.error('Error fetching meal details:', error)
      console.error('The meal does not exist')
    }
  }

  useEffect(() => {
    fetchMealDetails()
  }, [])

  if (mealData) {
    return (
      <div className="meal-data">
        <h3 className="meal-data__title">{mealData.title}</h3>
        <p className="meal-data__description">{mealData.description}</p>
        <p className="meal-data__price">
          <strong>Price: </strong>
          <span style={{ color: 'brown' }}>{mealData.price} kr. </span>
        </p>
        <div className="meal-data__image-wrapper">
          <img
            className="meal-data__image"
            src={mealData.image_url}
            alt={mealData.title}
          />
        </div>
        <Link to={`/meals/${mealId}/reservation`}>
        <button
          className="meal-data__reservation-button"
          disabled={Number(mealData.availableMeals) <= 0}
        >
          {Number(mealData.availableMeals) > 0
            ? 'Go to reservation page'
            : 'reservation is full'}
        </button>
        </Link>
        <div className="meal-data__reservation-info">
          <span>Location: {mealData.location}</span>
          <span>Time: {mealData.mealTime}</span>
          <span>Max reservation no: {mealData.maxReservation}</span>
          <span>Available no to reserve: {mealData.availableMeals}</span>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="meal-data__loader">
        <BeatLoader color="#36d7b7" />
      </div>
    </>
  )
}
