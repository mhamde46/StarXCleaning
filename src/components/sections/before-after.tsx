import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const beforeAfterData = [
  { 
    before: PlaceHolderImages.find(p => p.id === 'before-1'),
    after: PlaceHolderImages.find(p => p.id === 'after-1'),
    service: "Deep Cleaning"
  },
  { 
    before: PlaceHolderImages.find(p => p.id === 'before-2'),
    after: PlaceHolderImages.find(p => p.id === 'after-2'),
    service: "Carpet Cleaning"
  },
  { 
    before: PlaceHolderImages.find(p => p.id === 'before-3'),
    after: PlaceHolderImages.find(p => p.id === 'after-3'),
    service: "End of Tenancy"
  },
];

export function BeforeAfterSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              See the Transformation
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our results speak for themselves. Swipe to see the difference our professional cleaning makes.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-5xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {beforeAfterData.map((item, index) => {
                if (!item.before || !item.after) return null;
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                    <div className="p-1">
                      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-4 md:p-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="relative">
                              <Image
                                src={item.before.imageUrl}
                                alt="Before cleaning"
                                width={600}
                                height={400}
                                className="rounded-lg object-cover aspect-[3/2]"
                                data-ai-hint={item.before.imageHint}
                              />
                               <Badge variant="destructive" className="absolute top-2 left-2">Before</Badge>
                            </div>
                            <div className="relative">
                              <Image
                                src={item.after.imageUrl}
                                alt="After cleaning"
                                width={600}
                                height={400}
                                className="rounded-lg object-cover aspect-[3/2]"
                                data-ai-hint={item.after.imageHint}
                              />
                              <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">After</Badge>
                            </div>
                          </div>
                          <p className="mt-4 text-center font-semibold text-lg">{item.service}</p>
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
