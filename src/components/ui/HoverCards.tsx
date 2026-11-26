import { HoverEffect } from "../ui/card-hover-effect";

export const projects = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skills.",
    link: "#",
  },
  {
    title: "The Art of Songwriting",
    description:
      "Learn the craft of songwriting from experienced musicians and songwriters.",
    link: "#",
  },
  {
    title: "Mastering Your Instrument",
    description:
      "Advanced techniques to master your musical instrument of choice.",
    link: "#",
  },
  {
    title: "Music Production Essentials",
    description:
      "Explore the world of music production with a comprehensive overview.",
    link: "#",
  },
  {
    title: "Live Performance Techniques",
    description:
      "Enhance your live performance skills with expert tips and strategies.",
    link: "#",
  },
  {
    title: "Digital Music Marketing",
    description:
      "Learn how to promote your music effectively in the digital age.",
    link: "#",
  },
];

function HoverCards() {
  return (
    <div className='pt-12 pb-6 bg-gray-900'>
      <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sn:text-4xl">Enhance Your Dance Journey</p>
      </div> 
      <div className="max-w-5xl mx-auto px-8"> 
       <HoverEffect items={projects} /> 
      </div>
    </div> 
  )
}

export default HoverCards

