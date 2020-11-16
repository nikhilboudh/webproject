import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/invo-1.jpg"
import ph from "../src/Screenshot (43).png"

const Comman
 =() =>{
    return(
      <>
<section id="header" className="">

<div className="container-fluid nav_bg">
    <div className="row">
        <div className="col-10 mx-auto ">
        <div className="row">

          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
            <h2 className="head2">All <strong >Medical-Equipments </strong><br></br>are available here</h2>
            <button className="but">contact now</button>
<div className="mt-3">
  <NavLink to ="props.visit" className="btn-get-started">
  </NavLink>
</div>
            
          </div>

<div className="col-lg-6 order-1 order-lg-2 header-img">
<img src={ph} className="pho"/><br></br>
<h1></h1>
</div>
</div>
        </div>
    </div>
</div>
</section>


      </>
    )}
        
export default Comman
;