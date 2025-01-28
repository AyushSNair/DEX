import "./Workoutplans.css";
import { useNavigate } from "react-router-dom";

function Workoutplans() {
  const navigate = useNavigate();
  return (
    <>
      <div className="headingworkoutplans">
        <h1>WORKOUT PLANS</h1>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="title">Jump lunges</p>
            <p>Hover Me</p>
          </div>
          <div className="flip-card-back">
            <p className="title">INSTRUCTIONS</p>
            <p>
              Begin in a lunge position: Right leg forward, left leg back. Right
              knee bent at 90 degrees. Push through both legs and jump up.
              Switch legs mid-air. Land with your left leg forward and right leg
              back. Keep knees bent or straight, depending on your fitness
              level. Drop back into a lunge position. Repeat the movement.
            </p>
            <button
              className="learnmorebutton"
              onClick={() => navigate("/jumplunges")}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="flip-card1">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img></img>
            <p className="title">Plank</p>
            <p>Hover Me</p>
          </div>
          <div className="flip-card-back">
            <p className="title">INSTRUCTIONS</p>
            <p>
              Start in a plank position: Choose either a high plank (arms
              straight) or a low plank (forearms on the floor). Adaptation: Drop
              to your knees if needed. Variation: Perform side planks and switch
              sides at the 30-second mark. Challenge Option: Lift one leg at a
              time. Raise each foot a few inches to engage your core further.
              Focus on maintaining proper form throughout the exercise.
            </p>
            <button
              className="learnmorebutton"
              onClick={() => navigate("/plank")}
            >
              {" "}
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="flip-card1">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img></img>
            <p className="title">Dolphin Push-Ups</p>
            <p>Hover Me</p>
          </div>
          <div className="flip-card-back">
            <p className="title">INSTRUCTIONS</p>
            <p>
              Begin in a forearm plank position, with your body straight and
              core engaged. Push your hips up toward the ceiling, forming an
              inverted “V” shape (similar to Downward Dog). Lower your hips back
              down to the starting plank position, engaging your shoulders and
              core. Tip: Keep your legs straight or gently bent, but ensure they
              remain even throughout the movement. Modification: If Dolphin
              Push-Ups feel too challenging, substitute with regular push-ups.
              Focus on maintaining proper form to maximize the benefits for your
              core, legs, and shoulders.

              <button className="learnmorebutton" onClick ={()=>navigate("/dolphin")}> Learn More</button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Workoutplans;
