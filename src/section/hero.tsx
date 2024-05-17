"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { heroSlides } from "@/data/data";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-60 max-w-xs sm:w-[650px] md:w-[900px] sm:max-w-[920px] "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {heroSlides.map((item) => (
          <CarouselItem key={item.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-auto">
           <div className="relative">
           <Image className="flex pt-6 relative " src={item.bgImg} width={800} height={150} alt={item.title} />
           </div>
            <div className="absolute flex-row text-neutral-50 w-96 pt-20 px-4 lg:pt-32 lg:px-10 lg:w-[500px]">
          <div className="flex justify-center items-center">
          <h2 className="text-2xl font-semibold ">{item.title}</h2>
          </div>
          <span> {item.brief}</span>
            </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
//




const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center">
        <CarouselPlugin />
      </div>
    </div>
  );
};

export default Hero;
