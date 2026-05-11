import { Link } from "@tanstack/react-router";
import { MessageCircle, Calendar } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/8801783215958"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.7_0.18_150)] text-white shadow-elegant hover:scale-110 transition-transform animate-float"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <Link
        to="/booking"
        aria-label="Book appointment"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:scale-110 transition-transform"
      >
        <Calendar className="h-6 w-6" />
      </Link>
    </div>
  );
}
