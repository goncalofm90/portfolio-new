import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Section from "./Components/Section";

function App() {
  return (
    <>
      <Section >
        <About />
      </Section>

      <Section >
        <Experience />
      </Section>
      <Section >
        <Projects />
      </Section>

      <Section >
        <Contact />
      </Section>
    </>
  );
}

export default App;