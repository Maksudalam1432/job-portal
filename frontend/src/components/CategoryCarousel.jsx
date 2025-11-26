import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

function CategoryCarousel() {
  const categories = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Data Analyst",
    "Cyber Security",
    "Graphic Designer",
    "UI / UX Designer",
    "Cloud Engineer",
    "Digital Marketing",
  ];

  return (
    <div className="w-full flex justify-center mt-10 px-4">
      <Carousel className="w-full max-w-4xl">
        <CarouselContent className="flex gap-4">
          {categories.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-auto flex justify-center"
            >
              <Button className="bg-white border border-gray-300 hover:bg-violet-600 hover:text-white text-gray-700 rounded-full px-6 py-3 transition text-sm shadow-sm whitespace-nowrap">
                {item}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden sm:flex bg-violet-600 text-white hover:bg-violet-700 shadow-lg rounded-full" />
        <CarouselNext className="hidden sm:flex bg-violet-600 text-white hover:bg-violet-700 shadow-lg rounded-full" />
      </Carousel>
    </div>
  );
}

export default CategoryCarousel;
