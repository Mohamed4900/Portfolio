import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useAuth } from "../contexts/AuthContext";
import Wildkedin from "../assets/wildkedin.jpg";
import WildOut from "../assets/wildout.jpg";
import Inovin from "../assets/inovin.jpg";
import Hackathon1 from "../assets/hackathon1.jpg";
import Hackathon2 from "../assets/hackathon2.jpg";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const { isAdmin } = useAuth();

  const fetchProjectsData = () => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/projects`
    )
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  };

  useEffect(() => {
    fetchProjectsData();
  }, []);

  return (
    <>
      <div>
        <h1 className="h1-projects">Expériences - Wild Code School</h1>
        <h1 className="h1-internships">Projets collectifs</h1>
      </div>
      <div className="container-project">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>
                  {project.title} - {project.date_project}
                </Card.Title>
                {project.title === "Projet 1: Wild'Kedin" && (
                  <img src={Wildkedin} alt={project.title} />
                )}
                {project.title === "Projet 2: Wild'Out" && (
                  <img src={WildOut} alt={project.title} />
                )}
                {project.title === "Projet 3: Inovin" && (
                  <img src={Inovin} alt={project.title} />
                )}
                {project.title === "Hackathon 1: Rando-Champenoise" && (
                  <img src={Hackathon1} alt={project.title} />
                )}
                {project.title === "Hackathon 2: Emmaus Mobile" && (
                  <img src={Hackathon2} alt={project.title} />
                )}

                <Card.Text>Sujet : {project.subjects}</Card.Text>
                <Card.Text>
                  Technos utilisées : {project.technologies}
                </Card.Text>
                <Button
                  className="button-pro"
                  variant="primary"
                  href={project.website}
                >
                  Visualiser
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
        {isAdmin && (
          <Link to="/ajouter-projet" className="ajouterprojet">
            Ajouter un nouveau projet
          </Link>
        )}
      </div>
    </>
  );
}

export default Projects;
