import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (

 <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
    <Link class="navbar-brand" to="/">
        Navbar
        </Link>
  <button 
     class="navbar-toggler"
     type="button" 
     data-toggle="collapse" 
     data-target="#navbarNav" 
     aria-controls="navbarNav"
     aria-expanded="false" 
    aria-label="Toggle navigation"
 >

    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav m-auto">
      <li class="nav-item ">
        <Link class="nav-link"to="/home">
            Home 
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/features">
            Features
            </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/pricing">
            Pricing
            </Link>
      </li>
      <li class="nav-item ">
        <Link class="nav-link disabled" to="/disabled">
            Disabled
            </Link>
      </li>
    </ul>
        <div class="dropdown">
      <button class="dropbtn">Hooks</button>
      <div class="dropdown-content">
      <Link to="use-state">useState</Link>
      
      </div>
    </div>
    <div>
     <Link to='/login'><button  className='btn btn-primary'>Login/SignUp</button>
     </Link> 
    </div>
  </div>

    </div>
</nav>
    </div>

   
  );
};

export default Navbar;