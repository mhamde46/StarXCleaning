import { HeroSection } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { BeforeAfterSection } from '@/components/sections/before-after';
import { BookingSection } from '@/components/sections/booking';
import { FaqSection } from '@/components/sections/faq';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <BeforeAfterSection />
      <BookingSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
