import About from "../components/About";
import Projects from "../components/Projects";
import Internships from "../components/Internships";
import Code from "../components/Code";

export default function Home() {
  return (
    <div>
      <About />
      <Code />
      <Projects />
      <Internships />
    </div>
  );
}
