import Header from "./Pages/Header.jsx"
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Contact from "./Components/Contact.jsx";
import About from "./Components/About.jsx";
import Experiences from "./Components/Experiences.jsx";
import Accueil from "./Components/Accueil.jsx";
import Competences from "./Components/Competences.jsx";
import Projects from "./Components/Projects.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Accueil/>
        <Routes>
            <Route path = "/" element = {<About/>}/>
            <Route path = "/Experiences" element = {<Experiences/>}/>
            <Route path = "/Competences" element = {<Competences/>}/>
            <Route path = "/Projects" element = {<Projects/>}/>
            <Route path = "/Contact" element = {<Contact/>}/>
            <Route path = "/Accueil" element = {<Accueil/>}/>
        </Routes>
      </BrowserRouter> 
      
    </>
  );
}

export default App;
