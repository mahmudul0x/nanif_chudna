import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/lib/services-data";
import { CheckCircle2, Calendar, Clock, Phone } from "lucide-react";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Appointment | Hanif's Dental" },
      {
        name: "description",
        content: "Book your dental consultation with Dr. Abu Hanif at Hanif's Dental, Dinajpur.",
      },
    ],
  }),
  component: BookingPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  phone: z.string().trim().min(10, "Valid phone required").max(20),
  email: z.string().trim().email("Valid email required").max(255).or(z.literal("")),
  treatment: z.string().min(1, "Select a treatment"),
  date: z.string().min(1, "Pick a date"),
  message: z.string().max(1000).optional(),
});

function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const clinicPhone = "8801783215958";

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    const values = parsed.data;
    const appointmentMessage = [
      "Hello, I would like to book a dental appointment.",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      values.email ? `Email: ${values.email}` : "",
      `Treatment: ${values.treatment}`,
      `Preferred date: ${values.date}`,
      values.message ? `Notes: ${values.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${clinicPhone}?text=${encodeURIComponent(appointmentMessage)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setLoading(false);
    setSubmitted(true);
    e.currentTarget.reset();
    toast.success("WhatsApp booking draft opened. Send it and the clinic will confirm.");
  };

  const minDate = new Date().toISOString().split("T")[0];

  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-mint-foreground text-xs font-semibold uppercase tracking-wider mb-4">
            Book Appointment
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-navy">
            Schedule Your Visit
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form and our team will confirm your appointment within a few hours.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.5fr_1fr] gap-10">
          <div className="bg-card rounded-3xl shadow-elegant border border-border/50 p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-12 animate-fade-up">
                <div className="mx-auto h-20 w-20 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-glow mb-6">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h2 className="font-display text-3xl font-bold text-navy">Request Received!</h2>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  Your appointment details are ready in WhatsApp. Send the message there and the
                  clinic team can confirm your visit.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Button asChild variant="hero">
                    <a href="https://wa.me/8801783215958" target="_blank" rel="noreferrer">
                      Chat on WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Book Another
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" required maxLength={100} className="mt-2 h-12" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      maxLength={20}
                      className="mt-2 h-12"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    maxLength={255}
                    className="mt-2 h-12"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="treatment">Treatment *</Label>
                    <Select name="treatment" required>
                      <SelectTrigger className="mt-2 h-12">
                        <SelectValue placeholder="Select treatment" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s.slug} value={s.name}>
                            {s.name}
                          </SelectItem>
                        ))}
                        <SelectItem value="General Consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      min={minDate}
                      required
                      className="mt-2 h-12"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Notes</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={1000}
                    className="mt-2"
                    placeholder="Anything we should know?"
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Request Appointment"}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  By submitting, you agree to be contacted by our team.
                </p>
              </form>
            )}
          </div>

          <aside className="space-y-5">
            <div className="rounded-3xl bg-gradient-navy text-navy-foreground p-8 shadow-elegant relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/30 blur-3xl" />
              <h3 className="font-display text-2xl mb-4 relative">Visit Information</h3>
              <ul className="space-y-4 relative text-sm">
                <li className="flex gap-3">
                  <Clock className="h-5 w-5 text-primary-glow shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Working Hours</div>
                    <div className="text-navy-foreground/70">Sat – Thu: 10am – 9pm</div>
                    <div className="text-navy-foreground/70">Friday: 4pm – 9pm</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 text-primary-glow shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Direct Call</div>
                    <a
                      href="tel:01783215958"
                      className="text-navy-foreground/70 hover:text-primary-glow"
                    >
                      01783-215958
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Calendar className="h-5 w-5 text-primary-glow shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Same-Day Slots</div>
                    <div className="text-navy-foreground/70">
                      Often available — call to confirm.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl bg-mint p-8 border border-primary/10">
              <h3 className="font-display text-xl text-mint-foreground mb-2">Prefer WhatsApp?</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Message us directly for faster response.
              </p>
              <Button asChild variant="hero" className="w-full">
                <a href="https://wa.me/8801783215958" target="_blank" rel="noreferrer">
                  Open WhatsApp
                </a>
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
