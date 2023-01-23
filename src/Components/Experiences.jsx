import recommandation from "../Recommandations.pdf";
const Experiences = () => { 
    return (
        <div id = "Composant">
            <div id = 'Experiences'>
                <div>
                    <h1> EXPERIENCES </h1>
                </div>
                <div>
                    <h3> Developpeur python </h3>
                    <p> 3DITEX - depuis decembre 2022 </p>
                    <p> contrat d'apprentissage - canejan</p>
                    <p> Mes differentes missions consistent à creer pour differentes machines qui permettaient 
                        la conception et la realisation des tubes et des composites, des interface graphiques pour communiquer avec ces machine
                    </p>
                    <p> Utilisation des  bibliotheque PyQt5/QT</p>
                </div>
                <div> 
                    <h3> Developpeur Web </h3>
                    <p> Incomm - Septembre 2022 - decembre 2022 </p>
                    <p> contrat d'apprentissage - bordeaux - France  </p>
                    <p> Au sein de l'entreprise Incomm, j'étais en charge de la conception, de l'utilisation et de la configuration de plugins et modules,
                         ainsi que de la mise en ligne de sites web. J'ai également assuré des tâches liées au transfert de noms de domaine, à la maintenance et à la modification des sites web, 
                         notamment les sites e-commerce et les sites vitrine, en utilisant les systèmes de gestion de contenu WordPress et Prestashop. </p>
                </div>
                <div>
                    <h3> Projet Universitaire </h3>
                    <p> Université de Rouen - Janvier 2020 - Avril 2020 </p>
                    <p> Conception de site internet de vente en ligne (E-Commerce ) , creation de base de données 
                        inscription et connexion des clie nts sur le site et utilisation de session pour chaque client
                    </p>
                    <p> Outils Utilisés : HTML, CSS, PHP, JavaScript </p>
                </div>
                <div> 
                    <h3> Agent de restauration rapide </h3>
                    <p> Burger King Petit Quevilly - Mai 2019 - Septembre 2022 </p>
                    <p>Prise et preparation de Commandes , service a table , Plonge </p> 
                    <p> <a href = {recommandation} target = "_blank"> Lettre de recommandation </a></p>

                </div>
            </div>
        </div>
    )
}
export default Experiences;