import * as React from "react";
import {Coffee} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-muted"></div>
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <div className="grid gap-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Coffee className="size-7" />
            <span className="text-3xl">Joe's Book</span>
          </div>
          <h1 className="mt-2 text-2xl font-semibold leading-tight md:text-5xl">
            For barista by baristas.
          </h1>
          <p className="mt-1 max-w-2xl text-balance text-muted-foreground">
            Visual guides, short videos, and tested recipes for every brew
            method. Built for baristas by baristas. A knowledge hub for all
            baristas, coffee enthusiasts, and anyone passionate about the world
            of coffee.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
