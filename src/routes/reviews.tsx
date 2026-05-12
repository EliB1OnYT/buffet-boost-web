import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Super Buffet | 4.0★ on Google" },
      { name: "description", content: "See what guests are saying about Super Buffet in St. Petersburg, FL. 4.0 stars across 1,145+ Google reviews." },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Reviews,
});

const reviews = [
  {
    name: "Christopher Nuzzo",
    role: "Local Guide · 68 reviews · 84 photos",
    date: "2023 · Lunch",
    stars: 5,
    text: "One of the few buffets to survive the Covid lockdown era. Excellent food with reasonable prices, and a comfortable atmosphere. So much to choose from. As a bonus, there is a chef manning a hibachi grill, ready to make a custom dish for you. You won't be disappointed.",
    tags: ["Food 5/5", "Service 5/5", "Atmosphere 5/5"],
  },
  {
    name: "Janet Karczewski",
    role: "Local Guide · 145 reviews · 70 photos",
    date: "February · Lunch",
    stars: 5,
    text: "The food is good and they have many choices! Will be back. 😍 Food better than several other Chinese buffets in the area — more choices!",
    tags: ["Highly recommended for vegetarians", "Plenty of free parking"],
  },
  {
    name: "Cindy Douglas",
    role: "Local Guide · 24 reviews · 5 photos",
    date: "May 2026 · Lunch",
    stars: 5,
    text: "All you can eat — and worth every bite. Great spot for a relaxed meal with plenty of free parking.",
    tags: ["Food 5/5", "Service 5/5", "Atmosphere 5/5"],
  },
];

function Reviews() {
  return (
    <div>
      <section className="py-20 px-6 text-center" style={{ background: "var(--gradient-hero)" }}>
        <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">Loved by St. Pete</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-background mb-6">Guest Reviews</h1>
        <div className="inline-flex items-center gap-3 text-background">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`size-5 ${i < 4 ? "fill-gold text-gold" : "text-gold/40"}`} />
            ))}
          </div>
          <span className="font-display text-2xl font-bold text-gold">4.0</span>
          <span className="text-background/70">· 1,145+ Google reviews</span>
        </div>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto space-y-6">
        {reviews.map((r) => (
          <article key={r.name} className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden">
            <Quote className="absolute -top-2 -right-2 size-24 text-gold/10" />
            <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
              <div>
                <h2 className="font-display text-xl font-bold">{r.name}</h2>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{r.role}</p>
              </div>
              <div className="text-right">
                <div className="flex gap-0.5 justify-end mb-1">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">{r.date}</p>
              </div>
            </div>
            <p className="text-foreground/90 leading-relaxed text-lg italic mb-5">"{r.text}"</p>
            <div className="flex flex-wrap gap-2">
              {r.tags.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">{t}</span>
              ))}
            </div>
          </article>
        ))}

        <div className="text-center pt-8">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Super+Buffet+1035+62nd+Ave+N+St+Petersburg+FL"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-crimson text-primary-foreground font-semibold hover:opacity-90 transition"
          >
            Read all reviews on Google
          </a>
        </div>
      </section>
    </div>
  );
}
