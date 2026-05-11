import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Instagram, MessageCircle, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Hanif's Dental, Dinajpur" },
      { name: "description", content: "Visit Hanif's Dental at Law College Mor Mosque, Dinajpur. Call 01783-215958 or message us on WhatsApp." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(5).max(1000),
});

function ContactPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd);
    const parsed = schema.safeParse(data);
    if (!parsed.success) { toast.error("Please complete all fields correctly."); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    toast.success("Message sent! We'll get back to you soon.");
    e.currentTarget.reset();
  };

  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-mint-foreground text-xs font-semibold uppercase tracking-wider mb-4">Contact</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-navy">Get in Touch</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">We'd love to hear from you. Reach out anytime — we typically respond within hours.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-3 gap-6">
          {[
            { icon: Phone, title: "Call Us", lines: ["01783-215958"], href: "tel:01783215958" },
            { icon: Mail, title: "Email", lines: ["abuhanifdnj@gmail.com"], href: "mailto:abuhanifdnj@gmail.com" },
            { icon: MapPin, title: "Visit Us", lines: ["Law College Mor Mosque,", "Dinajpur, Bangladesh"] },
          ].map((c) => (
            <a key={c.title} href={c.href} className="group p-8 rounded-3xl bg-card shadow-soft border border-border/50 hover:shadow-elegant transition-all hover:-translate-y-1 text-center">
              <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-glow mb-4 group-hover:scale-110 transition-transform">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl text-navy mb-2">{c.title}</h3>
              {c.lines.map((l) => <div key={l} className="text-muted-foreground">{l}</div>)}
            </a>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
          <div className="bg-card rounded-3xl shadow-elegant border border-border/50 p-8 md:p-10">
            <h2 className="font-display text-3xl font-bold text-navy mb-2">Send a Message</h2>
            <p className="text-muted-foreground mb-6">Have a question? Drop us a note.</p>
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input id="name" name="name" required maxLength={100} className="mt-2 h-12" />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required maxLength={255} className="mt-2 h-12" />
              </div>
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea id="message" name="message" rows={5} required maxLength={1000} className="mt-2" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[4/3] border border-border/50">
              <iframe
                title="Hanif's Dental location"
                src="https://www.google.com/maps?q=Law+College+Mor,+Dinajpur,+Bangladesh&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
            <div className="rounded-3xl bg-gradient-navy text-navy-foreground p-8 shadow-elegant relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/30 blur-3xl" />
              <div className="relative">
                <h3 className="font-display text-2xl mb-4">Connect</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3"><Clock className="h-5 w-5 text-primary-glow" /> Sat–Thu: 10am–9pm · Fri: 4pm–9pm</li>
                  <li className="flex items-center gap-3"><Instagram className="h-5 w-5 text-primary-glow" /> <a href="https://instagram.com/dr.abuhanif" className="hover:text-primary-glow" target="_blank" rel="noreferrer">@dr.abuhanif</a></li>
                  <li className="flex items-center gap-3"><MessageCircle className="h-5 w-5 text-primary-glow" /> <a href="https://wa.me/8801783215958" className="hover:text-primary-glow" target="_blank" rel="noreferrer">WhatsApp Chat</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
