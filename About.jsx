import React from 'react';
import { NavLink } from 'react-router-dom';
import Comman from './Comman';
import a from "../src/Screenshot (53).png"
import ab from "../src/Screenshot (57).png"
import abo from "../src/Screenshot (58).png";
import ph from "../src/Screenshot (57).png"
import Footer from"./Footer";





const About =()=>{
    return(
<>

<section id="header" className="">


<div className="container-fluid nav_bg">
    <div className="row">
        <div className="col-10 mx-auto ">
        <div className="row">

          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
            <h2 className="head2">All <strong >Medical-Equipments </strong><br></br>are available here</h2>
            <div className="butt">   <NavLink to="/Contact" className="but">Contact Now</NavLink> </div>
<div className="mt-3">
  <NavLink to ="props.visit" className="btn-get-started">
  </NavLink>
</div>
            
          </div>

<div className="col-lg-6 order-1 order-lg-2 header-img pl-500px">
<img src={ph} className="phot"/><br></br>

</div>
</div>
<h1 className="head1"> About us </h1>

<div className="container-fluid m_5">
    <div className="row">
        <div className="col-10 mx-auto ">
        <div className="row gy-5">
            <div className="col-md-4 col-10 max-auto">
            <div className="card">
  <img src={a} class="card-img-top" alt="invo img"/>
  <div class="card-body">
    <h5 className="card-title">Who We Are</h5>
    <p className="card-text">
we have designed a strict quality policy to achive the following results in our ventures Invomedics is a one-stop solution for Medical Equipment, Devices and medical Accessories</p>
    </div>
            </div>





            <div className="card">
  <img src={ab} class="card-img-top" alt="invo img"/>
  <div class="card-body">
    <h5 className="card-title">Healthcare Innovation</h5>
    <p className="card-text">
    company's mission  is to provide world class innovative products for domestic and global market. The company is commited to bringing reliable,long-lasting & quality products 
from world over to catter the medical specialists,Institution,distributors and associates .</p>
    </div>
            </div>



            <div className="card">
  <img src={abo} class="card-img-top" alt="invo img"/>
  <div class="card-body">
    <h5 className="card-title">Dedicated World Class Service</h5>
    <p className="card-text">

    our array of cardiology,cardic surgery & Nephrology with some General Healthcare Products is perfectly designed by expert after years of research . To be the leader in this domain,we have required the team of engineer,medical experts,hardcore sales professional ,business-management specialists,etc .Our team make us able to offer error free healthcare disposable in the domestic market and import of the same in India . </p>
    </div>
            </div>

          </div>
          </div>
<Footer/>
  </div>

</div>

        </div>
        </div>

</div>

</div>

      


   
</section>
</>
    );
};
export default About;
