import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddProject() {
  const [title, setTitle] = useState("");
  const [dateProject, setDateProject] = useState("");
  const [subjects, setSubjects] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [website, setWebsite] = useState("");

  const addprojects = (event) => {
    event.preventDefault();
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/projects`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          dateProject,
          subjects,
        }),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Une erreur s'est produite lors de l'ajout du projet."
          );
        } else alert("Le formulaire a été soumis avec succès !");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="adwines">
      <h1>Ajouter un nouveau projet</h1>

      <form onSubmit={addprojects}>
        <div>
          <label htmlFor="title">Titre :</label>
          <input
            type="text"
            id="title"
            title="project_title"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={title}
          />
        </div>
        <div>
          <label htmlFor="Couleur">Date:</label>
          <input
            type="text"
            title="Date"
            onChange={(event) => {
              setDateProject(event.target.value);
            }}
            value={dateProject}
          />
        </div>
        <div>
          <label htmlFor="Saveur">Sujet :</label>
          <input
            type="text"
            title="Sujet"
            onChange={(event) => {
              setSubjects(event.target.value);
            }}
            value={subjects}
          />
        </div>
        <div>
          <label htmlFor="Couleur">Technos utilisées:</label>
          <input
            type="text"
            title="Technologies"
            onChange={(event) => {
              setTechnologies(event.target.value);
            }}
            value={technologies}
          />
        </div>
        <div>
          <label htmlFor="Couleur">Site web:</label>
          <input
            type="text"
            title="Website"
            onChange={(event) => {
              setWebsite(event.target.value);
            }}
            value={website}
          />
        </div>

        <button className="buttonLogin" type="submit">
          Valider
        </button>
      </form>
      <Link to="/afficher-mes-vins" className="buttonLogin">
        Voir la liste des projets
      </Link>
    </section>
  );
}
