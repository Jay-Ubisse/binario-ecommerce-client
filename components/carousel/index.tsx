"use client";

import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div
              className="h-[20rem] bg-cover rounded-bl-[2rem] rounded-br-[2rem] flex overflow-hidden -z-40"
              style={{ backgroundImage: "url('/main-background.jpg')" }}
            >
              <div className="w-full h-full bg-primary/50 flex items-center justify-center">
                <div className="max-w-[60%] mx-auto">
                  <h1 className="text-primary-foreground text-2xl font-medium">
                    Preços Incríveis Para Todos os Seus Produtos Favoritos.
                  </h1>
                  <p className="text-secondary">Compre mais e page menos.</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
