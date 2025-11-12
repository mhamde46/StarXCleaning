import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Home, Building2, KeyRound, Sparkles, Leaf } from "lucide-react";
import { MopIcon } from "../icons/mop-icon";
import Link from "next/link";
import React from "react";

const services = [
  {
    icon: Home,
    title: "Home Cleaning",
    price: "From £20/hour",
    description: "Keep your home spotless with our regular or one-off cleaning services. We cover all areas, from bedrooms and bathrooms to kitchens and living spaces, ensuring a fresh and healthy environment for your family.",
    details: ["Dusting and wiping all surfaces", "Vacuuming and mopping floors", "Kitchen and bathroom sanitization", "Customizable cleaning plans"]
  },
  {
    icon: Building2,
    title: "Office Cleaning",
    price: "Custom Quote",
    description: "A clean office boosts productivity and creates a positive impression. Our commercial cleaning services are tailored to your business needs, with flexible scheduling to minimize disruption.",
    details: ["Daily, weekly, or bi-weekly service", "Workstation and common area cleaning", "Restroom and pantry sanitation", "Waste disposal"]
  },
  {
    icon: MopIcon,
    title: "Carpet Cleaning",
    price: "Custom Quote",
    description: "Revive your carpets with our professional deep cleaning service. We use advanced techniques to remove stubborn stains, dirt, and allergens, extending the life of your carpets.",
    details: ["Hot water extraction method", "Removes deep-seated dirt and allergens", "Stain and odor removal", "Fast drying times"]
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    price: "Custom Quote",
    description: "Our comprehensive deep cleaning service is perfect for a seasonal refresh or moving. We meticulously clean every nook and cranny, leaving your space exceptionally clean and sanitized.",
    details: ["Inside ovens and refrigerators", "Washing windows and blinds", "Scrubbing tiles and grout", "Cleaning behind furniture"]
  },
  {
    icon: KeyRound,
    title: "End of Tenancy",
    price: "Custom Quote",
    description: "Ensure you get your full deposit back with our guaranteed end-of-tenancy cleaning. We follow a detailed checklist approved by letting agencies to meet the required standards.",
    details: ["Agency-approved checklist", "Kitchen degreasing & oven cleaning", "Limescale removal in bathrooms", "Inside window cleaning", "Skirting boards, sockets & switches", "Full vacuum & mop throughout", "Guaranteed to pass inspection"]
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              Our Cleaning Services
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a wide range of professional cleaning services to meet your needs. All services are performed with eco-friendly products.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col h-full rounded-lg border bg-card text-card-foreground shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-full">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold font-headline">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground min-h-[72px]">{service.description}</p>
                </div>
                <div className="p-6 pt-0 mt-auto">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-b-0">
                        <AccordionTrigger className="text-primary hover:no-underline py-2">More Info</AccordionTrigger>
                        <AccordionContent>
                           <ul className="space-y-2 text-muted-foreground mt-2">
                             {service.details.map((detail, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <Leaf className="h-4 w-4 text-accent" />
                                  <span>{detail}</span>
                                </li>
                             ))}
                           </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                </div>
                <div className="flex items-center justify-between p-6 pt-0 border-t mt-4">
                    <p className="text-lg font-semibold">{service.price}</p>
                    <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="#booking">Request Quote</Link>
                    </Button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
