
import '../App.css'
function NavBar(){
    return(
        <div >
            <nav >
                <div>
                    <img src='/images/brand_logo.png' />
                </div>
                <ul>
                <li>Menu</li>
                <li>
                    <div class="dropdown">
                        Solution
                    
      <ul class="dropdown-content">
        <li>AI Doctor</li>
        <li>Lab Test Interpretation</li>
        <li>Second Opinion</li>
      </ul>
    </div>
  </li>
                <li>About</li>
                <li>Contact</li>
                </ul>

                <button>Logout</button>
            </nav>
        </div>
    )
}

export default NavBar;