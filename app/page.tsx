import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MeetDoctor from "@/components/MeetDoctor";
import CtaBanner from "@/components/CtaBanner";
import Conditions from "@/components/Conditions";
import FirstVisit from "@/components/FirstVisit";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <MeetDoctor />
      <CtaBanner />
      <Conditions />
      <FirstVisit />
      <Testimonials />
      <Faq />
    </>
  );
}
