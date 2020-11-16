import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from"./Footer";

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Contact =()=>{
    return(
<>

<section id="header" className="">

<div className="container-fluid nav_bg">
    <div className="row">
        <div className="col-10 mx-auto ">
        <div className="row">

          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1"></div>




<div className="Social">
    <a href="https://www.facebook.com/aryanpratap001"
        className="m">
  <FacebookIcon style={{ fontSize: 50 } }/>  </a>


  <a href="https://twitter.com/InvoMedics"
        className="ma">
  <TwitterIcon style={{ fontSize: 50 } }/>  </a>

  
  <a href="https://www.instagram.com/invomedics/"
        className="mam">
  < InstagramIcon style={{ fontSize: 50 } }/>  </a>





  <a href="https://www.linkedin.com/in/invo-medics-7b351b173/"
        className="mama">
  <LinkedInIcon style={{ fontSize: 50 } }/>  </a>






</div>
<h1 className="head1">Contacts</h1><br></br>
<h8 className="head5">InvoMedics Private Limited</h8>
<p className="pap">43/ KHA-10, THASEMAU, CHINHAT, LUCKNOW, UTTAR PRADESH-226028, INDIA<br>
</br><br></br>Mail Us:  <strong5>invo.medics@gmail.com</strong5><br></br>
visit:  <strong5><NavLink to="https://invomedics.com/contact-us"> https://www.invomedics.com</NavLink></strong5>
<br></br>Call Us:  <strong5>+91-8090908914 / 7905426869</strong5><br></br>
<div class="pb-5">Timing: <strong5><select className="hide" >


<option>Mon

09:00 am – 05:00 pm</option>
<option>Tue  09:00 am – 05:00 pm</option>
<option>Wed

09:00 am – 05:00 pm</option><option>Thr

09:00 am – 05:00 pm</option><option>Fri

09:00 am – 05:00 pm</option><option>Sat-

Closed</option><option>Sun-

Closed</option></select></strong5></div>
</p>


<Footer/>

</div>
</div>
</div>
</div>
</section>
</>
    );
};
export default Contact;
