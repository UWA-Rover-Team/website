import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import RoverFeatures from '@/components/RoverFeatures';
import Competition from '@/components/Competition';
import Achievements from '@/components/Achievements';
import Sponsors from '@/components/Sponsors';
import SponsorshipTiers from '@/components/SponsorshipTiers';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <RoverFeatures />
      <Competition />
      <Achievements />
      <Sponsors />
      <SponsorshipTiers />
      <Team />
      <Footer />
    </main>
  );
}
