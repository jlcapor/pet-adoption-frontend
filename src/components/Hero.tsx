'use client'
import { images } from "@/lib/assets";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Shell } from "./shell";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "./page-header";

export const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [hasInteracted, setHasInteracted] = useState(false);
  useEffect(() => {
    if (hasInteracted) return;
    const timer = setTimeout(
      () => setCurrentImageIndex((i) => (i === images.length - 1 ? 0 : i + 1)),
      7000
    );

    return () => clearInterval(timer);
  }, [currentImageIndex, hasInteracted]);

  return (
    <div className="mb-4">
      <div className="relative">
        <div
          key={currentImageIndex}
          className="relative w-full h-[500px] animate-fade-in"
        >
          <Image
            src={images[currentImageIndex] ?? ""}
            alt="hero"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute w-full h-full bg-translucentDark top-0 bottom-0 left-0 right-0">
        <div className="absolute md:top-0 bottom-0 right-0 left-0 m-auto w-fit h-fit text-center">
          {/* <div className="px-4 py-4 lg:flex lg:h-screen lg:items-center"> */}
          <div className="px-4 py-4 lg:items-center">
            <Shell className="max-w-6xl gap-0">
              <PageHeader
                as="section"
                className="mx-auto items-center gap-2 text-center"
                withPadding
              >
                 <PageHeaderHeading
                    className="text-white animate-fade-up"
                    style={{ animationDelay: "0.20s", animationFillMode: "both" }}
                 >
                    ¡Descubre amor en cuatro patas! Adopta y cambia vidas hoy mismo. Sé un héroe.
                 </PageHeaderHeading>
                 <PageHeaderDescription
                   className="mx-auto max-w-4xl mt-4 text-white animate-fade-up"
                   style={{ animationDelay: "0.30s", animationFillMode: "both" }}
                 >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores repellat perspiciatis aspernatur
                  quis voluptatum porro incidunt,
                  libero sequi quos eos velit
                 </PageHeaderDescription>
                 <PageActions
                   className="animate-fade-up"
                   style={{ animationDelay: "0.40s", animationFillMode: "both" }}
                 >
                  <Link href="/pets" className={cn(buttonVariants())}>
                    Adopta una mascota
                  </Link>

                  <Link
                    href="/shelter"
                    className={cn(buttonVariants({ variant: "outline" }))}
                  >
                    Únete como refugio
                  </Link>
                 </PageActions>
              </PageHeader>
            </Shell>
          </div>
        </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentImageIndex(i);
              setHasInteracted(true);
              }}
            > 
              <Hero.Indicator
                filled={currentImageIndex === i ? true : false}
              />
          </button>
          ))}
      </div>
    </div>
  );
};


const Indicator = ({ filled }: { filled: boolean }) => {
  return (
    <div
      className={cn(
        "w-3 h-3 rounded-full border-primary border-2 mt-2",
        filled && "bg-primary"
      )}
    />
  );
};

Hero.Indicator = Indicator;
