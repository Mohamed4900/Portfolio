import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Internships.css";

function Internships() {
  const [internships, setInternships] = useState([]);

  const fetchInternshipsData = () => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
      }/internships`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInternships(data);
      });
  };

  useEffect(() => {
    fetchInternshipsData();
  }, []);

  return (
    <div>
      <h1 className="h1-internships">Expériences - Entreprises</h1>
      <h1 className="h1-internships">Stages</h1>

      <div className="container">
        {internships.map((internship) => (
          <div key={internship.id} className="card">
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>
                  {internship.title} - {internship.date_project}
                </Card.Title>

                <Card.Text>Expérience : {internship.experience}</Card.Text>
                <Button
                  className="button-pro"
                  variant="primary"
                  href={internship.website}
                >
                  Visualiser
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Internships;
