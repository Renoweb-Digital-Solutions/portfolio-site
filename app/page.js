import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Our_Products from "@/components/Our_Products";

export default function Home() {
  return (
    <div className="relative poppins-regular">
      <Navbar />
      <div>
        <Hero />
        <Our_Products />
      </div>
    </div>
  );
}
