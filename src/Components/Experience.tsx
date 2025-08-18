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
            <h4 className="text-xl md:text-2xl font-semibold text-neutral-100 mb-2">
              Full Stack Developer - Waveweb & CARMA
            </h4>
            <p className="text-base text-neutral-400 mb-2">
              Jun 2023 - Present · Lisbon, Portugal (Remote)
            </p>
            <p className="mb-4 text-sm font-normal text-neutral-200 md:text-base">
              Ongoing collaboration on large-scale corporate projects in a Full Stack development role. 
              Allocated to CARMA through Waveweb partnership.
            </p>
          </div>
          
          <div className="mb-6">
            <h5 className="text-base font-medium text-neutral-300 mb-3">Key Responsibilities:</h5>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-neutral-300 md:text-base">
                <span className="text-blue-500 mt-1">▶</span>
                Environment/Instance deployments (Kubernetes/AWX)
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-300 md:text-base">
                <span className="text-blue-500 mt-1">▶</span>
                Backend development (Node.js/Ruby) and Frontend (React/Redux/Vue/VueX/Vanilla JS)
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-300 md:text-base">
                <span className="text-blue-500 mt-1">▶</span>
                Database manipulation (PostgreSQL & MongoDB)
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-300 md:text-base">
                <span className="text-blue-500 mt-1">▶</span>
                SCRUM ticket creation and management
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {["Node.js", "Ruby", "React", "Redux", "Vue", "VueX", "PostgreSQL", "MongoDB", "Kubernetes", "AWX"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-blue-100/10 text-blue-300 text-sm rounded-full">
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
            <h4 className="text-xl md:text-2xl font-semibold text-neutral-100 mb-2">
              Front End Developer - LEAN BAKERY
            </h4>
            <p className="text-base text-neutral-400 mb-2">
              Jun 2021 - Jun 2023 · 2 yrs 1 mo
            </p>
            <p className="mb-4 text-sm font-normal text-neutral-200 md:text-base">
              Front-end focused development with occasional backend tasks. Worked on innovative projects 
              including web3 NFT management platforms and various corporate client solutions.
            </p>
          </div>
          
          <div className="mb-6">
            <h5 className="text-base font-medium text-neutral-300 mb-3">Key Achievements:</h5>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-neutral-300 md:text-base">
                <span className="text-purple-400 mt-1">▶</span>
                Front-end development using JS/React/Redux with Ruby/Ruby on Rails backend
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-300 md:text-base">
                <span className="text-purple-400 mt-1">▶</span>
                Database manipulation via MySQL
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-300 md:text-base">
                <span className="text-purple-400 mt-1">▶</span>
                Unit testing with Selenium, Chromedriver, and Jest
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-300 md:text-base">
                <span className="text-purple-400 mt-1">▶</span>
                Development of web3 NFT management platform
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {["JavaScript", "React", "Redux", "Ruby", "Ruby on Rails", "MySQL", "Selenium", "Jest", "Web3", "NFT"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-purple-100/10 text-purple-300 text-sm rounded-full">
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
            <h4 className="text-xl md:text-2xl font-semibold text-neutral-100 mb-2">
              Full Stack Developer - Freelancer
            </h4>
            <p className="text-base text-neutral-400 mb-2">
              May 2020 - Apr 2021 · 1 yr · Lisbon, Portugal
            </p>
            <p className="mb-4 text-sm font-normal text-neutral-200 md:text-base">
              Independent development projects focusing on full-stack solutions. 
              Created custom platforms and landing pages using various technology stacks.
            </p>
          </div>
          
          <div className="mb-6">
            <h5 className="text-base font-medium text-neutral-300 mb-3">Notable Projects:</h5>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-neutral-300 md:text-base">
                <span className="text-cyan-400 mt-1">▶</span>
                Drum recording service platform with client communication and file upload features
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-300 md:text-base">
                <span className="text-cyan-400 mt-1">▶</span>
                Video & Image gallery implementation
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-300 md:text-base">
                <span className="text-cyan-400 mt-1">▶</span>
                MERN stack development (MongoDB, Express, React, Node.js)
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-300 md:text-base">
                <span className="text-cyan-400 mt-1">▶</span>
                Multiple landing pages with custom stack implementations
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {["MongoDB", "Express", "React", "Node.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-cyan-100/10 text-cyan-300 text-sm rounded-full">
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
      <div className="min-h-screen w-full snap-start flex items-center justify-center bg-black relative overflow-hidden px-4">
        <div className="bg-black"></div>
        {/* Main Header Content */}
        <div className="text-center space-y-8 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-thin bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 bg-clip-text text-transparent mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional Experience
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
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
        <div className="w-full py-20">
          <div ref={ref} className="relative w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            {data.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex justify-start pt-16 md:pt-32 md:gap-16"
              >
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-6 absolute left-4 md:left-4 w-6 rounded-full bg-black flex items-center justify-center shadow-lg border-2 border-gray-700">
                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
                  </div>
                  <h3 className="hidden md:block text-2xl md:pl-24 md:text-4xl font-thin text-neutral-600">
                    {item.title}
                  </h3>
                </div>

                <div className="relative pl-24 pr-8 md:pl-8 w-full">
                  <h3 className="md:hidden block text-3xl mb-6 text-left font-thin text-neutral-500">
                    {item.title}
                  </h3>
                  <div className="bg-gray-900/50 rounded-2xl p-8 shadow-sm border border-gray-800">
                    {item.content}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Animated Timeline Line */}
            <div
              style={{ height: height + "px" }}
              className="absolute md:left-10 left-10 top-16 overflow-hidden w-[3px] bg-gradient-to-b from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]"
            >
              <motion.div
                style={{ height: heightTransform, opacity: opacityTransform }}
                className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}