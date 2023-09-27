import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes/Router'

function App() {


  return (
    <div className='container mx-auto px-2'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
