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
import ScrollTop from "./comonents/Common/ScrollTop/ScrollTop";
import {React} from "react";



function App(props) {
    const projectUrls = props.state.home[0].projects
    return (
    <div className="App">
        <Navbar/>
        <ScrollTop>
            <Routes>
                <Route path="/" element={<Home state={props.state.home}/>} />
                <Route path="/teenused" element={<Services state={props.state.home}/>} />
                <Route path="/projektid" element={<Projects state={props.state.home}/>} />
                <Route path="/kontakt" element={<Contact state={props.state.contact}/>} />
                <Route path="/tehnika" element={<Equipment state={props.state.equipment}/>} />
                <Route path="/projektid/:id" element={<SpecProject state={props.state.home[0].projects}/>} />
                <Route path="/meist" element={<About state={props.state.about}/>} />
            </Routes>
        </ScrollTop>
        <Footer/>

    </div>
  );
}

export default App;
