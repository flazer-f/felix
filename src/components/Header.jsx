import {React,useState} from 'react'
import '../Style/base.scss';
import '../Style/base.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun,faMoon,faUserAstronaut} from '@fortawesome/free-solid-svg-icons';
import { NavLink ,Link } from "react-router-dom";

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isMode,setIsMode]=useState(false);

    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
      console.log(isNavOpen)
    };
    const togglemode=()=>{
        setIsMode(!isMode);
    }
   
  return (
    <>
     {/* <!-- MENU --> */}
    <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container">
            <Link to="/" className="navbar-brand" ><FontAwesomeIcon icon={faUserAstronaut} /> Felix</Link>

            <button className="navbar-toggler" onClick={toggleNav} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse"  style={{ display: isNavOpen ? 'block' : 'none' }} id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link"><span data-hover="About">About</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Projects" className="nav-link"><span data-hover="Projects">Projects</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Qual" className="nav-link"><span data-hover="Qualification">Qualification</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Contactme" className="nav-link"><span data-hover="Contact">Contact</span></NavLink>
                    </li>
                </ul>

                {/* <ul className="navbar-nav ml-lg-auto">
                    <div className="ml-lg-4" onClick={togglemode}>
                      <div className="color-mode d-lg-flex justify-content-center align-items-center">
                      <FontAwesomeIcon icon={isMode ? faSun : faMoon} /> Color mode
                      </div>
                    </div>
                </ul> */}
            </div>
        </div>
    </nav>
    </>
    
  )
}

export default Header