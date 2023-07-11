import Header from "./Header/Header"
import Services from './Services/Services'
import AboutProjects from './AboutProjects/AbooutProjects'
import Partners from './Partners/Partners'

function Home(props) {
    return (
        <div className="App">
            <Header state={props.state[0].swiper}/>
            <Services  state={props.state[0].services}/>
            <AboutProjects state={props.state[0].projects}/>
            <Partners state={props.state[0].partners}/>
        </div>
    );
}

export default Home;
