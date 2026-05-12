import { createFileRoute } from "@tanstack/react-router";
import { Heart, Users, Leaf, Award } from "lucide-react";
import hibachi from "@/assets/hibachi.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Super Buffet | St. Petersburg's Beloved Buffet" },
      { name: "description", content: "Family-owned Super Buffet has been serving St. Petersburg, FL since the early 2000s. Fresh ingredients, generous portions, friendly service." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="py-20 px-6 text-center" style={{ background: "var(--gradient-hero)" }}>
        <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">Our Story</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-background">St. Pete's home for endless flavor</h1>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src={hibachi} alt="Hibachi chef at work" loading="lazy" className="rounded-2xl shadow-[var(--shadow-glow)]" />
          <div>
            <h2 className="font-display text-4xl font-bold mb-6">A neighborhood institution</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Super Buffet has been a fixture of St. Petersburg's dining scene for years — one of the few buffets that survived the toughest times by sticking to what matters: fresh food, generous portions, and a welcome that feels like family.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Our kitchen turns out over 100 Chinese classics, hand-rolled sushi, and live hibachi cooked to order. Whether you're stopping in for a quick lunch or bringing the whole family for dinner, you'll find something everyone loves.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              We're proud of the 4.0-star rating earned across more than 1,145 reviews — and even prouder of the regulars who've made us part of their week.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-16">What sets us apart</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Heart, t: "Fresh daily", d: "Dishes refreshed throughout service — never sitting around." },
              { icon: Users, t: "Any group size", d: "Couples, families, big parties — and a private dining room." },
              { icon: Leaf, t: "Vegetarian friendly", d: "A dedicated vegetarian section with plenty of choice." },
              { icon: Award, t: "Locally loved", d: "1,145+ Google reviews and a loyal St. Pete following." },
            ].map((v) => (
              <div key={v.t} className="text-center">
                <div className="inline-flex items-center justify-center size-14 rounded-full bg-crimson/10 text-crimson mb-4">
                  <v.icon className="size-6" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{v.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
