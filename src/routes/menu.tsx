import { createFileRoute } from "@tanstack/react-router";
import { Flame, Fish, Utensils, Soup, Cookie, Salad } from "lucide-react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Super Buffet | All-You-Can-Eat Chinese & Sushi" },
      { name: "description", content: "Explore the Super Buffet menu: 100+ Chinese dishes, fresh sushi, live hibachi grill, soups, salads, and desserts." },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: Menu,
});

const sections = [
  {
    icon: Flame, title: "Hibachi Grill", note: "Cooked to order",
    items: [
      ["Hibachi Steak", "Tender steak grilled with garlic butter"],
      ["Hibachi Chicken", "Marinated chicken, soy-ginger glaze"],
      ["Hibachi Shrimp", "Plump shrimp, sweet & smoky"],
      ["Mixed Vegetables", "Onions, peppers, mushrooms, zucchini"],
      ["Fried Rice", "Egg, scallion, soy"],
    ],
  },
  {
    icon: Fish, title: "Sushi & Sashimi", note: "Hand-rolled fresh",
    items: [
      ["California Roll", "Crab, avocado, cucumber"],
      ["Spicy Tuna Roll", "Fresh tuna, sriracha mayo"],
      ["Salmon Nigiri", "Hand-pressed sushi rice"],
      ["Shrimp Tempura Roll", "Crispy shrimp, eel sauce"],
      ["Rainbow Roll", "Assorted fish over California roll"],
    ],
  },
  {
    icon: Utensils, title: "Chinese Classics",
    items: [
      ["General Tso's Chicken", "Crispy, sweet, and a little spicy"],
      ["Sesame Chicken", "Golden-fried, sticky-sweet glaze"],
      ["Beef & Broccoli", "Tender beef, garlic-ginger sauce"],
      ["Sweet & Sour Pork", "Pineapple, peppers, classic sauce"],
      ["Mongolian Beef", "Scallions, brown sauce"],
      ["Kung Pao Chicken", "Peanuts, chilies, savory heat"],
    ],
  },
  {
    icon: Soup, title: "Noodles & Rice",
    items: [
      ["Lo Mein", "Soft noodles, vegetables"],
      ["Chow Mein", "Crispy noodles, savory sauce"],
      ["Singapore Noodles", "Curry-spiced rice noodles"],
      ["Yang Chow Fried Rice", "Shrimp, ham, peas, egg"],
    ],
  },
  {
    icon: Salad, title: "Salads & Sides",
    items: [
      ["Seaweed Salad", "Sesame oil, ginger"],
      ["Crab Rangoon", "Crispy wontons, cream cheese"],
      ["Egg Rolls", "Pork & vegetable, golden fried"],
      ["Steamed Dumplings", "Pork-filled, soy dipping"],
    ],
  },
  {
    icon: Cookie, title: "Desserts & Fruit",
    items: [
      ["Fresh Fruit Bar", "Pineapple, watermelon, oranges"],
      ["Assorted Cakes", "Rotating selection"],
      ["Soft-Serve Ice Cream", "Vanilla & chocolate"],
      ["Almond Cookies", "Crisp & buttery"],
    ],
  },
];

function Menu() {
  return (
    <div>
      <section className="py-20 px-6 text-center" style={{ background: "var(--gradient-hero)" }}>
        <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">All-You-Can-Eat</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-background mb-4">Our Menu</h1>
        <p className="text-background/70 max-w-2xl mx-auto text-lg">A rotating selection of over 100 dishes — here's a taste of what you'll find at the buffet today.</p>
        <div className="mt-8 inline-flex items-center gap-6 px-6 py-3 rounded-full bg-background/10 backdrop-blur border border-background/20 text-background">
          <div><span className="text-gold font-semibold">Lunch</span> · $10–20</div>
          <div className="w-px h-4 bg-background/30" />
          <div><span className="text-gold font-semibold">Dinner</span> · $20–30</div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {sections.map((s) => (
            <div key={s.title} className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <s.icon className="size-6 text-crimson" />
                  <h2 className="font-display text-2xl font-bold">{s.title}</h2>
                </div>
                {s.note && <span className="text-xs uppercase tracking-widest text-gold">{s.note}</span>}
              </div>
              <ul className="space-y-4">
                {s.items.map(([name, desc]) => (
                  <li key={name} className="flex justify-between gap-6">
                    <div>
                      <div className="font-semibold">{name}</div>
                      <div className="text-sm text-muted-foreground">{desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-12 italic">Menu items rotate daily. Vegetarian options available — just ask our staff.</p>
      </section>
    </div>
  );
}
