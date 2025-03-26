import Case_Studies from "@/components/Case_Studies";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Our_Products from "@/components/Our_Products";
import Our_Results from "@/components/Our_Results";
import Our_Services from "@/components/Our_Services";
import WhyRenoweb from "@/components/WhyRenoweb";

export default function Home() {
  return (
    <div className="relative poppins-regular">
      <Navbar />
      <div>
        <Hero />
        <Our_Products />
        <Our_Services />
        <Our_Results />
        <WhyRenoweb />
        <Case_Studies />
        <ContactForm />
      </div>
    </div>
  );
}
