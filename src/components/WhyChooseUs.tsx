"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Personalized Tech Learning",
    description:
      "Embark on a tech journey that's uniquely yours. Our personalized learning experience adapts to your individual skills, interests, and career goals, helping you discover your potential. Whether you're a beginner or an experienced developer, we provide the guidance and support you need to grow with confidence."
  },
  {
    title: "Expert Guidance & Mentorship",
    description:
      "Learn from passionate and experienced industry professionals who are dedicated to helping you improve. Our structured lessons focus on building strong foundations, mastering modern tools, and developing your own problem-solving style. Get the right guidance to make every line of code count."
  },
  {
    title: "Interactive Learning Experience",
    description:
      "Immerse yourself in an engaging learning experience where practice meets creativity. Explore different technologies, follow step-by-step lessons, and build real-world projects through consistent practice. Make learning enjoyable while developing your logic, coding skills, and confidence."
  },
  {
    title: "Live Feedback & Engagement",
    description:
      "Take your tech skills to the next level with continuous guidance and meaningful feedback. Understand your strengths, identify areas for improvement, and work on your projects with confidence. Stay motivated throughout your journey and celebrate every milestone as you progress."
  }
];

function WhyChooseUs() {
  return (
    <div className="w-full py-4 bg-gray-900">
      <StickyScroll content={content} /> 
    </div>
  )
}

export default WhyChooseUs
