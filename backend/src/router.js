const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");

const projectControllers = require("./controllers/projectControllers");

const internshipControllers = require("./controllers/internshipControllers");

const skillControllers = require("./controllers/skillControllers");

const langageControllers = require("./controllers/langageControllers");

const hobbieControllers = require("./controllers/hobbieControllers");

const authControllers = require("./controllers/authControllers");

const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", hashPassword, userControllers.edit);
router.post("/users", hashPassword, userControllers.add);
router.delete("/users/:id", userControllers.destroy);

router.get("/projects", projectControllers.browse);
router.get("/projects/:id", projectControllers.read);
router.put("/projects/:id", projectControllers.edit);
router.post("/projects", projectControllers.add);
router.delete("/projects/:id", projectControllers.destroy);

router.get("/internships", internshipControllers.browse);
router.get("/internships/:id", internshipControllers.read);
router.put("/internships/:id", internshipControllers.edit);
router.post("/internships", internshipControllers.add);
router.delete("/internships/:id", internshipControllers.destroy);

router.get("/skills", skillControllers.browse);
router.get("/skills/:id", skillControllers.read);
router.put("/skills/:id", skillControllers.edit);
router.post("/skills", skillControllers.add);
router.delete("/skills/:id", skillControllers.destroy);

router.get("/langages", langageControllers.browse);
router.get("/langages/:id", langageControllers.read);
router.put("/langages/:id", langageControllers.edit);
router.post("/langages", langageControllers.add);
router.delete("/langages/:id", langageControllers.destroy);

router.get("/hobbies", hobbieControllers.browse);
router.get("/hobbies/:id", hobbieControllers.read);
router.put("/hobbies/:id", hobbieControllers.edit);
router.post("/hobbies", hobbieControllers.add);
router.delete("/hobbies/:id", hobbieControllers.destroy);

router.post(
  "/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.use(verifyToken); // mur d'authentification

router.post("/users", userControllers.add);
router.get("/users", userControllers.browse);

module.exports = router;
