import { Link, Outlet } from "@tanstack/react-router";
import { Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/reviews", label: "Reviews" },
  { to: "/about", label: "About" },
  { to: "/visit", label: "Visit" },
];

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Super Buffet" className="h-12 w-12 object-contain" />
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-bold text-crimson">Super</span>
              <span className="font-display text-2xl font-bold text-gold tracking-wider">Buffet</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm uppercase tracking-widest text-foreground/80 hover:text-crimson transition-colors"
                activeProps={{ className: "text-sm uppercase tracking-widest text-crimson font-semibold" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <a
            href="tel:+17275209666"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-crimson text-primary-foreground text-sm font-semibold hover:opacity-90 transition"
          >
            <Phone className="size-4" /> (727) 520-9666
          </a>
        </div>
      </header>
      <main className="flex-1"><Outlet /></main>
      <footer className="bg-ink text-background/90 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-display text-2xl font-bold text-crimson">Super</span>
              <span className="font-display text-2xl font-bold text-gold tracking-wider">Buffet</span>
            </div>
            <p className="text-sm text-background/60 leading-relaxed">
              All-you-can-eat Chinese cuisine, fresh sushi, and live hibachi grill in St. Petersburg, FL.
            </p>
          </div>
          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs mb-4">Visit Us</h4>
            <p className="text-sm flex items-start gap-2 mb-2"><MapPin className="size-4 mt-0.5 shrink-0" /> 1035 62nd Ave N<br />St. Petersburg, FL 33702</p>
            <p className="text-sm flex items-center gap-2"><Phone className="size-4" /> (727) 520-9666</p>
          </div>
          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs mb-4">Hours</h4>
            <p className="text-sm text-background/70">Open Daily<br />Lunch · Dinner<br />Closes 9:30 PM</p>
          </div>
        </div>
        <div className="border-t border-background/10 py-6 text-center text-xs text-background/40">
          © {new Date().getFullYear()} Super Buffet. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
