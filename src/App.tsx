import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import TechStack from "./Components/TechStack";
import ScrollSnapWrapper from "./Components/ui/scroll-snap-wrapper";


function App() {
  return (
    <ScrollSnapWrapper>
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </ScrollSnapWrapper>
  );
}

export default App;
