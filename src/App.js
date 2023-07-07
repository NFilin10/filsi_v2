import './App.css';
import Navbar from "./comonents/Header/Header";
import Services from './comonents/Services/Services'
import AboutProjects from './comonents/AboutProjects/AbooutProjects'

function App() {
  return (
    <div className="App">
      <Navbar />
        <Services />
        <AboutProjects/>
    </div>
  );
}

export default App;
