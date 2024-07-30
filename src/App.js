import React from 'react'
import Navbar from './Navbar/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Components/Home"
import Features from './Components/Features';
import Pricing from './Components/Pricing';
import Disabled from './Components/Disabled';
import Login from './Authentication/Login';
import UseState from './Hook/UseState';
import Form from './Components/Form';
import Mapping from './Navbar/Concepts/Mapping/Mapping';

const App = () => {
  return (
    <div>
      
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/home" element={ <Home/> }/>
        <Route path="/features" element={ <Features/> }/>
        <Route path="/pricing" element={ <Pricing/> }/>
        <Route path="/disabled" element={ <Disabled/> }/>
        <Route path="/use-state" element={ <UseState/> }/>

        <Route path="/login" element={ <Login/> }/>
        <Route path="/form" element={<Form/>}/>
        <Route path='/mapping' element={<Mapping/>}/>
        
        
      </Routes>
    </BrowserRouter>
    
    </div>
  );
};

export default App;