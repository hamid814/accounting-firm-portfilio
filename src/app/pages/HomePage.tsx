import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { ServicesPreview } from '@/app/components/ServicesPreview';
import { About } from '@/app/components/About';
import { TeamPreview } from '@/app/components/TeamPreview';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';

export function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <About />
      <TeamPreview />
      <Contact />
    </>
  );
}
