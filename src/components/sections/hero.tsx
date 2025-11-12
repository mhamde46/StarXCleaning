import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ShieldCheck, UserCheck, Award } from "lucide-react";

export function HeroSection() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero-bg');

    return (
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-white">
            {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={heroImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 container px-4 md:px-6 text-center space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline !leading-tight">
                    Impeccable Cleaning, Unbeatable Shine
                </h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-neutral-200">
                    Professional, eco-friendly cleaning across Bradford & West Yorkshire. Fully insured. DBS-checked team. 100% satisfaction guarantee.
                </p>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-base">
                    <span className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-accent" /> Fully Insured</span>
                    <span className="flex items-center gap-2"><UserCheck className="h-5 w-5 text-accent" /> DBS-Checked Staff</span>
                    <span className="flex items-center gap-2"><Award className="h-5 w-5 text-accent" /> 100% Satisfaction Guarantee</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                        <Link href="#services">Explore Services</Link>
                    </Button>
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                        <Link href="#booking">Get a Free Quote</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
