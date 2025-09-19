import Image from "next/image";
import ThemeToggle from "@/components/theme-toggle";
import Hero from "@/components/hero/hero";
import SearchBar from "@/components/search-bar/search-bar";
import Pill from "@/components/pill/pill";
import Featured from "@/components/Featured/featured";

export default function Home() {
  return (
    <div className="">
      {/* Navbar here */}
      <ThemeToggle />
      <main className="min-h-dvh bg-background text-foreground">
        {/* Header */}
        <Hero className="relative overflow-hidden" />
        <Featured className="mx-auto max-w-6xl px-4 py-8 md:py-12" />"
      </main>
      {/* Footer Here */}
    </div>
  );
}
