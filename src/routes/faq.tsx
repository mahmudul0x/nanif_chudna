import { createFileRoute, Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Hanif's Dental" },
      { name: "description", content: "Answers to common questions about treatments, costs, recovery and appointments at Hanif's Dental." },
    ],
  }),
  component: FAQPage,
});

const groups = [
  {
    title: "Treatments",
    items: [
      { q: "Are dental procedures painful?", a: "Modern dentistry is virtually painless. We use advanced local anesthesia and gentle techniques to ensure comfort throughout every procedure." },
      { q: "How long does a root canal take?", a: "Most root canals are completed in 1–2 visits, each lasting around 60–90 minutes. We offer single-visit options where suitable." },
      { q: "Are dental implants safe?", a: "Yes. Implants have a 95%+ success rate and are made of biocompatible titanium. We use 3D imaging for precise, safe placement." },
    ],
  },
  {
    title: "Costs & Payment",
    items: [
      { q: "How much do treatments cost?", a: "Costs vary by procedure. After consultation we provide a transparent treatment plan with no hidden fees." },
      { q: "Do you offer payment plans?", a: "Yes — we offer flexible payment options for major treatments. Please discuss with our front desk." },
    ],
  },
  {
    title: "Recovery & Aftercare",
    items: [
      { q: "What is the recovery time after extraction?", a: "Most patients feel completely normal within 2–3 days. We provide detailed aftercare instructions to speed healing." },
      { q: "How do I care for new veneers or crowns?", a: "Brush twice daily, floss carefully, avoid biting hard objects, and visit us every 6 months for check-ups." },
    ],
  },
  {
    title: "Appointments",
    items: [
      { q: "How do I book an appointment?", a: "You can book online via our booking page, call 01783-215958, or message us on WhatsApp." },
      { q: "Do you accept walk-in patients?", a: "Yes, but we recommend booking ahead to avoid waiting times. Emergency cases are always prioritized." },
      { q: "What are your working hours?", a: "Saturday to Thursday: 10am – 9pm. Friday: 4pm – 9pm." },
    ],
  },
];

function FAQPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-mint-foreground text-xs font-semibold uppercase tracking-wider mb-4">FAQ</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-navy">Frequently Asked</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">Everything you need to know before your visit.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 space-y-12">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="font-display text-2xl font-bold text-navy mb-4">{g.title}</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {g.items.map((item, i) => (
                  <AccordionItem key={i} value={`${g.title}-${i}`} className="bg-card border border-border/60 rounded-2xl px-5 shadow-soft">
                    <AccordionTrigger className="text-left font-semibold text-navy hover:no-underline">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-navy">Still have questions?</h2>
          <p className="mt-3 text-muted-foreground">Our team is happy to help over phone, WhatsApp or in person.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg"><Link to="/contact">Contact Us</Link></Button>
            <Button asChild variant="outline" size="lg"><a href="https://wa.me/8801783215958" target="_blank" rel="noreferrer">WhatsApp</a></Button>
          </div>
        </div>
      </section>
    </>
  );
}
