import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import TechStack from "./Components/TechStack";
import ScrollSnapWrapper from "./Components/ui/scroll-snap-wrapper";
import Section from "./Components/Section"; // your reusable section component

function App() {
  return (
    <ScrollSnapWrapper>
      
      <Section snap>
        <About />
      </Section>

      <Section snap>
        <TechStack />
      </Section>

      <Section snap>
        <Projects />
      </Section>

      {/* snap has to be false */}
      <Section>
        <Experience />
      </Section>

      <Section snap>
        <Contact />
      </Section>
    </ScrollSnapWrapper>
  );
}

export default App;
