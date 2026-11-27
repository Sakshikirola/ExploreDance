import { HoverEffect } from "../ui/card-hover-effect";

export const projects = [
  {
    title: "Introduction to Artificial Intelligence",
    description:
      "Dive into the fundamentals of AI and understand how intelligent systems are built and used.",
    link: "#",
  },
  {
    title: "Building Your First Web App",
    description:
      "Learn the craft of building responsive web apps from experienced developers.",
    link: "#",
  },
  {
    title: "Mastering Data Structures & Algorithms",
    description:
      "Advanced techniques to master problem-solving and crack coding interviews.",
    link: "#",
  },
  {
    title: "DevOps & CI/CD Essentials",
    description:
      "Explore the world of automation, deployment pipelines, and containers with a comprehensive overview.",
    link: "#",
  },
  {
    title: "Ethical Hacking Techniques",
    description:
      "Enhance your security skills with expert tips and real-world attack and defense strategies.",
    link: "#",
  },
  {
    title: "Tech Career & Freelancing",
    description:
      "Learn how to build your portfolio and land jobs or clients in the digital age.",
    link: "#",
  },
];

function HoverCards() {
  return (
    <div className='pt-12 pb-6 bg-gray-900'>
      <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sn:text-4xl">Enhance Your Tech Journey</p>
      </div> 
      <div className="max-w-5xl mx-auto px-8"> 
       <HoverEffect items={projects} /> 
      </div>
    </div> 
  )
}

export default HoverCards

