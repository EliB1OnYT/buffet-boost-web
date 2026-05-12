import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Flame, Fish, Utensils, Clock, MapPin, Phone, Quote } from "lucide-react";
import hero from "@/assets/hero-buffet.jpg";
import hibachi from "@/assets/hibachi.jpg";
import sushi from "@/assets/sushi.jpg";
import chinese from "@/assets/chinese.jpg";
import gallery1 from "@/assets/gallery/album-1.jpg";
import gallery2 from "@/assets/gallery/album-2.jpg";
import gallery5 from "@/assets/gallery/album-5.jpg";
import gallery7 from "@/assets/gallery/album-7.jpg";
import gallery10 from "@/assets/gallery/album-10.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Super Buffet — All-You-Can-Eat Chinese & Sushi | St. Petersburg, FL" },
      { name: "description", content: "St. Pete's favorite all-you-can-eat buffet. Fresh sushi, live hibachi, and 100+ Chinese dishes from $20." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <img src={hero} alt="Super Buffet spread of Chinese dishes and sushi" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        <div className="relative max-w-7xl mx-auto px-6 pb-20 pt-32 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 backdrop-blur border border-gold/40 text-gold text-xs uppercase tracking-widest mb-6">
              <Star className="size-3.5 fill-gold" /> 4.0 · 1,145+ Reviews
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-background leading-[0.95] mb-6">
              Endless flavor.<br />
              <span className="text-gold italic">One legendary</span><br />buffet.
            </h1>
            <p className="text-lg md:text-xl text-background/80 max-w-xl mb-8 leading-relaxed">
              Over 100 fresh Chinese dishes, hand-rolled sushi, and a live hibachi grill — all you can eat in the heart of St. Petersburg.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/reviews" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold text-ink font-semibold hover:scale-105 transition shadow-[var(--shadow-gold)]">
                Read Reviews
              </Link>
              <Link to="/visit" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-background/40 text-background font-semibold hover:bg-background/10 transition">
                <MapPin className="size-4" /> Visit Us
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-background/70 text-sm">
              <div><span className="text-gold font-semibold">$20–30</span> per person</div>
              <div className="flex items-center gap-2"><Clock className="size-4" /> Open · Closes 9:30 PM</div>
              <div>Walk-ins welcome</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">Three kitchens. One price.</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">A feast for every craving</h2>
            <p className="text-muted-foreground text-lg">From spicy Szechuan to fresh-cut sashimi to flame-grilled hibachi — pile your plate, then come back for more.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: chinese, icon: Utensils, title: "Chinese Classics", desc: "General Tso's, lo mein, dumplings, sweet & sour, and dozens more — made fresh throughout the day." },
              { img: sushi, icon: Fish, title: "Fresh Sushi Bar", desc: "Hand-rolled nigiri, maki, and sashimi prepared by our in-house sushi chefs." },
              { img: hibachi, icon: Flame, title: "Live Hibachi Grill", desc: "Pick your protein and veggies — our chef cooks it right in front of you, exactly the way you like it." },
            ].map((f) => (
              <article key={f.title} className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-[var(--shadow-glow)] transition-all duration-500">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={f.img} alt={f.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 text-background">
                  <f.icon className="size-7 text-gold mb-3" />
                  <h3 className="font-display text-2xl font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-background/80 leading-relaxed">{f.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 bg-ink text-background">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { n: "100+", l: "Fresh dishes daily" },
            { n: "1,145", l: "Google reviews" },
            { n: "4.0★", l: "Average rating" },
            { n: "15+", l: "Years serving St. Pete" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-5xl md:text-6xl font-bold text-gold mb-2">{s.n}</div>
              <div className="text-sm uppercase tracking-widest text-background/60">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">What guests are saying</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Loved by locals</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Christopher N.", role: "Local Guide · 68 reviews", text: "Excellent food with reasonable prices, and a comfortable atmosphere. So much to choose from. As a bonus, there's a chef manning a hibachi grill ready to make a custom dish for you. You won't be disappointed.", stars: 5 },
              { name: "Janet K.", role: "Local Guide · 145 reviews", text: "The food is good and they have many choices! Will be back. Food better than several other Chinese buffets in the area — more choices!", stars: 5 },
              { name: "Cindy D.", role: "Local Guide · 24 reviews", text: "Food, service, atmosphere — five stars across the board. Plenty of free parking and a great spot for lunch.", stars: 5 },
            ].map((r) => (
              <article key={r.name} className="p-8 rounded-2xl bg-card border border-border relative">
                <Quote className="absolute top-6 right-6 size-8 text-gold/30" />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-6 italic">"{r.text}"</p>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{r.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">Straight from the buffet</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">A taste of what's waiting</h2>
            <p className="text-muted-foreground text-lg">Real plates. Real photos. No filters needed.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 [grid-auto-rows:140px] md:[grid-auto-rows:200px]">
            {[
              { src: gallery1, alt: "Signature buffet spread", cls: "col-span-2 row-span-2" },
              { src: gallery2, alt: "Fresh sushi selection", cls: "col-span-1 row-span-1" },
              { src: gallery7, alt: "Chinese specialties", cls: "col-span-1 row-span-2" },
              { src: gallery5, alt: "Hibachi favorites", cls: "col-span-1 row-span-1" },
              { src: gallery10, alt: "More buffet dishes", cls: "col-span-2 md:col-span-1 row-span-1" },
            ].map((g) => (
              <figure key={g.alt} className={`group relative overflow-hidden rounded-2xl ${g.cls} shadow-lg hover:shadow-[var(--shadow-glow)] transition-shadow duration-500`}>
                <img src={g.src} alt={g.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <figcaption className="absolute bottom-3 left-4 right-4 text-background text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {g.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-background mb-6">
            Hungry yet? <span className="text-gold italic">Come on in.</span>
          </h2>
          <p className="text-background/70 text-lg mb-10 max-w-2xl mx-auto">
            No reservations needed — just walk in, grab a plate, and dig into the best buffet in St. Petersburg.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+17275209666" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-ink font-semibold shadow-[var(--shadow-gold)]">
              <Phone className="size-4" /> (727) 520-9666
            </a>
            <Link to="/visit" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-background/40 text-background font-semibold hover:bg-background/10 transition">
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
