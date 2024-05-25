const express = require('express')
const router = express.Router()
const knex = require('../database')

router.get('/', async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex('meal').select('*')
    response.json(titles)
  } catch (error) {
    throw error
  }
})

router.get('/:id', async (request, response) => {
  try {
    const id = request.params.id
    const [mealById] = await knex.select('*').from('meal').where('id', id)
    if (mealById) {
      response.status(200).json(mealById)
    } else {
      response.status(404).send('The meal was not found')
    }
  } catch (err) {
    response.status(500).json({ err: 'Server Error: Not able to fetch data' })
  }
})

router.get('/:id/reservations', async (req, res) => {
  try {
    const id = +req.params.id

    const totalGuests = await knex('reservation')
      .where('meal_id', id)
      .sum('number_of_guests as totalGuests')
      .first()

    const meals = await knex('meal')
      .select('max_reservations')
      .where('id', id)
      .first()

    const stars = await knex('review')
    .where('meal_id', id)
    .avg('stars as sumRating')

    const availableMeals =
      meals.max_reservations - (totalGuests.totalGuests || 0)
      res.status(200).json({ stars: stars[0].sumRating, availableMeals, maxReserve: meals.max_reservations })
      
  } catch (error) {
    console.error('Internal Server Error', error)
    res.status(500).json({
      error:
        'Server Error: Unable to fetch meal reservation data. Try again later',
    })
  }
})

module.exports = router
