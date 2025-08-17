import { TextHoverEffect } from "../Components/ui/text-hover-effect";
import { FlipWords } from "../Components/ui/flip-words";
import { Avatar } from "../Components/ui/avatar";

function About() {
  const words = [
    "As a full-stack developer with many years of experience,",
    "I have worked in quite a few projects of all stacks and sizes.",
    `I have a passion for making ideas come to life using tech (and coffee).`,
  ];
  return (
    <section className="bg-black min-h-screen max-h-screen w-full overflow-hidden snap-child h-screen">
      <div className="lg:flex w-full justify-between max-w-full">
        {/* Left side text */}
        <div className="flex-1 py-24 lg:py-48 lg:px-8">
          <h1 className="text-1xl font-thin text-white sm:text-6xl">
            Hello there,
          </h1>
          <div className="px-4 mt-6 text-3xl leading-8 text-gray-600 font-thin">
            <FlipWords words={words} />
          </div>

          <div>
            <div className="mt-10 flex-col items-center gap-x-6">
              <TextHoverEffect text="Gonçalo" />
              <TextHoverEffect text="Mendes" />
            </div>
          </div>
        </div>

        {/* Right side angled image */}
        <Avatar />
      </div>
    </section>
  );
}

export default About;
