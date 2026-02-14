import React from "react";
import Image from "next/image";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
} from "@/components/images";

export default function Home() {
  const items = [
    {
      title: "You are my sunshine ☀️",
      image: image1,
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Love you to the moon 🌙",
      image: image2,
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Forever & Always 💕",
      image: image3,
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "My heart is yours 💖",
      image: image4,
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "You complete me ✨",
      image: image5,
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Better together 💑",
      image: image6,
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "You're my favorite ❤️",
      image: image7,
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Every moment with you feels like a beautiful dream I never want to wake up from 💝
      </p>
      {items.map((item) => (
        <DraggableCardBody key={item.title} className={item.className}>
          <Image
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
            width={320}
            height={320}
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
