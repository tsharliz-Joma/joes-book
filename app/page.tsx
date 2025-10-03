import ThemeToggle from "@/components/theme-toggle";
import Hero from "@/components/hero/hero";
import Featured from "@/components/featured/featured";
import Footer from "@/components/footer/footer";
import Equipment from "@/components/equipment/equipment";
import LatestShortVideos from "@/components/latestShortVideos/latestShortVideos";
import {getMuxAssets} from "@/lib/mux";

export default async function Home() {
  const Mux = await getMuxAssets();
  return (
    <div className="">
      {/* Navbar here */}
      <ThemeToggle />
      <main className="min-h-dvh bg-background text-foreground">
        <Hero className="relative overflow-hidden" />
        <Featured className="mx-auto max-w-6xl px-4 py-8 md:py-12" />
        <LatestShortVideos
          mux={Mux}
          className="mx-auto max-w-6xl px-4 py-8 md:py-12"
        />
        <Equipment className="mx-auto max-w-6xl px-4 pb-12" />
      </main>
      <Footer className="border-t bg-card/40" />
    </div>
  );
}
