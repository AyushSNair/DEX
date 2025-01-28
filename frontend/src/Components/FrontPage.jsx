import "./FrontPage.css";
import "../App.css";
import { useNavigate } from "react-router-dom";
function FirstPage() {
  const navigate = useNavigate();
  return (
    <>
      <main className="hero container">
        <div className="hero-content">
          <h1>DEX Personalized-Wellness-AI</h1>
          <p>
            DEX leverages your medical records and daily routine to create a
            personalized plan for a healthier life.
          </p>

          <div className="supportcardDiv">
            <div className="supportCard">
              <div class="image">
                
                <button onClick={() => navigate("/workout")}>Go to Workout</button>
              </div>
              <span class="title"></span>
            </div>

            <div className="supportCard">
              <div class="image">
                
                <button onClick={() => navigate("/diet")}>Go to diet</button>
              </div>
              <span class="title"></span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src="/images/connect.png" />
        </div>
      </main>

      <div className="secondDiv">
        <div>
          <h1>Make Informed Health Decisions</h1>
        </div>
      </div>

      <div className="para">
        <p>
          Gain the insights you need to understand your health and make
          confident, well-informed decisions about your well-being.
        </p>
      </div>

      <div className="parent5">
        <div className="card5">
          <div className="content-box5">
            <span className="card-title5">AI COMPANION</span>
            <p className="card-content5">AI to plan your workout and diet plans</p>
            <span className="see-more5">Chat with AI Doctor</span>
          </div>
          <div className="date-box5">
          <span className="monthjune5">Dex AI</span>

            <img src="/images/airobot.png" className="month5"></img>
          </div>
        </div>
      </div>

      <div className="benefitsdiv">
        <h1>Benefits of Personal AI Health Assistant</h1>
      </div>
      <div className="belowbenefits">
        <span>
          We have all you need to better understand your health and make
          informed and accurate decisions about your well-being.
        </span>
      </div>
      

      {/* Cards Below Benfits of Personal AI HEalth Assistant */}
      <div className = 'benefitscard'>
      <div className="container">
      {/* Github Card */}
      <div
        data-text="Empowering Preventive Wellness"
        style={{ "--r": "-15" }}
        className="glass"
      >
        <svg
          viewBox="0 -960 960 960"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M420-340h120v-100h100v-120H540v-100H420v100H320v120h100v100Zm60 260q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z"
          ></path>
        </svg>
      </div>

      {/* Code Card */}
      <div
        data-text="Individualized Health Solutions"
        style={{ "--r": "5" }}
        className="glass"
      >
        <svg
          viewBox="0 -960 960 960"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M400-720q-33 0-56.5-23.5T320-800q0-33 23.5-56.5T400-880q33 0 56.5 23.5T480-800q0 33-23.5 56.5T400-720Zm260 480q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM864-80 756-188q-22 14-46 21t-50 7q-75 0-127.5-52.5T480-340q0-75 52.5-127.5T660-520q75 0 127.5 52.5T840-340q0 26-7 50t-21 46l108 108-56 56Zm-424 0v-121q15 24 35.5 44t44.5 36v41h-80Zm-160 0v-520q-61-5-121-14.5T40-640l20-80q84 23 168.5 31.5T400-680q87 0 171.5-8.5T740-720l20 80q-59 16-119 25.5T520-600v41q-54 35-87 92.5T400-340v10q0 5 1 10h-41v240h-80Z"
          ></path>
        </svg>
      </div>

      {/* Earn Card */}
      <div
        data-text="Comprehensive Health Insights
"
        style={{ "--r": "25" }}
        className="glass"
      >
        <svg
          viewBox="0 -960 960 960"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M680-320q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-440q0-17-11.5-28.5T680-480q-17 0-28.5 11.5T640-440q0 17 11.5 28.5T680-400ZM440-40v-116q0-21 10-39.5t28-29.5q32-19 67.5-31.5T618-275l62 75 62-75q37 6 72 18.5t67 31.5q18 11 28.5 29.5T920-156v116H440Zm79-80h123l-54-66q-18 5-35 13t-34 17v36Zm199 0h122v-36q-16-10-33-17.5T772-186l-54 66Zm-76 0Zm76 0Zm-518 0q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v200q-16-20-35-38t-45-24v-138H200v560h166q-3 11-4.5 22t-1.5 22v36H200Zm80-480h280q26-20 57-30t63-10v-40H280v80Zm0 160h200q0-21 4.5-41t12.5-39H280v80Zm0 160h138q11-9 23.5-16t25.5-13v-51H280v80Zm-80 80v-560 137-17 440Zm480-240Z"
          ></path>
        </svg>
      </div>
    </div>

      
    </div>

 

    </>
  );
}

export default FirstPage;
