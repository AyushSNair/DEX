import './App.css';
import NavbarComponent from './Components/nav.jsx';
import FrontPage from './Components/FrontPage.jsx';
import { Routes, Route } from 'react-router-dom';
import WorkoutComponent from './Components/WorkoutComponent.jsx';
import Workoutplans from './Components/Workoutplans.jsx';
import Learnmore from './Components/Learnmore.jsx';
function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/workout" element={<WorkoutComponent />} />
        <Route path="/workoutplans" element={<Workoutplans/>} />
        <Route path="/learnmore" element = {<Learnmore/>} ></Route>
      </Routes>
    </>
  );
}

export default App;
