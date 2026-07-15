import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, MapPin, Clock, Phone, ChevronRight } from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import makloubImg from "@/assets/makloub.jpg";
const logo = "/cowboy-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: `https://id-preview--af980d23-18c8-457c-8cf7-352ad7f757b6.lovable.app${makloubImg}` },
    ],
  }),
  component: Index,
});

const PHONE_DISPLAY = "48 050 048";
const PHONE_TEL = "+21648050048";

type Item = { name: string; price: string };
type Column = {
  title: string;
  columns?: string[]; // e.g. ["Large", "Mini"]
  items: (Item | { name: string; prices: string[] })[];
};

const MENU: { id: string; label: string; sections: Column[] }[] = [
  {
    id: "pizza",
    label: "Pizza & Napolitane",

    sections: [
      {
        title: "Pizza",
        columns: ["Large", "Mini"],
        items: [
          { name: "Margherita", prices: ["11.000", "8.000"] },
          { name: "Thon", prices: ["13.000", "8.500"] },
          { name: "Chawarma", prices: ["15.000", "9.000"] },
          { name: "Escalope", prices: ["16.000", "9.500"] },
          { name: "4 Saisons", prices: ["16.000", "10.000"] },
          { name: "Champignons", prices: ["12.000", "—"] },
          { name: "Thon Champignons", prices: ["15.000", "—"] },
          { name: "4 Fromages", prices: ["16.500", "—"] },
          { name: "Turc", prices: ["21.000", "—"] },
        ],
      },
      {
        title: "Napolitane",
        items: [
          { name: "Margherita", price: "15.000" },
          { name: "Thon", price: "16.500" },
          { name: "Escalope", price: "18.000" },
          { name: "4 Saisons", price: "17.500" },
          { name: "Champignons", price: "15.500" },
          { name: "4 Fromages", price: "20.000" },
          { name: "Fruit de Mer", price: "25.000" },
        ],
      },
      {
        title: "Triangle",
        items: [
          { name: "Thon", price: "10.000" },
          { name: "Chawarma", price: "11.000" },
          { name: "Escalope Grillé", price: "12.000" },
          { name: "Escalope Panné", price: "13.500" },
          { name: "Cordon Bleu", price: "13.500" },
          { name: "Cowboy", price: "15.000" },
        ],
      },
      {
        title: "Panozzo",
        items: [
          { name: "Thon", price: "10.000" },
          { name: "Chawarma", price: "10.500" },
          { name: "Escalope Grillé", price: "10.500" },
          { name: "Escalope Panné", price: "12.500" },
          { name: "Cordon Bleu", price: "12.000" },
          { name: "Kabeb", price: "13.500" },
        ],
      },
    ],
  },
  {
    id: "sandwich",
    label: "Sandwich & Tacos",

    sections: [
      {
        title: "Sandwich",
        items: [
          { name: "Thon", price: "7.500" },
          { name: "Escalope Grillé", price: "8.000" },
          { name: "Escalope Panné", price: "9.000" },
          { name: "Chawarma", price: "7.500" },
          { name: "Cordon Bleu", price: "9.000" },
        ],
      },
      {
        title: "Tacos",
        items: [
          { name: "Thon", price: "9.500" },
          { name: "Chawarma", price: "10.000" },
          { name: "Escalope Grillé", price: "10.000" },
          { name: "Escalope Panné", price: "11.000" },
          { name: "Cordon Bleu", price: "11.000" },
          { name: "Cowboy", price: "17.000" },
        ],
      },
      {
        title: "Makloub / Baguette Farcie / Libanais / Cornet",
        items: [
          { name: "Thon", price: "7.500" },
          { name: "Chawarma", price: "8.000" },
          { name: "Escalope Grillé", price: "8.500" },
          { name: "Escalope Panné", price: "9.500" },
          { name: "Cordon Bleu", price: "9.500" },
        ],
      },
      {
        title: "Galette",
        items: [
          { name: "Thon", price: "13.000" },
          { name: "Chawarma", price: "14.000" },
          { name: "Escalope Grillé", price: "15.000" },
          { name: "Escalope Panné", price: "16.500" },
          { name: "Cordon Bleu", price: "16.500" },
          { name: "Cowboy", price: "25.000" },
        ],
      },
    ],
  },
  {
    id: "plats",
    label: "Plats & Extras",

    sections: [
      {
        title: "Les Plats",
        items: [
          { name: "Escalope Grillé", price: "24.000" },
          { name: "Chawarma", price: "22.000" },
          { name: "Escalope / Chawarma", price: "30.000" },
        ],
      },
      {
        title: "Omelettes",
        items: [
          { name: "Fromage", price: "5.500" },
          { name: "Thon Fromage", price: "6.500" },
          { name: "Jambon Fromage", price: "6.000" },
          { name: "Spécial", price: "8.500" },
        ],
      },
      {
        title: "Chapati",
        items: [
          { name: "Jambon", price: "3.500" },
          { name: "Thon", price: "4.000" },
          { name: "Spécial", price: "5.500" },
        ],
      },
      {
        title: "Les Suppléments",
        items: [
          { name: "Mozarella", price: "4.000" },
          { name: "Gruyère", price: "5.000" },
          { name: "Cheddar", price: "4.000" },
          { name: "Fromage Slice", price: "1.000" },
          { name: "Œuf", price: "0.900" },
          { name: "Frite", price: "3.000" },
          { name: "Champignons", price: "2.000" },
        ],
      },
      {
        title: "Portion Viandes",
        items: [
          { name: "Thon", price: "4.000" },
          { name: "Chawarma", price: "5.000" },
          { name: "Escalope Grillé", price: "6.000" },
          { name: "Escalope Panné", price: "6.500" },
          { name: "Cordon Bleu", price: "4.000" },
        ],
      },
    ],
  },
];
function Index() {
  const [menuTab, setMenuTab] = useState(MENU[0].id);
  const currentMenu = MENU.find((m) => m.id === menuTab)!;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="The Cowboy" className="h-12 w-12 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]" width={48} height={48} />
            <span className="font-display text-xl tracking-widest text-parchment">THE COWBOY</span>
          </a>
          <nav className="hidden gap-8 text-sm uppercase tracking-[0.2em] text-parchment/80 md:flex">
            <a href="#menu" className="hover:text-accent transition-colors">Menu</a>
            <a href="#visit" className="hover:text-accent transition-colors">Visit</a>
          </nav>
          <a
            href={`tel:${PHONE_TEL}`}
            className="rounded-none border-2 border-accent bg-accent px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-accent-foreground shadow-[4px_4px_0_0_oklch(0_0_0)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_oklch(0_0_0)]"
          >
            <Phone className="mr-1.5 inline h-3.5 w-3.5" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen bg-grain">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(180deg, oklch(0.12 0.02 40 / 0.85) 0%, oklch(0.12 0.02 40 / 0.75) 50%, oklch(0.12 0.02 40 / 0.95) 100%), url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-32 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-accent"
          >
            <span className="h-px w-10 bg-accent" />
            Est. Sousse · Tunisia
            <span className="h-px w-10 bg-accent" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-6xl leading-[0.9] text-parchment sm:text-7xl md:text-8xl lg:text-9xl"
          >
            EAT LIKE
            <br />
            <span className="text-ember">AN OUTLAW</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 max-w-xl font-serif text-lg italic text-parchment/80 md:text-xl"
          >
            Pizza. Tacos. Makloub. Galettes. Slow-grilled, hard-hitting,
            straight from the wildest saloon in Sousse.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href={`tel:${PHONE_TEL}`}
              className="group relative inline-flex items-center gap-2 rounded-none border-2 border-ember bg-ember px-8 py-4 font-display text-lg tracking-widest text-primary-foreground shadow-[6px_6px_0_0_oklch(0_0_0)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_oklch(0_0_0)]"
            >
              <Phone className="h-5 w-5" />
              CALL {PHONE_DISPLAY}
            </a>
            <a
              href="#carte"
              className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-widest text-parchment/80 underline decoration-accent decoration-2 underline-offset-8 hover:text-accent"
            >
              See the full carte
              <ChevronRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-xs uppercase tracking-widest text-parchment/60"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-accent text-accent" : "text-accent/40"}`} />
                ))}
              </div>
              4.2 · Google
            </div>
            <div className="h-4 w-px bg-parchment/20" />
            <div>1–25 DT / person</div>
            <div className="h-4 w-px bg-parchment/20" />
            <div>Fast · Fresh · Fired up</div>
          </motion.div>
        </div>
      </section>


      {/* FULL CARTE */}
      <section id="menu" className="relative border-y border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <div className="mb-3 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-accent">
              <span className="h-px w-8 bg-accent" />
              La Carte
              <span className="h-px w-8 bg-accent" />
            </div>
            <h2 className="font-display text-5xl text-parchment md:text-6xl">
              THE FULL <span className="text-ember">MENU</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-serif italic text-muted-foreground">
              Prix en Dinar Tunisien. Everything grilled fresh to order.
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            {MENU.map((m) => {
              const isActive = m.id === menuTab;
              return (
                <button
                  key={m.id}
                  onClick={() => setMenuTab(m.id)}
                  className={`rounded-none border-2 px-5 py-3 font-display text-xs uppercase tracking-[0.2em] transition-all ${isActive
                    ? "border-accent bg-accent text-accent-foreground shadow-[4px_4px_0_0_oklch(0_0_0)]"
                    : "border-border bg-transparent text-parchment/70 hover:border-accent hover:text-accent"
                    }`}
                >
                  {m.label}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentMenu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              {/* Text menu */}
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {currentMenu.sections.map((section, si) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + si * 0.06 }}
                    className="border-t-2 border-ember pt-4"
                  >
                    <h3 className="mb-4 font-display text-xl uppercase tracking-widest text-parchment">
                      {section.title}
                    </h3>
                    {section.columns && (
                      <div className="mb-2 flex justify-end gap-6 text-[10px] uppercase tracking-widest text-accent">
                        {section.columns.map((c) => (
                          <span key={c} className="w-14 text-right">{c}</span>
                        ))}
                      </div>
                    )}
                    <ul className="space-y-2">
                      {section.items.map((it) => (
                        <li key={it.name} className="flex items-baseline justify-between gap-3 border-b border-dashed border-border/60 pb-1.5">
                          <span className="font-body text-sm text-parchment/90">{it.name}</span>
                          {"prices" in it ? (
                            <span className="flex gap-6 font-display text-sm text-accent">
                              {it.prices.map((p, i) => (
                                <span key={i} className="w-14 text-right tabular-nums">{p}</span>
                              ))}
                            </span>
                          ) : (
                            <span className="font-display text-sm text-accent tabular-nums">{it.price}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 text-center">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-3 border-2 border-ember bg-ember px-8 py-4 font-display text-base uppercase tracking-widest text-primary-foreground shadow-[6px_6px_0_0_oklch(0_0_0)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_oklch(0_0_0)]"
            >
              <Phone className="h-5 w-5" />
              Order — {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* VISIT / CTA */}
      <section id="visit" className="relative bg-background py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.4em] text-ember">Round 'em up</div>
          <h2 className="font-display text-5xl text-parchment md:text-7xl">
            SADDLE UP.
            <br />
            <span className="text-ember">COME HUNGRY.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-serif italic text-parchment/70">
            Walk in, take out, or send a rider. We'll have the grill fired up.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: MapPin, label: "Find us", value: "RJ6G+QC5, Sousse" },
              { icon: Clock, label: "Grill hours", value: "Daily · 11am – late" },
              { icon: Phone, label: "Call the saloon", value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
            ].map((c) => {
              const Comp = c.href ? "a" : "div";
              return (
                <Comp
                  key={c.label}
                  {...(c.href ? { href: c.href } : {})}
                  className="group block border-2 border-border bg-card p-6 text-left transition-all hover:border-ember hover:shadow-[6px_6px_0_0_oklch(0.62_0.19_40)]"
                >
                  <c.icon className="h-6 w-6 text-ember" />
                  <div className="mt-4 text-[10px] uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-1 font-display text-xl text-parchment">{c.value}</div>
                </Comp>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER with MAP */}
      <footer className="border-t-2 border-ember bg-card">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1fr_1.3fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="" className="h-14 w-14" width={56} height={56} />
              <div>
                <div className="font-display text-2xl tracking-widest text-parchment">THE COWBOY</div>
                <div className="text-[10px] uppercase tracking-widest text-accent">Sousse · Tunisia</div>
              </div>
            </div>
            <p className="mt-6 max-w-sm font-serif italic text-parchment/70">
              The wildest fast-food joint in town. Grilled hot, wrapped tight,
              priced fair — that's the cowboy code.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-ember" />
                <a
                  href="https://maps.google.com/?q=RJ6G%2BQC5+Sousse"
                  target="_blank"
                  rel="noreferrer"
                  className="text-parchment hover:text-accent"
                >
                  RJ6G+QC5, Sousse, Tunisia
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-ember" />
                <a href={`tel:${PHONE_TEL}`} className="font-display text-lg tracking-widest text-parchment hover:text-accent">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 shrink-0 text-ember" />
                <span className="text-parchment">Daily · 11:00 – late</span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 border-2 border-accent" />
            <iframe
              title="The Cowboy — Sousse location"
              src="https://maps.google.com/maps?q=RJ6G%2BQC5%20Sousse&t=&z=16&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              className="relative h-[360px] w-full border-0 grayscale-[0.15]"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href="https://maps.google.com/?q=RJ6G%2BQC5+Sousse"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 left-4 inline-flex items-center gap-2 border-2 border-accent bg-accent px-4 py-2 font-display text-xs uppercase tracking-widest text-accent-foreground shadow-[4px_4px_0_0_oklch(0_0_0)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_oklch(0_0_0)]"
            >
              <MapPin className="h-4 w-4" />
              Open in Maps
            </a>
          </div>
        </div>
        <div className="border-t border-border py-5">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-[10px] uppercase tracking-widest text-muted-foreground md:flex-row">
            <div>© {new Date().getFullYear()} The Cowboy · Sousse</div>
            <div>Ride safe, eat hard.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
