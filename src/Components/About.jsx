import Myimage from "../photo.jpeg";
import CV from "../cv-alpha-conde.pdf"
const About = () => {
    return (
        
        <div id = "Composant">
            <link rel ="stylesheet" type = "text.css" href ="about.css"/>

            <div>
                <h1 className="suis"> Qui Suis-je?  </h1>
            </div>
            <div>
                <p> je m'appelle Alpha Abdoulaye Conde  </p>
                <p> toujours été passionné par l'informatique , je suis actuellement étudiant
                    Développement web à l'ecole Sup de Vinci . j'ai acquis des compétences solides en programmatiuon web , notamment en utilisant 
                    les technologies React , C#,  , Python, . je suis également experimenté dans l'utilisation de Git et de l'intégration Continue.
                </p>
                <p>
                    Je suis tres enthousiaste a l'idée de poursuivre mes études en integrant un Master en developpemnt web Full stack a la rentrée prochaine
                    Je suis convaincu que cela me permettra de continuer a developper mes compétences  et de devenir un developpeur web experimenté etr compétent.

                </p>
                <p>
                    En dehors de mes études , je suis également intéressé par les nouvelles technologies et je passe beaucoup de temps a experimenter avec de nouveaux 
                    frameworks. J'aime egalement participer a des proojets open Source pour continier a apprendre et a partager mes connaissances avec d'autres developpeurs.
                </p>

            </div>
            <div>

                <img src = {Myimage} alt = 'My image' style={{width: '20%', height : '40%'}}/>
            </div>
            <div>
                <p> vous pouvez acceder a mon CV juste en bas </p>
                <a href = {CV} target ='_blank'> Voici mon CV </a>

            </div>
        </div>

    )
}
export default About;
