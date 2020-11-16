import React from 'react';
import { NavLink } from 'react-router-dom';
import photo from "../src/Screenshot (54).png"


const Navbar
 =()=>{
    return(
<>
<div className="header">
<div className="container-fluid nav_bg ">
    <div className="row">
    <div className="col-10 mx-auto ">
      
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink activeClassName="in" exact className="navbar-brand" to="#"><img src= {photo} alt="invo medics "/></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink activeClassName="act" exact className="nav-link" to="/">Home <span className="sr-only ">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="act"  exact  className="nav-link" to="/About">About</NavLink>
      </li>



      <li className="nav-item">
        <NavLink activeClassName="act" exact className="nav-link" to="/Contact">Contact</NavLink>
      </li>



      <li className="nav-item">
        <NavLink activeClassName="act" exact className="nav-link" to="/Products">Products</NavLink>
      </li>



      
      <li className="nav-item">
        <NavLink activeClassName="act" exact className="nav-link" to="/Covid_19">Covid_19</NavLink>
      </li>




     
     
     
    </ul>
    
  </div>
</nav>
      
</div>
    </div>
    </div>

</div>

</>
    );
};
export default Navbar;

