import { BookingForm } from "@/components/booking-form";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import Link from 'next/link';

export function BookingSection() {
  return (
    <section id="booking" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
              Book Your Cleaning Today
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Fill out the form to schedule your cleaning service. For instant booking or support, chat with us on WhatsApp.
            </p>
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Link href="https://wa.me/447916987846" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat on WhatsApp (+44 7916 987846)
              </Link>
            </Button>
             <p className="text-sm text-muted-foreground">Prefer WhatsApp? <a href="https://wa.me/447916987846" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Message us for instant support.</a></p>
          </div>
          <div className="w-full">
             <div className="rounded-lg border bg-card text-card-foreground shadow-lg p-6 md:p-8">
              <BookingForm />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
