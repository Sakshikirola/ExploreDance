"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function MovingCards() {
  return (
    <div className="h-130 w-full bg-black bg-grid-white relative flex flex-col items-center justify-center overflow-hidden"> 
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Where Passion Meets Every Move</h2>
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
      "DanceExplore has made learning dance so enjoyable for me. The lessons are easy to follow, and I have gained so much confidence in my dancing skills.",
    name: "Aarav Sharma",
    title: "Hip Hop Student",
  },
  {
    quote:
      "I always wanted to learn Bollywood dance but never knew where to start. The structured courses helped me learn new moves and improve my expressions.",
    name: "Priya Verma",
    title: "Bollywood Dance Learner",
  },
  {
    quote:
      "The contemporary dance lessons helped me improve my flexibility, body control, and creativity. I love how easy it is to learn at my own pace.",
    name: "Riya Kapoor",
    title: "Contemporary Dance Student",
  },
  {
    quote:
      "The instructors make even difficult dance techniques easier to understand. Every lesson motivates me to practice more and become a better dancer.",
    name: "Aditya Mehta",
    title: "Jazz Dance Learner",
  },
  {
    quote:
      "DanceExplore gave me the perfect platform to explore different dance styles. It has turned my interest in dancing into a regular learning journey.",
    name: "Ananya Singh",
    title: "Classical Dance Student",
  },
];

export default MovingCards;