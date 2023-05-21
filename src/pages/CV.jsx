import './style/CV.css'
import ProgressBar from '../components/progress-bar.jsx'
import Timeline from '../components/timeline.jsx'

const CV = () => {

    const skillsData = [
        { completed: 70, skill: "C" },
        { completed: 70, skill: "C++" },
        { completed: 40, skill: "JS" },
        { completed: 40, skill: "React" },
        { completed: 40, skill: "NodeJs" },
        { completed: 40, skill: "RoR" },
        { completed: 60, skill: "Figma"},
        { completed: 80, skill: "Anglais"},
        { completed: 20, skill: "Mysql"},
    ]

    return(
        <div className='container-cv'>
            <div className="header-cv">
                <ul>
                    <li>Formation</li>
                    <li>Experience</li>
                    <li>Compétences</li>
                    <li>Soft Skills</li>
                </ul>
            </div>
            <div className="cv">
                <div className="formation">
                    <Timeline/>
                </div>
                <div className="experience">
                    <div className='experience-card'>
                        <h2>Burberry - Wholesale Administrator</h2>
                        <h3>2017 - 2020</h3>
                            <li>Rendez-vous client : création de l’assortiment saisonnier pour la catégorie Enfant de clients français (ex: le Printemps) et internationaux. </li>
                            <li>Création de tableaux de reporting pour les grands magasins de la région EMEIA (mensuels et hebdomadaires).</li>
                            <li>Vérification des commandes saisonnières des grands comptes (Galeries Lafayette, Le Bon Marché etc.).</li>
                            <li>Constitution des supports de formation en français et en anglais.</li>
                            <li>Formation des équipes de vente en France et aux Pays-Bas (entre 10 et 30 personnes).</li>
                            <li>Collaboration à l’ouverture de plusieurs pop-up aux Galeries Lafayette Haussmann (traduction des différents documents et communication avec les services Architecture et Visual Merchandising).</li>
                            <li>Participation aux campagnes de vente toutes catégories 4 fois par an (création des calendriers, prise de rendez-vous clients, préparation des outils de formation, saisie et verification des commandes).</li>
                            <li>Création des numéros de PO pour les règlements fournisseurs.</li>
                            <li>Suivi des chiffres clients, réassort saisonnier, retour de fin de saison.</li>
                            <li>Communication journalière avec les clients.</li>
                    </div>
                    <div className="experience-card">
                        <h2>Antik Batik - Vendeuse PAP Femme</h2>
                        <h3>Aout 2015 - Janvier 2016</h3>
                            <li>Accueil clients, conseil avant l’achat et encaissement.</li>
                            <li>Rangement et organisation de la boutique ainsi que de la réserve.</li>
                    </div>
                    <div className="experience-card">
                        <h2>Bloomy C. - Assistante Commerciale</h2>
                        <h3>Juillet - Decembre 2014(stage)</h3>
                            <li>Communication journalière avec les fournisseurs.</li>
                            <li>Prise de commande clients et participation aux rendez-vous client (Nina Ricci, Jean-Paul Gaultier, Karl Lagerfeld etc.).</li>
                            <li>Dressage d’un bilan des tendances et recherche d’inspirations pour des broderies hautecouture et prêt à porter.</li>
                            <li>Gestion de la comptabilité de la société : règlements clients/fournisseurs, comptes TVA...</li>
                            <li>Programmation journalière d’envois de colis internationaux.</li>
                    </div>
                    <div className="experience-card">
                        <h2>Eurovet - Assistante Communication</h2>
                        <h3>Juin - Juillet 2013 (stage)</h3>
                        <p>Organisation des 50 ans du Salon International de la Lingerie au Château de Versailles: création d’un emploi du temps pour la soirée, prise de contact avec les invités (Lise Charmel, Chantal Thomass, Chantelle), relance téléphonique, gérer les éventuels litiges...</p>
                    </div>
                </div>
                <div className="competences">
                    {skillsData.map((item, index) => (
                        <ProgressBar key={index} completed={item.completed} skill={item.skill}/>
                    ))}
                </div>
                <div className="soft-skills">
                    <ul>
                        <li><i className="fa-solid fa-check" style={{color: "var(--pale-pink)"}}></i> Autonomie</li>
                        <li><i className="fa-solid fa-check" style={{color: "var(--pale-pink)"}}></i> Organisation</li>
                        <li><i className="fa-solid fa-check" style={{color: "var(--pale-pink)"}}></i> Sens de l'écoute</li>
                        <li><i className="fa-solid fa-check" style={{color: "var(--pale-pink)"}}></i> Travail en équipe</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CV;