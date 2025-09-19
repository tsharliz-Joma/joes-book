import Image from "next/image";
import ThemeToggle from "@/components/theme-toggle";
import Hero from "@/components/hero/hero";
import SearchBar from "@/components/search-bar/search-bar";
import Pill from "@/components/pill/pill";
import Featured from "@/components/featured/featured";
import Footer from "@/components/footer/footer";
import Video from "@/components/video/video";
import Equipment from "@/components/equipment/equipment";

export default function Home() {
  return (
    <div className="">
      {/* Navbar here */}
      <ThemeToggle />
      <main className="min-h-dvh bg-background text-foreground">
        {/* Header */}
        <Hero className="relative overflow-hidden" />
        <Featured className="mx-auto max-w-6xl px-4 py-8 md:py-12" />
        <Video className="mx-auto max-w-6xl px-4 py-8 md:py-12" />
        <Equipment className="mx-auto max-w-6xl px-4 pb-12" />
      </main>
      <Footer className="border-t bg-card/40" />
    </div>
  );
}
