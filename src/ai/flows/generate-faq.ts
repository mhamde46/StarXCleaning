// src/ai/flows/generate-faq.ts
'use server';
/**
 * @fileOverview A flow that generates a FAQ section based on the website's content.
 *
 * - generateFaq - A function that generates the FAQ section.
 * - GenerateFaqInput - The input type for the generateFaq function.
 * - GenerateFaqOutput - The return type for the generateFaq function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFaqInputSchema = z.object({
  websiteContent: z
    .string()
    .describe("The content of the website to generate the FAQ section from."),
});
export type GenerateFaqInput = z.infer<typeof GenerateFaqInputSchema>;

const GenerateFaqOutputSchema = z.object({
  faqSection: z
    .string()
    .describe("The generated FAQ section in markdown format."),
});
export type GenerateFaqOutput = z.infer<typeof GenerateFaqOutputSchema>;

export async function generateFaq(input: GenerateFaqInput): Promise<GenerateFaqOutput> {
  return generateFaqFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFaqPrompt',
  input: {schema: GenerateFaqInputSchema},
  output: {schema: GenerateFaqOutputSchema, format: 'json'},
  prompt: `You are a website content expert. Generate a FAQ section in markdown format based on the following website content:\n\n{{websiteContent}}\n\nThe FAQ section should cover common questions about pricing, availability, cleaning products, cancellation policy, and other relevant topics.  Each answer should be concise and easy to understand.
`,
});

const generateFaqFlow = ai.defineFlow(
  {
    name: 'generateFaqFlow',
    inputSchema: GenerateFaqInputSchema,
    outputSchema: GenerateFaqOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
