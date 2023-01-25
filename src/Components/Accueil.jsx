import Competences from "./Competences";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Formation from "./Formation";
import Projects from "./Projects";

const Accueil = () => { 
    return (
        <div id = "AllComponents">
            <Experiences/>
            <Competences/>
            <Projects/>
            <Formation/>
            <Contact/>
        </div>
    )
}
export default Accueil;