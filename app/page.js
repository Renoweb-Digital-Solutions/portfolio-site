import Case_Studies from "@/components/Case_Studies";
import Hero from "@/components/Hero";
import Our_Products from "@/components/Our_Products";
import Our_Results from "@/components/Our_Results";
import Our_Services from "@/components/Our_Services";
import OurPartners from "@/components/shared/OurPartners";
import Testimonials from "@/components/shared/Testimonials";
import WhyRenoweb from "@/components/WhyRenoweb";

export default function Home() {
  return (
    <div className="relative poppins-regular">
      <div>
        <Hero />
        <Our_Products />
        <Our_Services />
        <Our_Results />
        <OurPartners />
        <Testimonials />
        <WhyRenoweb />
        <Case_Studies />
      </div>
    </div>
  );
}
