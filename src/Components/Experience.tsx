import { useEffect, useRef, useState } from "react";
import ScrollIndicator from "../Components/ui/scroll-indicator"; 
import { motion, useTransform, useScroll } from "framer-motion";

export default function Experience() {
  const ref = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end start"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const data = [
    {
      title: "2023 - Present",
      content: (
        <div>
          <div className="mb-6">
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-100 mb-2">
              Full Stack Developer - Waveweb & CARMA
            </h4>
            <p className="text-sm sm:text-base text-neutral-400 mb-2">
              Jun 2023 - Present · Lisbon, Portugal (Remote)
            </p>
            <p className="mb-4 text-sm font-normal text-neutral-200 sm:text-base leading-relaxed">
              Ongoing collaboration on large-scale corporate projects in a Full Stack development role. 
              Allocated to CARMA through Waveweb partnership.
            </p>
          </div>
          
          <div className="mb-6">
            <h5 className="text-sm sm:text-base font-medium text-neutral-300 mb-3">Key Responsibilities:</h5>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-neutral-300">
                <span className="text-blue-500 mt-1 flex-shrink-0">▶</span>
                <span>Environment/Instance deployments (Kubernetes/AWX)</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-neutral-300">
                <span className="text-blue-500 mt-1 flex-shrink-0">▶</span>
                <span>Backend development (Node.js/Ruby) and Frontend (React/Redux/Vue/VueX/Vanilla JS)</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-neutral-300">
                <span className="text-blue-500 mt-1 flex-shrink-0">▶</span>
                <span>Database manipulation (PostgreSQL & MongoDB)</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-neutral-300">
                <span className="text-blue-500 mt-1 flex-shrink-0">▶</span>
                <span>SCRUM ticket creation and management</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {["Node.js", "Ruby", "React", "Redux", "Vue", "VueX", "PostgreSQL", "MongoDB", "Kubernetes", "AWX"].map((tech) => (
              <span key={tech} className="px-2 sm:px-3 py-1 bg-blue-100/10 text-blue-300 text-xs sm:text-sm rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2021 - 2023",
      content: (
        <div>
          <div className="mb-6">
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-100 mb-2">
              Front End Developer - LEAN BAKERY
            </h4>
            <p className="text-sm sm:text-base text-neutral-400 mb-2">
              Jun 2021 - Jun 2023 · 2 yrs 1 mo
            </p>
            <p className="mb-4 text-sm font-normal text-neutral-200 sm:text-base leading-relaxed">
              Front-end focused development with occasional backend tasks. Worked on innovative projects 
              including web3 NFT management platforms and various corporate client solutions.
            </p>
          </div>
          
          <div className="mb-6">
            <h5 className="text-sm sm:text-base font-medium text-neutral-300 mb-3">Key Responsibilities:</h5>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-neutral-300">
                <span className="text-purple-400 mt-1 flex-shrink-0">▶</span>
                <span>Front-end development using JS/React/Redux with Ruby/Ruby on Rails backend</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-neutral-300">
                <span className="text-purple-400 mt-1 flex-shrink-0">▶</span>
                <span>Database manipulation via MySQL</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-neutral-300">
                <span className="text-purple-400 mt-1 flex-shrink-0">▶</span>
                <span>Unit testing with Selenium, Chromedriver, and Jest</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-neutral-300">
                <span className="text-purple-400 mt-1 flex-shrink-0">▶</span>
                <span>Development of web3 NFT management platform</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {["JavaScript", "React", "Redux", "Ruby", "Ruby on Rails", "MySQL", "Selenium", "Jest", "Web3", "NFT"].map((tech) => (
              <span key={tech} className="px-2 sm:px-3 py-1 bg-purple-100/10 text-purple-300 text-xs sm:text-sm rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2020 - 2021",
      content: (
        <div>
          <div className="mb-6">
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-100 mb-2">
              Full Stack Developer - Freelancer
            </h4>
            <p className="text-sm sm:text-base text-neutral-400 mb-2">
              May 2020 - Apr 2021 · 1 yr · Lisbon, Portugal
            </p>
            <p className="mb-4 text-sm font-normal text-neutral-200 sm:text-base leading-relaxed">
              Independent development projects focusing on full-stack solutions. 
              Created custom platforms and landing pages using various technology stacks.
            </p>
          </div>
          
          <div className="mb-6">
            <h5 className="text-sm sm:text-base font-medium text-neutral-300 mb-3">Notable Projects:</h5>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-neutral-300">
                <span className="text-cyan-400 mt-1 flex-shrink-0">▶</span>
                <span>Drum recording service platform with client communication and file upload features</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-neutral-300">
                <span className="text-cyan-400 mt-1 flex-shrink-0">▶</span>
                <span>Video & Image gallery implementation for the aforementioned project</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-neutral-300">
                <span className="text-cyan-400 mt-1 flex-shrink-0">▶</span>
                <span>MERN stack development (MongoDB, Express, React, Node.js) of applications for other clients</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-neutral-300">
                <span className="text-cyan-400 mt-1 flex-shrink-0">▶</span>
                <span>Multiple landing pages with custom stack implementations</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {["MongoDB", "Express", "React", "Node.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"].map((tech) => (
              <span key={tech} className="px-2 sm:px-3 py-1 bg-cyan-100/10 text-cyan-300 text-xs sm:text-sm rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full" data-timeline="true">
      {/* Header Section */}
      <div className="min-h-screen w-full snap-start flex items-center justify-center bg-black relative overflow-hidden px-4 sm:px-6">
        <div className="bg-black"></div>
        {/* Main Header Content */}
        <div className="text-center space-y-6 sm:space-y-8 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-thin bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 bg-clip-text text-transparent mb-4 sm:mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional Experience
            </motion.h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-2">
              My journey as a Developer, working with various technologies 
              and contributing to many projects across different industries.
            </p>
          </motion.div>
          
          {/* Scroll Down Indicator */}
          <ScrollIndicator onClick={() => {containerRef.current?.scrollIntoView({ behavior: "smooth" });}}/>
        </div>
      </div>

      {/* Timeline Section */}
      <div 
        className="min-h-screen w-full bg-black overflow-y-auto" 
        ref={containerRef}
      >
        <div className="w-full py-10 sm:py-20">
          <div ref={ref} className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
            {data.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex justify-start pt-8 sm:pt-16 md:pt-32 md:gap-16"
              >
                {/* Timeline dot and title */}
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 sm:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-4 sm:h-6 absolute left-3 sm:left-4 md:left-4 w-4 sm:w-6 rounded-full bg-black flex items-center justify-center shadow-lg border-2 border-gray-700">
                    <div className="h-2 sm:h-3 w-2 sm:w-3 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
                  </div>
                  <h3 className="hidden md:block text-xl sm:text-2xl md:pl-24 md:text-4xl font-thin text-neutral-600">
                    {item.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="relative pl-16 sm:pl-20 md:pl-8 pr-4 sm:pr-8 w-full">
                  <h3 className="md:hidden block text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-left font-thin text-neutral-500">
                    {item.title}
                  </h3>
                  <div className="bg-gray-900/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-800">
                    {item.content}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Animated Timeline Line */}
            <div
              style={{ height: height + "px" }}
              className="absolute left-6 sm:left-7 md:left-10 top-8 sm:top-16 overflow-hidden w-[2px] sm:w-[3px] bg-gradient-to-b from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]"
            >
              <motion.div
                style={{ height: heightTransform, opacity: opacityTransform }}
                className="absolute inset-x-0 top-0 w-[2px] sm:w-[3px] bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}