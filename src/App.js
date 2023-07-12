import './App.css';
import Home from './comonents/Home/Home'
import Projects from './comonents/Projects/Projects'
import Footer from './comonents/Footer/Footer'
import Services from './comonents/Services/Services'
import { Routes, Route } from 'react-router-dom';



function App(props) {
    return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home state={props.state.home}/>} />
            <Route path="/teenused" element={<Services state={props.state.home}/>} />
            <Route path="/tehtud-projektid" element={<Projects state={props.state.home}/>} />
        </Routes>
        <Footer/>

    </div>
  );
}

export default App;
