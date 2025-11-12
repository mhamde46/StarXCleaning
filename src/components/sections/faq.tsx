import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// Hardcoded FAQs for reliability and relevance, as requested.
const faqs = [
    {
        question: "What areas do you cover?",
        answer: "We primarily serve Bradford and surrounding areas in West Yorkshire, including Leeds, Halifax, and Shipley. Contact us to confirm if we cover your specific location."
    },
    {
        question: "Do you bring your own supplies and equipment?",
        answer: "Yes, our teams arrive with all the necessary professional-grade cleaning supplies and equipment to complete the job. We use high-quality, eco-friendly products."
    },
    {
        question: "Are you insured and DBS-checked?",
        answer: "Absolutely. We are fully insured, and all our staff members are DBS-checked for your peace of mind and security."
    },
    {
        question: "What’s included in an end-of-tenancy clean?",
        answer: "Our end-of-tenancy service is a comprehensive deep clean designed to meet agency standards. It includes kitchen degreasing, oven cleaning, limescale removal in bathrooms, inside window cleaning, and detailed cleaning of all fixtures, fittings, and floors."
    },
    {
        question: "How do you price deep cleaning?",
        answer: "Deep cleaning is priced based on the size and condition of the property. We provide a custom quote after understanding your specific requirements to ensure fair and accurate pricing."
    },
    {
        question: "What’s your cancellation/rescheduling policy?",
        answer: "We kindly request at least 48 hours' notice for any cancellations or to reschedule your appointment. This allows us to manage our schedule effectively. Cancellations made with less than 24 hours' notice may incur a fee."
    },
    {
        question: "Do you offer regular weekly or bi-weekly plans?",
        answer: "Yes, we offer flexible and discounted plans for regular home or office cleaning on a weekly, bi-weekly, or monthly basis. Contact us to discuss a recurring schedule that works for you."
    }
];


export function FaqSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions? We have answers. Here are some common queries from our clients.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          {faqs.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground whitespace-pre-line">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <p className="text-center text-muted-foreground">Could not load FAQs at the moment. Please try again later.</p>
          )}
        </div>
      </div>
    </section>
  );
}
