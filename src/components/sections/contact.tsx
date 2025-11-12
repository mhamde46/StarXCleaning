import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function ContactSection() {
  const mapImage = PlaceHolderImages.find(p => p.id === 'map-placeholder');

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Have questions or need a custom quote? Contact us! We&apos;re here to help make your space sparkle.
            </p>
            <div className="space-y-4">
              <div className="space-y-2">
                  <Input type="text" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                  <Input type="email" placeholder="Your Email" />
              </div>
              <div className="space-y-2">
                  <Textarea placeholder="Your Message" />
              </div>
              <Button type="submit">Send Message</Button>
            </div>
            <div className="space-y-4 text-lg pt-6 border-t">
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <span>STAR X CLEANING LTD, Bradford, West Yorkshire, UK</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <a href="mailto:info@starxcleaning.co.uk" className="hover:underline">info@starxcleaning.co.uk</a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <a href="tel:+447916987846" className="hover:underline">+44 7916 987846</a>
              </div>
               <div className="flex items-center gap-4">
                <MessageSquare className="h-6 w-6 text-primary" />
                 <Link href="https://wa.me/447916987846" target="_blank" rel="noopener noreferrer" className="hover:underline">Message us on WhatsApp</Link>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            {mapImage ? (
                <Image
                src={mapImage.imageUrl}
                alt="Map showing service area in Bradford"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                data-ai-hint={mapImage.imageHint}
                />
            ) : <div className="w-full h-full bg-muted flex items-center justify-center"><p>Map loading...</p></div> }
            
          </div>
        </div>
      </div>
    </section>
  );
}
