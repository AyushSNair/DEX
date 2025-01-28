import "./WorkoutComponent.css"
import { useNavigate } from 'react-router-dom'
function WorkoutComponent() {
  const navigate = useNavigate();
  return (
    <>
      <form class="form">
        <p class="form-title">User Info Form</p>
        <div class="input-container">
          <input placeholder="Enter some info" type="email" />
          
        </div>
        <div class="input-container">
          <input placeholder="Enter some info" type="password" />

          
        </div>

        <div class="input-container">
          <input placeholder="Enter some info" type="password" />

          
        </div>

        <div class="input-container">
          <input placeholder="Enter some info" type="password" />

          
        </div>
        <button onClick ={()=>navigate("/workoutplans")} >
          Continue
        </button>

    </form>
    </>
  );
}

export default WorkoutComponent;
