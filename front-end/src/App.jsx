import { Layout } from './components/Layout'
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'

import './App.css'

export function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  )
}
