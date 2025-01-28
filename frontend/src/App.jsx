import './App.css';
import NavbarComponent from './Components/nav.jsx';
import FrontPage from './Components/FrontPage.jsx';
import { Routes, Route } from 'react-router-dom';
import WorkoutComponent from './Components/WorkoutComponent.jsx';
import Workoutplans from './Components/Workoutplans.jsx';
import Jumplunges from './Components/Jumplunges.jsx'
import PlankComponent from './Components/Plank.jsx';
import DolphinPlank from './Components/Dolphinplank.jsx';
import DietPage from './Components/DietPage.jsx';
function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/workout" element={<WorkoutComponent />} />
        <Route path="/workoutplans" element={<Workoutplans/>} />
        <Route path="/jumplunges" element = {<Jumplunges/>} />
        <Route path="/plank" element = {<PlankComponent/>} />
        <Route path="/dolphin" element = {<DolphinPlank/>} />
        <Route path="/diet" element = {<DietPage/>} />
      </Routes>
    </>
  );
}

export default App;


