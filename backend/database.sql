CREATE TABLE user (
  id INT unsigned PRIMARY KEY not null AUTO_INCREMENT,
  firstname varchar(80) NOT NULL,
  lastname varchar(80) NOT NULL,
  email varchar(255) NOT NULL,
  hashedPassword varchar(255) NOT NULL,
  is_admin boolean DEFAULT (false)
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE project (
  id INT unsigned PRIMARY KEY not null AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  date_project varchar(255) NOT NULL,
  subjects varchar(500) NOT NULL,
  technologies varchar(255) NOT NULL,
  website varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE internship (
  id INT unsigned PRIMARY KEY not null AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  date_internship varchar(255) NOT NULL,
  experience varchar(500) NOT NULL,
  website varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE skill (
  id INT unsigned PRIMARY KEY not null AUTO_INCREMENT,
  skill varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE langage (
  id INT unsigned PRIMARY KEY not null AUTO_INCREMENT,
  langage varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE hobbie (
  id INT unsigned PRIMARY KEY not null AUTO_INCREMENT,
  hobbie varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO project (title, date_project, subjects, technologies, website) 
VALUES 
("Projet 1: Wild'Kedin", "Mars 2023", "Réaliser un projet sur un réseau professionnel de Wilders", "HTML - CSS- JS - Git - GitHub", "https://mohamed4900.github.io/Project1-Wildkedin/"), 
("Projet 2: Wild'Out", "Avril-Mai 2023", "Réaliser un projet sur un site suggérant des événements en fonction des conditions météorologiques à proximité d'une position GPS ou dans une ville spécifique sélectionnée.
", "REACT.js - EXPRESS.js - API - HTML - CSS - JS - Git - GitHub
", "https://mohamed4900.github.io/project-2-wild-out/"),
("Projet 3: Inovin", "Juin-Juillet 2023", "Mon application propose des ateliers de dégustation axés sur les cépages. Les utilisateurs peuvent participer à des dégustations, répondre à des questionnaires, créer des profils en fonction de leurs préférences pour chacun
cépage, et participer à des ateliers interactifs pour créer son propre vin.", "React.JS - Express.JS - API - SQL - HTML - CSS - JS - Git - GitHub.", "Lien pas encore
disponible"),
("Hackathon 1: Rando-Champenoise", "Mai 2023 - durée de 2 jours", "Réaliser un projet sur un site proposant une plateforme centralisée et conviviale permettant aux utilisateurs de trouver facilement des informations sur les randonnées en Champagne-Ardenne", "REACT.js - EXPRESS - API - HTML - CSS - JS - Git - GitHub", "Lien non
disponible"),
("Hackathon 2: Emmaus Mobile", "Juin 2023 - durée de 2 jours", "Réaliser un projet consistant à créer un site proposant un outil de classification des smartphones permettant de générer un prix de vente en fonction de leurs caractéristiques telles que la RAM, le stockage, etc", "React.JS - Express.JS - API - SQL - HTML - CSS - JS - Git - GitHub.", "Lien non
disponible");

INSERT INTO internship (title, date_internship, experience, website) 
VALUES 
("Dév. WEB/WEB MOBILE - Tourak Digital", "Juin 2021", "Stage en développement web BackEnd avec HTML/CSS, PHP et SQL. (Conception de bases de données et en sécurité des sites web.)", "https://tourak.fr/"), ("Dév. WEB/WEB MOBILE - SINFIN DXP", "Juin-Juillet 2022", "Stage en développement FrontEnd pour le web/mobile, utilisant HTML/CSS, Javascript, PHP, SQL et React Native. (Création d'interfaces utilisateur et optimisation des performances.)", "https://www.sinfin.fr/");

INSERT INTO skill (skill) 
VALUES 
("HTML & CSS"), ("JavaScript & React.js"), ("Php"), ("API (Application Programming Interface)"), ("Node.js & Express.js"), ("SQL & MySQL"), ("Git & GitHub");

INSERT INTO langage (langage) 
VALUES 
("Français"), ("Langue des signes françaises"), ("Anglais"), ("Arabe");

INSERT INTO hobbie (hobbie) 
VALUES 
("Football"), ("CodinGame"), ("Lecture des livres");