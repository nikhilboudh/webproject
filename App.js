import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./index.css"

import Home from './Home.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx';
import Products from './Products.jsx';
import Covid_19 from './Covid_19.jsx';


import Navbar from './Navbar.jsx';
import {NavLink} from 'react-router-dom'

import {Switch,Route, Redirect} from "react-router-dom";


const App =()=>{
    return(
<>
<Navbar/>
<Switch>

        
    <Route exact path="/" component={Home}/>
    <Route exact path="/Contact" component={Contact}/>
    <Route exact path="/About" component={About}/>
    <Route exact path="/Products" component={Products}/>
    <Route exact path="/Covid_19" component={Covid_19}/>

<Redirect to ="/"/>
</Switch>
</>
    );
};
export default App;