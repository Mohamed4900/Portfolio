import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import Login from "./pages/Login";
import Logout from "./components/Logout";
import AddProject from "./components/AddProject";
import "./App.css";
import ContactForm from "./pages/ContactForm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/about" element={<About />} />
        <Route path="/ajouter-projet" element={<AddProject />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </main>
  );
}

export default App;
