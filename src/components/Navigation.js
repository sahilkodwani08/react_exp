import "./Navigation.css";
import {Link} from "react-router-dom";

const Navigation = () => (
    <header className='navbar'>
          <img className='logo' src="https://ves.ac.in/wp-content/uploads/2022/01/logo.png" alt="Vivekananda. logo"/>
        <div className='navbar__title navbar__item'><h2>Vivekanand Education Society’s Institute of Technology</h2></div>
        <Link to = '/home'><div className='navbar__item'><b>Home</b></div></Link>
        <Link to ='/home'><div className='navbar__item'><b>About Us</b></div></Link>
        <div className='navbar__item'><b>Contact</b></div>
        <div className='navbar__item'><b>Help</b></div>        
    </header>
);

const App = () => (
    <div>
        <Navigation />
        <main></main>
    </div>
);

export {Navigation};

