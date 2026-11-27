"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function MovingCards() {
  return (
    <div className="h-130 w-full bg-black bg-grid-white relative flex flex-col items-center justify-center overflow-hidden"> 
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Where Passion Meets Technology</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 ">
            <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                 items={testimonials} 
                 direction="right"
                 speed="slow"
                />
            </div>
        </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "TechExplore has made learning to code so enjoyable for me. The lessons are easy to follow, and I have gained so much confidence in my programming skills.",
    name: "Aarav Sharma",
    title: "Web Development Student",
  },
  {
    quote:
      "I always wanted to learn Python but never knew where to start. The structured courses helped me understand concepts and build my first real projects.",
    name: "Priya Verma",
    title: "Python Learner",
  },
  {
    quote:
      "The data science lessons helped me improve my analytical thinking, problem-solving, and creativity. I love how easy it is to learn at my own pace.",
    name: "Riya Kapoor",
    title: "Data Science Student",
  },
  {
    quote:
      "The instructors make even difficult technical concepts easier to understand. Every lesson motivates me to practice more and become a better developer.",
    name: "Aditya Mehta",
    title: "Cyber Security Learner",
  },
  {
    quote:
      "TechExplore gave me the perfect platform to explore different technologies. It has turned my interest in tech into a regular learning journey.",
    name: "Ananya Singh",
    title: "Cloud Computing Student",
  },
];

export default MovingCards;