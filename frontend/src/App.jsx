import './App.css'
import NavbarComponent from './Components/nav.jsx'
import FrontPage from './Components/FrontPage.jsx'
import WorkoutComponent from './Components/WorkoutComponent.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {

  return (
    <>
    <NavbarComponent/>
    <FrontPage/>
    </>   
  )
}

export default App
