import React, { useEffect, useState } from "react";

export default function ViewProject() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/projects`
    )
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <section className="adwines">
      <h1>Ajouter un nouveau projet</h1>
      {projects.map((project) => (
        <div key={project.id}>
          {project.title},{project.date_project}, {project.subjects},{" "}
          {project.technologies}, {project.website}
        </div>
      ))}
    </section>
  );
}
