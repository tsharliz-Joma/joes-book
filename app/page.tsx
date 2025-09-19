import Image from "next/image";
import ThemeToggle from "@/components/theme-toggle";
import Hero from "@/components/hero/hero";
import SearchBar from "@/components/search-bar/search-bar";

export default function Home() {
  return (
    <div className="">
      {/* Navbar here */}
      <ThemeToggle />
      <main className="min-h-dvh bg-background text-foreground">
        {/* Header */}
        <Hero />
        <SearchBar />
      </main>
      {/* Footer Here */}
    </div>
  );
}
