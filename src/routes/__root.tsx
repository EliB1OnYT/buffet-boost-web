import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-crimson">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-full bg-crimson px-6 py-2.5 text-sm font-semibold text-primary-foreground">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-crimson px-5 py-2 text-sm font-semibold text-primary-foreground">Try again</button>
          <a href="/" className="rounded-full border border-input px-5 py-2 text-sm font-semibold">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Super Buffet — All-You-Can-Eat Chinese & Sushi | St. Petersburg, FL" },
      { name: "description", content: "St. Pete's favorite all-you-can-eat buffet. Fresh sushi, hibachi grill, and 100+ Chinese dishes. $20–30 per person. Open daily." },
      { property: "og:title", content: "Super Buffet — St. Petersburg, FL" },
      { property: "og:description", content: "All-you-can-eat Chinese, sushi, and live hibachi. 4.0 stars · 1,145+ reviews." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Super Buffet" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: "Super Buffet",
        image: "/images/hero.jpg",
        address: { "@type": "PostalAddress", streetAddress: "1035 62nd Ave N", addressLocality: "St. Petersburg", addressRegion: "FL", postalCode: "33702" },
        telephone: "+1-727-520-9666",
        servesCuisine: ["Chinese", "Sushi", "Asian"],
        priceRange: "$20-$30",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.0", reviewCount: "1145" },
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
