import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { faker } from '@faker-js/faker'

export function MealCard({ meal }) {
  return (
    <div className="meal-card">
      <h3 className="meal-card__title">{meal.title}</h3>
      <p className="meal-card__description">{meal.description}</p>
      <p className="meal-card__price">
        <strong>Price: </strong>
        <span style={{ color: 'brown' }}>{meal.price} kr. </span>
      </p>
      <div className="meal-card__image-wrapper">
        <img
          className="meal-card__image"
          src={faker.image.urlLoremFlickr({
            width:400,
            height:400,
            category: 'food',
          })}
          alt={meal.title}
        />
      </div>
      <Link
        to={`/meals/${meal.id}`}
        className="meal-card__button"
      >
        Read more
      </Link>
    </div>
  )
}

MealCard.propTypes = {
  meal: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
}
