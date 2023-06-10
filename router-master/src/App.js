import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Card from './Components/Card';
import {BrowserRouter,Routes,Route,Switch} from 'react-router-dom';
const App=() =>{
  return (
    <BrowserRouter>
     <Navbar/>
      <Switch>
     <Route path='/' exact component={Home}/>
     <Route path='/About' component={About}/>
    < Route path='/Contact' component={Contact}/>
    < Route path='/:user' component={Card}/>
    </Switch>
    </BrowserRouter>  
  );
}

export default App;
