import React from "react";
import { Link } from "react-router-dom";
import github from "../imagegithub.png";
import linkdin from "../linkdin.png"
import logohome from "../logoHome.png"


const Header = () => {
    return (
        <nav>
            
                        
            <Link to = "/" className="Accueil"> <img src = {logohome} style={{width : '10%', height : '10%'}}/> </Link>
            <Link to = "/Experiences" className="Experiences"> Experiences </Link>
            <Link to = "/Competences" className="Competences"> Competences </Link>
            <Link to = "/Projects" className="Projects"> Projects </Link>
            <Link to = "/About" className="About"> About </Link>
            <Link to = "/Contact" className="Contact"> Contact </Link>
            <a href = "https://github.com/AlfaStudent"> <img src = {github} style = {{width :"10%", height : "10%"}} /></a>
            <a href = "http://linkedin.com/in/alpha-abdoulaye-conde-703252204">  <img src = {linkdin} style  = {{width : "10%" , height : "10%"}}/></a>
            {/* <Link to = "/Information" className="info"> Information </Link>
            <Link to = "/Contact" className="contact"> Contact </Link> */}

        </nav>
            
        
            
        
    )
}
export default Header;