import './App.css';
import Navbar from "./comonents/Header/Header";
import Services from './comonents/Services/Services'
import AboutProjects from './comonents/AboutProjects/AbooutProjects'
import Partners from './comonents/Partners/Partners'
import Footer from './comonents/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
        <Services />
        <AboutProjects/>
        <Partners/>
      <Footer/>
    </div>
  );
}

export default App;
