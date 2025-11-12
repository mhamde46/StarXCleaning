import Link from 'next/link';
import { Mail, Phone, MessageSquare, ShieldCheck, UserCheck, Award } from 'lucide-react';
import { Logo } from './logo';

export function Footer() {
  const socialLinks = [
    { href: 'mailto:info@starxcleaning.co.uk', icon: Mail },
    { href: 'tel:+447916987846', icon: Phone },
    { href: 'https://wa.me/447916987846', icon: MessageSquare },
  ];

  const trustBadges = [
    { icon: ShieldCheck, text: "Fully Insured" },
    { icon: UserCheck, text: "DBS-checked staff" },
    { icon: Award, text: "100% Satisfaction Guarantee" },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Your trusted partner for professional cleaning services in West Yorkshire.
            </p>
            <div className="mt-6 space-y-2">
                <p className="font-semibold text-foreground">Our Guarantee</p>
                {trustBadges.map((badge, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <badge.icon className="h-4 w-4 text-accent" />
                        <span>{badge.text}</span>
                    </div>
                ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-foreground">Quick Links</p>
            <div className="mt-5 flex flex-col items-start space-y-2 text-sm">
              <Link href="/#services" className="text-muted-foreground transition-colors duration-300 hover:text-primary">Services</Link>
              <Link href="/#testimonials" className="text-muted-foreground transition-colors duration-300 hover:text-primary">Testimonials</Link>
              <Link href="/#booking" className="text-muted-foreground transition-colors duration-300 hover:text-primary">Book Now</Link>
              <Link href="/#faq" className="text-muted-foreground transition-colors duration-300 hover:text-primary">FAQ</Link>
            </div>
          </div>

          <div>
            <p className="font-semibold text-foreground">Contact Us</p>
            <div className="mt-5 flex flex-col items-start space-y-3 text-sm">
              <p className="text-muted-foreground">STAR X CLEANING LTD</p>
              <p className="text-muted-foreground">Company Number: 15414895</p>
              <p className="text-muted-foreground">Bradford, West Yorkshire, UK</p>
              <a href="mailto:info@starxcleaning.co.uk" className="text-muted-foreground transition-colors duration-300 hover:text-primary">info@starxcleaning.co.uk</a>
              <a href="tel:+447916987846" className="text-muted-foreground transition-colors duration-300 hover:text-primary">+44 7916 987846</a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-foreground">Follow Us</p>
            <div className="mt-5 flex items-center space-x-3">
              {socialLinks.map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
             <p className="mt-4 text-xs text-muted-foreground">Prefer WhatsApp? <a href="https://wa.me/447916987846" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Message us for instant support.</a></p>
          </div>
        </div>

        <hr className="my-6" />

        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Star X Cleaning Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
