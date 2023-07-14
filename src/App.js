import './App.css';
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Footer from './comonents/Common/Footer/Footer'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Equipment from "./Pages/Equipment";
import SpecProject from "./comonents/Common/SpecProject/SpecProject";
import { Routes, Route } from 'react-router-dom';
import About from "./Pages/About";
import Navbar from "./comonents/Common/Navbar/Navbar";
import {React} from "react";



function App(props) {
    return (
    <div className="App">
        <Navbar/>

        <Routes>
            <Route path="/" element={<Home state={props.state.home}/>} />
            <Route path="/teenused" element={<Services state={props.state.home}/>} />
            <Route path="/projektid" element={<Projects state={props.state.home}/>} />
            <Route path="/kontakt" element={<Contact state={props.state.contact}/>} />
            <Route path="/tehnika" element={<Equipment state={props.state.equipment}/>} />
            <Route path="/projektid/kakumae-sadam" element={<SpecProject id="0" state={props.state.home}/>} />
            <Route path="/projektid/module-tech" element={<SpecProject id="1" state={props.state.home}/>} />
            <Route path="/projektid/eesti-traat" element={<SpecProject id="2" state={props.state.home}/>} />
            <Route path="/projektid/favor" element={<SpecProject id="3" state={props.state.home}/>} />
            <Route path="/meist" element={<About state={props.state.about}/>} />
        </Routes>
        <Footer/>

    </div>
  );
}

export default App;
