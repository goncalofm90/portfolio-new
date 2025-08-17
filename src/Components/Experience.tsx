import { Timeline } from "./ui/timeline";

export default function Experience() {
  const data = [
    {
      title: "2023 - Present",
      content: (
        <div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              Full Stack Developer - Waveweb & CARMA
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
              Jun 2023 - Present · Lisbon, Portugal (Remote)
            </p>
            <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Ongoing collaboration on large-scale corporate projects in a Full Stack development role. 
              Allocated to CARMA through Waveweb partnership.
            </p>
          </div>
          
          <div className="mb-6">
            <h5 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Key Responsibilities:</h5>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                <span className="text-blue-500 mt-1">▶</span>
                Environment/Instance deployments (Kubernetes/AWX)
              </div>
              <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                <span className="text-blue-500 mt-1">▶</span>
                Backend development (Node.js/Ruby) and Frontend (React/Redux/Vue/VueX/Vanilla JS)
              </div>
              <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                <span className="text-blue-500 mt-1">▶</span>
                Database manipulation (PostgreSQL & MongoDB)
              </div>
              <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                <span className="text-blue-500 mt-1">▶</span>
                SCRUM ticket creation and management
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {["Node.js", "Ruby", "React", "Redux", "Vue", "VueX", "PostgreSQL", "MongoDB", "Kubernetes", "AWX"].map((tech) => (
              <span key={tech} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
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
            <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              Front End Developer - LEAN BAKERY
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
              Jun 2021 - Jun 2023 · 2 yrs 1 mo
            </p>
            <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Front-end focused development with occasional backend tasks. Worked on innovative projects 
              including web3 NFT management platforms and various corporate client solutions.
            </p>
          </div>
          
          <div className="mb-6">
            <h5 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Key Achievements:</h5>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                <span className="text-purple-500 mt-1">▶</span>
                Front-end development using JS/React/Redux with Ruby/Ruby on Rails backend
              </div>
              <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                <span className="text-purple-500 mt-1">▶</span>
                Database manipulation via MySQL
              </div>
              <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                <span className="text-purple-500 mt-1">▶</span>
                Unit testing with Selenium, Chromedriver, and Jest
              </div>
              <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                <span className="text-purple-500 mt-1">▶</span>
                Development of web3 NFT management platform
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {["JavaScript", "React", "Redux", "Ruby", "Ruby on Rails", "MySQL", "Selenium", "Jest", "Web3", "NFT"].map((tech) => (
              <span key={tech} className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">
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
            <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              Full Stack Developer - Freelancer
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
              May 2020 - Apr 2021 · 1 yr · Lisbon, Portugal
            </p>
            <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Independent development projects focusing on full-stack solutions. 
              Created custom platforms and landing pages using various technology stacks.
            </p>
          </div>
          
          <div className="mb-6">
            <h5 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Notable Projects:</h5>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                <span className="text-green-500 mt-1">▶</span>
                Drum recording service platform with client communication and file upload features
              </div>
              <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                <span className="text-green-500 mt-1">▶</span>
                Video & Image gallery implementation
              </div>
              <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                <span className="text-green-500 mt-1">▶</span>
                MERN stack development (MongoDB, Express, React, Node.js)
              </div>
              <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                <span className="text-green-500 mt-1">▶</span>
                Multiple landing pages with custom stack implementations
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {["MongoDB", "Express", "React", "Node.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"].map((tech) => (
              <span key={tech} className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}