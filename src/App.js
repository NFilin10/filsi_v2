import './App.css';
import Home from './comonents/Home/Home'
import Projects from './comonents/Projects/Projects'
import Footer from './comonents/Footer/Footer'
import Services from './comonents/Services/Services'
import Contact from './comonents/Contact/Contact'
import Equipment from "./comonents/Equipment/Equipment";
import SpecProject from "./comonents/SpecProject/SpecProject";
import { Routes, Route } from 'react-router-dom';
import About from "./comonents/About/About";
import Navbar from "./comonents/Home/Header/Navbar/Navbar";
import {React} from "react";



function App(props) {
    return (
    <div className="App">
        <Navbar/>

        <Routes>
            <Route path="/" element={<Home state={props.state.home}/>} />
            <Route path="/teenused" element={<Services state={props.state.home}/>} />
            <Route path="/tehtud-projektid" element={<Projects state={props.state.home}/>} />
            <Route path="/kontakt" element={<Contact state={props.state.contact}/>} />
            <Route path="/tehnika" element={<Equipment state={props.state.equipment}/>} />
            <Route path="/projektid/kakumae-sadam" element={<SpecProject id="0" state={props.state.home}/>} />
            <Route path="/projektid/module-tech" element={<SpecProject id="1" state={props.state.home}/>} />
            <Route path="/projektid/eesti-traat" element={<SpecProject id="2" state={props.state.home}/>} />
            <Route path="/projektid/favor" element={<SpecProject id="3" state={props.state.home}/>} />
            <Route path="/meist" element={<About/>} />
        </Routes>
        {/*<SpecProject/>*/}
        <Footer/>

    </div>
  );
}

export default App;
