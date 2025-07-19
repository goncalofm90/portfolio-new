import avatar from "../assets/images/avatar.jpg";
import { TextHoverEffect } from "../Components/ui/text-hover-effect";
import { FlipWords } from "../Components/ui/flip-words";

function About() {
  const words = [
    "As a full-stack developer with many years of experience,",
    "I have worked in quite a few projects of all stacks and sizes.",
    `I have a passion for making ideas come to life using tech (and coffee).`,
  ];
  return (
    <section className="bg-black">
      <div className="lg:flex w-full justify-between">
        {/* Left side text */}
        <div className="flex-1 py-24 lg:py-48 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Hello there,
          </h1>
          <p className="px-4 mt-6 text-3xl leading-8 text-gray-600 font-thin">
            <FlipWords words={words} />
          </p>

          <div>
            <div className="mt-10 flex-col items-center gap-x-6">
              <TextHoverEffect text="Gonçalo" />
              <TextHoverEffect text="Mendes" />
            </div>
          </div>
        </div>

        {/* Right side angled image */}
        <div className="flex-1 relative lg:ml-8">
          <div
            className="aspect-[3/4] w-full max-w-lg overflow-hidden rounded-3xl bg-gray-50 sm:max-w-3xl lg:max-w-none"
            style={{
              clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <img
              src={avatar}
              alt="Gonçalo Mendes web developer"
              className="h-full w-full object-cover object-center text-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
