import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Goals from '@/components/Goals';
import RoverFeatures from '@/components/RoverFeatures';
import Competition from '@/components/Competition';
import Achievements from '@/components/Achievements';
import Sponsors from '@/components/Sponsors';
import Team from '@/components/Team';
import Recruitment from '@/components/Recruitment';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Goals />
      <RoverFeatures />
      <Competition />
      <Achievements />
      <Sponsors />
      <Team />
      <Recruitment />
      <Footer />
    </main>
  );
}
