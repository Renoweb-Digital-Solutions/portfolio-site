import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Our_Products from "@/components/Our_Products";
import Our_Services from "@/components/Our_Services";

export default function Home() {
  return (
    <div className="relative poppins-regular">
      <Navbar />
      <div>
        <Hero />
        <Our_Products />
        <Our_Services />
      </div>
    </div>
  );
}
