import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative poppins-regular">
      <Navbar />
      <div>
        <Hero />
      </div>
    </div>
  );
}
