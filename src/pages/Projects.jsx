import Reveal from "../components/reveal";
import "./style/Projects.css";

const Projects = () => {
  return (
    <>
      <div className="header-project"></div>
      <div className="projects">
        <Reveal width={"100%"}>
          <div className="project-card">
            <h2>Transcendance</h2>
            <h3>Avril-Juillet 2023</h3>
            <p>
              Développement d'une application web <strong>TypeScript</strong>
              (back: <strong>NestJS</strong> / front: <strong>React</strong>)
              avec partie de Pong mutli-joueurs en ligne et Chat.
            </p>
            <li>
              Création du design et de la maquette du projet sur{" "}
              <strong>Figma</strong>
            </li>
            <li>
              Mise en place la structure du front en élaborant les Routes du
              projet (single page application)
            </li>
            <li>
              Utilisation de JWT pour sécuriser les Routes de l'application
            </li>
            <li>
              Faire des requêtes à la base de données en utilisant{" "}
              <strong>Prisma</strong> et au back en utilisant{" "}
              <strong>Axios</strong>
            </li>
            <li>
              Créer une web socket avec <strong>Socket.io</strong> côté Server
              et Client afin d'envoyer/recevoir des notifications
            </li>
            <li>Adapter le server pour répondre aux besoins du client</li>
          </div>
          <div className="project-card">
            <h2>Site Personnel</h2>
            <h3>Avril 2023</h3>
            <p>
              Développement d'une single page Web App en{" "}
              <strong>React JS</strong>:
            </p>
            <li>
              Création du design et de la maquette du projet sur{" "}
              <strong>Figma</strong>
            </li>
            <li>
              Réalisation de la structure du site en élaborant les Routes du
              projet
            </li>
            <li>
              Mise en place d'un formulaire de contact grâce au service EmailJs
            </li>
          </div>
          <div className="project-card">
            <h2>Inception</h2>
            <h3>Février 2023</h3>
            <p>
              Mise en place d'une infrastructure <strong>Docker</strong> sur{" "}
              <strong>machine virtuelle</strong>
              pour faire tourner un site WordPress :
            </p>
            <li>Installation d'une machine virtuelle sur Debian</li>
            <li>Création de 3 containers : MariaDB, NGINX et Wordpress</li>
            <li>Écriture du script des images pour chaque service</li>
            <li>
              Set-up des volumes pour la base de donnée et les fichiers
              WordPress
            </li>
          </div>
        </Reveal>
      </div>
    </>
  );
};

export default Projects;
