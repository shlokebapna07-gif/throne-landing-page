import { createFileRoute, Link } from "@tanstack/react-router";
import throneImg from "../assets/sarkar-throne.png.asset.json?url";
import packagingAsset from "../assets/sarkar-packaging.png.asset.json";
import featuresAsset from "../assets/sarkar-features.png.asset.json";
import productAsset from "../assets/sarkar-product.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SARKAR Throne — By Bhuvan Bam" },
      {
        name: "description",
        content:
          "The Throne. A statement piece by Bhuvan Bam's SARKAR — crafted for those who rule. Shop the limited drop.",
      },
      { property: "og:title", content: "SARKAR Throne — By Bhuvan Bam" },
      {
        property: "og:description",
        content:
          "The Throne. A statement piece by Bhuvan Bam's SARKAR — crafted for those who rule.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/__l5e/assets-v1/1ad37f05-01b2-4ad3-b80e-e125bffcf5c8/sarkar-throne.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SARKAR Throne — By Bhuvan Bam" },
      {
        name: "twitter:description",
        content:
          "The Throne. A statement piece by Bhuvan Bam's SARKAR — crafted for those who rule.",
      },
      {
        name: "twitter:image",
        content: "/__l5e/assets-v1/1ad37f05-01b2-4ad3-b80e-e125bffcf5c8/sarkar-throne.png",
      },
    ],
  }),
  component: Index,
});

const SPECS = [
  { k: "Material", v: "Premium alloy body" },
  { k: "Finish", v: "Matte charcoal + gold" },
  { k: "Weight", v: "180g — solid feel" },
  { k: "Edition", v: "Limited drop" },
];

const STORY = [
  {
    n: "01",
    t: "Conceived by Bhuvan Bam",
    d: "Born from the creator's vision, the Throne is the flagship of SARKAR — designed to feel like power in your hand.",
  },
  {
    n: "02",
    t: "Crafted to last",
    d: "Precision-machined alloy with a matte charcoal finish and gold accents. Built to be carried, not stored.",
  },
  {
    n: "03",
    t: "Limited by intent",
    d: "A numbered, limited drop. Once the run is gone, the Throne is retired. No restocks, no reruns.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-display text-2xl tracking-[0.18em] text-gold">
            SARKAR
          </span>
          <a
            href="https://www.sarkar.store/products/throne"
            target="_blank"
            rel="noreferrer"
            className="font-body text-sm tracking-[0.18em] uppercase text-muted-foreground transition-colors hover:text-foreground"
          >
            Shop
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="surface-throne relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="order-2 md:order-1">
            <p className="eyebrow">By Bhuvan Bam</p>
            <h1 className="mt-4 font-display text-6xl leading-[0.9] md:text-8xl">
              THE <span className="text-gold">THRONE</span>
            </h1>
            <p className="mt-6 max-w-md font-body text-lg text-muted-foreground">
              Power, refined. The flagship of SARKAR — a statement piece
              built for those who rule.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.sarkar.store/products/throne"
                target="_blank"
                rel="noreferrer"
                className="btn-royal"
              >
                Buy the Throne
              </a>
              <a
                href="#story"
                className="btn-ghost-royal"
              >
                The Story
              </a>
            </div>
            <p className="mt-6 font-body text-sm tracking-wider text-muted-foreground">
              Limited drop · Numbered edition
            </p>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <img
              src={heroBagAsset.url}
              alt="SARKAR Throne parfum bottle resting on a black leather duffel bag"
              className="w-full max-w-md rounded-lg shadow-[0_40px_60px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>
      </section>

      {/* Specs strip */}
      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 md:grid-cols-4">
          {SPECS.map((s) => (
            <div key={s.k} className="py-8 text-center">
              <p className="eyebrow">{s.k}</p>
              <p className="mt-2 font-display text-xl text-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <p className="eyebrow">The Drop</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl">
            Every <span className="text-gold">detail</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <img
            src={packagingAsset.url}
            alt="SARKAR Throne parfum bottle with its cylinder tube and box packaging"
            loading="lazy"
            className="h-full w-full rounded-lg border border-border/60 object-cover"
          />
          <img
            src={productAsset.url}
            alt="SARKAR Throne 100ml matte black king-piece parfum bottle"
            loading="lazy"
            className="h-full w-full rounded-lg border border-border/60 bg-card object-contain p-6"
          />
          <img
            src={featuresAsset.url}
            alt="SARKAR Throne features: cruelty free, long lasting, 25% oil concentration, IFRA certified, formulated in France"
            loading="lazy"
            className="h-full w-full rounded-lg border border-border/60 object-cover md:col-span-2"
          />
        </div>
      </section>

      {/* Story */}
      <section id="story" className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <p className="eyebrow">The Craft</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl">
            Made to be <span className="text-gold">remembered</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {STORY.map((s) => (
            <div key={s.n} className="border-t border-border pt-6">
              <span className="font-display text-4xl text-gold">{s.n}</span>
              <h3 className="mt-4 font-display text-2xl">{s.t}</h3>
              <p className="mt-3 font-body text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="surface-throne">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="eyebrow">Take the Throne</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">
            Rule your <span className="text-gold">moment</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md font-body text-muted-foreground">
            A limited, numbered drop. Available now at sarkar.store while the
            run lasts.
          </p>
          <a
            href="https://www.sarkar.store/products/throne"
            target="_blank"
            rel="noreferrer"
            className="btn-royal mt-10"
          >
            Shop the Throne
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
          <span className="font-display text-xl tracking-[0.18em] text-gold">
            SARKAR
          </span>
          <p className="font-body text-xs tracking-wider text-muted-foreground">
            © {new Date().getFullYear()} SARKAR by Bhuvan Bam. All rights reserved.
          </p>
          <a
            href="https://www.sarkar.store"
            target="_blank"
            rel="noreferrer"
            className="font-body text-xs tracking-[0.18em] uppercase text-muted-foreground transition-colors hover:text-foreground"
          >
            sarkar.store
          </a>
        </div>
      </footer>
    </div>
  );
}
