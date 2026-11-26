import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";


const people = [
  {
    id: 1,
    name: "Arjun Mehta",
    designation: "Professional Musician",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
  {
    id: 2,
    name: "Priya Sharma",
    designation: "Vocal Music Instructor",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
  },
  {
    id: 3,
    name: "Rahul Kapoor",
    designation: "Music Producer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
  },
  {
    id: 4,
    name: "Ananya Verma",
    designation: "Songwriter & Composer",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80",
  },
];

function Instructors() {
  return (
    <div className="relative h-150 overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
        <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your dance journey</p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people}/>
        </div>
      </WavyBackground>
    </div>
  )
}

export default Instructors
