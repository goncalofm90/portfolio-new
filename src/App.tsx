import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import ScrollSnapWrapper from "./Components/ui/scroll-snap-wrapper";
import Section from "./Components/Section";

function App() {
  return (
    <ScrollSnapWrapper>
      <Section snap>
        <About />
      </Section>

      <Section>
        <Experience />
      </Section>
      <Section snap>
        <Projects />
      </Section>

      <Section snap>
        <Contact />
      </Section>
    </ScrollSnapWrapper>
  );
}

export default App;