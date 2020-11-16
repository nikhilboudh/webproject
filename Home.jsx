import { Button } from 'bootstrap';
import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/invo-1.jpg"
import ph from "../src/Screenshot (43).png"
import pho from "../src/Screenshot (55).png"
import phot from "../src/Screenshot (56).png"
import p from "../src/Screenshot (57).png";
import Footer from"./Footer";




const Home =() =>{
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
  <NavLink to ="props.visit" className>
  </NavLink>
</div>
            
          </div>

<div className="col-lg-6 order-1 order-lg-2 header-img pl-500px">
<img src={ph} className="pho"/><br></br>

</div>
</div>
<h1 className="head1">Our Offrings</h1>
<div className="container-fluid m_5">
    <div className="row">
        <div className="col-10 mx-auto ">
        <div className="row gy-5">
            <div className="col-md-4 col-10 max-auto">
            <div className="card">
  <img src={pho} class="card-img-top" alt="invo img"/>
  <div class="card-body">
    <h5 className="card-title">Varity of high quality prodects</h5>
    <p className="card-text">We offer a vast amount of 
    Healthcare,Industrial, and scientific
supplies equipmant.Medical Devices,Surgical products
 and Hospital Furniture.our up-to-date industrial
  knowledge enable us to cater to your needs.</p>
    </div>
            </div>





            <div className="card">
  <img src={phot} class="card-img-top" alt="invo img"/>
  <div class="card-body">
    <h5 className="card-title">Competative pricing</h5>
    <p className="card-text">
we are known for the top-quality of products that the industry has to offer
 prices lower than other suppliers. Every one of our 
 client can trust they are recieving our best 
 prices upfront.</p>
    </div>
            </div>



            <div className="card">
  <img src={p} class="card-img-top" alt="invo img"/>
  <div class="card-body">
    <h5 className="card-title">Reliable Customer Services</h5>
    <p className="card-text">
we work in the health care industry,just
 like you .we take the time to get to know 
 you ,and we always keep your best interests in mind 
when adding and adjusting products in our catalog.</p>
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
    )}
        
export default Home;