import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../views/Home'
import { Meal } from '../views/Meal'
import { Reservation } from '../components/Reservation'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/meals',
    element: <Home />,
  },
  {
    path: '/meals/:mealId',
    element: <Meal />,
  },
  {
    path: '/meals/:mealId/reservation',
    element: <Reservation />,
  },
  
])
