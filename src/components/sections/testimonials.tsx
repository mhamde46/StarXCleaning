import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StarRating } from "@/components/shared/star-rating";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    name: "Sarah L.",
    rating: 5,
    text: "Absolutely phenomenal service! The team was professional, punctual, and left my house sparkling. The attention to detail was incredible. I highly recommend Star X Cleaning.",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-1'),
  },
  {
    name: "Tom Henderson",
    rating: 5,
    text: "We hired them for an end-of-tenancy clean, and they did not disappoint. We got our full deposit back without any issues. The quality of work is top-notch. Worth every penny.",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-2'),
  },
  {
    name: "Brighton Corp.",
    rating: 5,
    text: "Our office has never been cleaner. The staff are friendly and efficient, and they use eco-friendly products which is a huge plus for us. Consistent and reliable service.",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-3'),
  },
   {
    name: "Emily R.",
    rating: 4,
    text: "Great job on our carpets! They managed to get out a coffee stain I thought was permanent. The team was very polite and explained the process. Will use them again.",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-4'),
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We pride ourselves on delivering exceptional service. Here’s what our satisfied customers have to say.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => {
                if (!testimonial.image) return null;
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-4">
                      <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="flex flex-col flex-grow items-center justify-center p-6 text-center">
                          <Image
                            src={testimonial.image.imageUrl}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                            className="rounded-full mb-4"
                            data-ai-hint={testimonial.image.imageHint}
                          />
                          <p className="text-lg font-medium">{testimonial.name}</p>
                          <div className="my-2">
                            <StarRating rating={testimonial.rating} />
                          </div>
                          <p className="text-muted-foreground italic flex-grow">&quot;{testimonial.text}&quot;</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
