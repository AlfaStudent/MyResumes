import recommandation from "../Recommandations.pdf";
const Experiences = () => { 
    return (
        <div>
            <div>
                Experriences 
            </div>
            <div>
                <h2> Developpeur python </h2>
                <p> 3DITEX depuis decembre 2022 </p>
                <p> contrat d'apprentissage - canejan</p>
                <p> Mes differentes missions consistent a creer pour differentes machines qui permettaient 
                    la conception et la realisation des tubes et des composites, des interface graphiques pour communiquer avec ces machine
                </p>
                <p> Utilisation des  bibliotheque PyQt5/QT</p>
            </div>
            <div> 
                <h2> Developpeur Web </h2>
                <p> Incomm - Septembre 2022 - decembre 2022 </p>
                <p> contrat d'apprentissage - bordeaux - France  </p>
                <p> Chez Incomm , mes missions consistaient a la conception , l'utilisation et la configuration de plugins et modules ,
                    a la mise en ligne de sites, transfert de nom de domaine , maintenance et modification sur le site (E-commerce , Vitrine) un utilisant les CMS WordPress et
                    Prestashop. </p>
            </div>
            <div>
                <h2> Projet Universitaire </h2>
                <p> Université de Rouen - Janvier 2020 - Avril 2020 </p>
                <p> Conception de site internet de vente en ligne (E-Commerce ) , creation de base de données 
                    inscription et connexion des clie nts sur le site et utilisation de session pour chaque client
                </p>
                <p> Outils Utilisés : HTML, CSS, PHP, JavaScript </p>
            </div>
            <div> 
                <h2> Agent de restauration rapide </h2>
                <p> Burger King Petit Quevilly - Main 2019 - Septembre 2022 </p>
                <p>Prise et preparation de Commandes , service a table , Plonge </p> 
                <p> <a href = {recommandation}> Lettre de recommandation </a></p>

            </div>
        </div>
    )
}
export default Experiences;