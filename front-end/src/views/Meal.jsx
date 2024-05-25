import './Meal.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../apiurl'
import { Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { Rating } from 'react-simple-star-rating'

export function Meal() {
  const { mealId } = useParams()
  const [mealData, setMealData] = useState(undefined)
  const [reviews, setReviews] = useState(undefined)
  const [showModal, setShowModal] = useState(false)

  const fetchMealDetails = async () => {
    if (mealData) return

    try {
      const response = await fetch(`${baseUrl()}meals/${mealId}`)
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
        ...reservation,
      })
      console.log({ mealData })
    } catch (error) {
      console.error('Error fetching meal details:', error)
    }
  }

  const fetchReviewDetails = async () => {
    if (reviews) return

    try {
      const response = await fetch(`${baseUrl()}reviews/${mealId}`)
      const { data } = await response.json()

      setReviews(data)
    } catch (error) {
      console.error('Error fetching reviews:', error)
    }
  }

  useEffect(() => {
    fetchMealDetails()
    fetchReviewDetails()
  }, [])

  // Toggle modal visibility when the user clicks on the review div
  function toggleModal() {
    setShowModal(!showModal)
  }

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
        <div
          className="meal-data__review"
          onClick={toggleModal} // Change to toggleModal
        >
          <Rating
            initialValue={mealData.stars}
            readonly={true}
          />
        </div>
        <div className="meal-data__reservation-info">
          <span>Location: {mealData.location}</span>
          <span>Time: {mealData.mealTime}</span>
          <span>Max reservation no: {mealData.maxReserve}</span>
          <span>Available no to reserve: {mealData.availableMeals}</span>
        </div>

        {/* Render modal based on showModal state */}
        {showModal && (
          <>
            <div
              className="meal-data__modal-bg"
              onClick={toggleModal}
            ></div>
            <div className="meal-data__modal-body">
              <h1>Ratings</h1>
              <div className="meal-data__modal-body-2">
                {reviews?.map((review, index) => (
                  <div
                    className="meal-data__modal-body-review"
                    key={index}
                  >
                    <Rating
                      emptyColor="gray"
                      fillColor="green"
                      size={20}
                      initialValue={review.stars}
                    />
                    <span>{review.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
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
