"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const content = [
  {
    title: "Personalized Dance Learning",
    description:
      "Embark on a dance journey that's uniquely yours. Our personalized learning experience adapts to your individual skills, interests, and goals, helping you discover your potential. Whether you're a beginner or an experienced dancer, we provide the guidance and support you need to grow with confidence."
  },
  {
    title: "Expert Guidance & Mentorship",
    description:
      "Learn from passionate and experienced dance instructors who are dedicated to helping you improve. Our structured lessons focus on building strong foundations, mastering techniques, and developing your unique dancing style. Get the right guidance to make every step count."
  },
  {
    title: "Interactive Learning Experience",
    description:
      "Immerse yourself in an engaging dance learning experience where practice meets creativity. Explore different dance styles, follow step-by-step lessons, and improve your movements through consistent practice. Make learning enjoyable while developing your rhythm, coordination, and confidence."
  },
  {
    title: "Live Feedback & Engagement",
    description:
      "Take your dancing skills to the next level with continuous guidance and meaningful feedback. Understand your strengths, identify areas for improvement, and work on your techniques with confidence. Stay motivated throughout your journey and celebrate every milestone as you progress."
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
