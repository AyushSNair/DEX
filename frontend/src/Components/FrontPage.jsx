import './FrontPage.css';
import '../App.css';
function FirstPage(){
    return(
    <main className = "hero container">
        <div className='hero-content'>
                <h1>DEX Personalized-Wellness-AI</h1>
                <p>DEX leverages your medical records and daily routine to create a personalized plan for a healthier life.</p>
                <div className='hero-btn'>
                    <button className='shop-now-btn'>Shop Now</button>
                    <button className='category-btn'>Category</button>
                </div>

                
                
        </div>
        <div className="hero-image" >
                <img src = "/images/connect.png" />
            </div>
        </main>  
    )
}

export default FirstPage;