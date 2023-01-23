import React from "react";
import { Link } from "react-router-dom";
import github from "../imagegithub.png";
import linkdin from "../linkdin.png"
import logohome from "../logoHome.png"


const Header = () => {
    return (
        <div id = "">
            
            
            <nav id = "nav">
                
                            
                <Link to = "/" className="Accueil" > <img src = {logohome} className= "Home" style={{width : '30px', height : '35px'}}/> </Link>
                <Link to = "/Experiences" className="Menu" style={{left : "20%"}} > Experiences </Link>
                <Link to = "/Competences" className="Menu"> Competences </Link>
                <Link to = "/Projects" className="Menu"> Projects </Link>
                {/* <Link to = "/About" className="About"> About </Link> */}
                <Link to = "/Formation" className="Menu"> Formations </Link>
                <Link to = "/Contact" className="Menu"> Contact </Link>
                <a href = "https://github.com/AlfaStudent" className="Github"> <img src = {github}  className = "Git" style = {{width :"50px", height : "50px"}} /></a>
                <a href = "http://linkedin.com/in/alpha-abdoulaye-conde-703252204" className="Linkdin">  <img src = {linkdin} className = "Linkdi" style  = {{width : "50px" , height : "50px" }}/></a>
                {/* <Link to = "/Information" className="info"> Information </Link>
                <Link to = "/Contact" className="contact"> Contact </Link> */}

            </nav>
        </div>
            
        
            
        
    )
}
export default Header;