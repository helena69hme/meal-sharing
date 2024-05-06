import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../views/Home'
import { Meal } from '../views/Meal'

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
])
