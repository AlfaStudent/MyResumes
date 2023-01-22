import React from "react";
import { Link } from "react-router-dom";
import github from "../imagegithub.png";
import linkdin from "../linkdin.png"
import logohome from "../logoHome.png"


const Header = () => {
    return (
        <div id = "">
            <nav id = "nav">
                
                            
                <Link to = "/" className="Accueil" > <img src = {logohome} style={{width : '2%', height : '10%'}}/> </Link>
                <Link to = "/Experiences" className="Experiences" style={{left : "20%"}} > Experiences </Link>
                <Link to = "/Competences" className="Competences"> Competences </Link>
                <Link to = "/Projects" className="Projects"> Projects </Link>
                {/* <Link to = "/About" className="About"> About </Link> */}
                <Link to = "/Formation" className="Formations"> Formations </Link>
                <Link to = "/Contact" className="Contact"> Contact </Link>
                


                <a href = "https://github.com/AlfaStudent" className="Github"> <img src = {github}  style = {{width :"40px", height : "40px"}} /></a>
                <a href = "http://linkedin.com/in/alpha-abdoulaye-conde-703252204" className="Linkdin">  <img src = {linkdin} style  = {{width : "40px" , height : "40px"}}/></a>
                {/* <Link to = "/Information" className="info"> Information </Link>
                <Link to = "/Contact" className="contact"> Contact </Link> */}

            </nav>
        </div>
            
        
            
        
    )
}
export default Header;