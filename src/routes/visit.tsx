import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Car, Users } from "lucide-react";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit — Super Buffet | 1035 62nd Ave N, St. Petersburg, FL" },
      { name: "description", content: "Visit Super Buffet at 1035 62nd Ave N, St. Petersburg, FL 33702. Open daily, plenty of free parking, no reservations needed." },
    ],
    links: [{ rel: "canonical", href: "/visit" }],
  }),
  component: Visit,
});

function Visit() {
  return (
    <div>
      <section className="py-20 px-6 text-center" style={{ background: "var(--gradient-hero)" }}>
        <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">Come on in</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-background">Visit Super Buffet</h1>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <InfoCard icon={MapPin} title="Address">
              <p className="text-lg">1035 62nd Ave N<br />St. Petersburg, FL 33702</p>
              <a href="https://maps.google.com/?q=1035+62nd+Ave+N+St+Petersburg+FL+33702" target="_blank" rel="noopener" className="inline-block mt-3 text-crimson font-semibold hover:underline">Get directions →</a>
            </InfoCard>
            <InfoCard icon={Phone} title="Phone">
              <a href="tel:+17275209666" className="text-lg hover:text-crimson">(727) 520-9666</a>
            </InfoCard>
            <InfoCard icon={Clock} title="Hours">
              <ul className="space-y-1 text-foreground/80">
                <li className="flex justify-between"><span>Mon – Thu</span><span>11:00 AM – 9:30 PM</span></li>
                <li className="flex justify-between"><span>Fri – Sat</span><span>11:00 AM – 10:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span><span>11:00 AM – 9:30 PM</span></li>
              </ul>
            </InfoCard>
            <div className="grid sm:grid-cols-2 gap-4">
              <InfoCard icon={Car} title="Parking" compact>
                <p className="text-sm text-foreground/80">Plenty of free parking on-site.</p>
              </InfoCard>
              <InfoCard icon={Users} title="Group Size" compact>
                <p className="text-sm text-foreground/80">Suitable for all groups. Private dining room available.</p>
              </InfoCard>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-glow)] min-h-[500px]">
            <iframe
              title="Super Buffet location"
              src="https://www.google.com/maps?q=1035+62nd+Ave+N+St+Petersburg+FL+33702&output=embed"
              className="w-full h-full min-h-[500px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-secondary text-center">
          <h2 className="font-display text-2xl font-bold mb-2">No reservations needed</h2>
          <p className="text-muted-foreground">Just walk right in — we'll have a table ready for you.</p>
        </div>
      </section>
    </div>
  );
}

function InfoCard({ icon: Icon, title, children, compact }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode; compact?: boolean }) {
  return (
    <div className={`bg-card border border-border rounded-2xl ${compact ? "p-5" : "p-7"}`}>
      <div className="flex items-center gap-3 mb-3">
        <div className="size-10 rounded-full bg-crimson/10 text-crimson flex items-center justify-center">
          <Icon className="size-5" />
        </div>
        <h3 className="font-display text-xl font-bold">{title}</h3>
      </div>
      {children}
    </div>
  );
}
