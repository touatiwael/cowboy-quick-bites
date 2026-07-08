import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, MapPin, Clock, Phone, Flame, ChevronRight } from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import makloubImg from "@/assets/makloub.jpg";
import tacosImg from "@/assets/tacos.jpg";
import burgerImg from "@/assets/burger.jpg";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: `https://id-preview--af980d23-18c8-457c-8cf7-352ad7f757b6.lovable.app${makloubImg}` },
    ],
  }),
  component: Index,
});

type Dish = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  desc: string;
  image: string;
  heat: number;
};

const DISHES: Dish[] = [
  {
    id: "makloub",
    name: "The Outlaw Makloub",
    tagline: "Wanted: dead or alive.",
    price: "8 DT",
    desc: "Grilled meat, molten cheese, fresh veg, pressed between crispy flatbread until it surrenders. The most wanted sandwich in Sousse.",
    image: makloubImg,
    heat: 3,
  },
  {
    id: "tacos",
    name: "The Sheriff's Tacos",
    tagline: "Law & flavor.",
    price: "9 DT",
    desc: "Grilled tortilla loaded with tender meat, golden fries and our smoky cheese sauce. Wrapped, pressed, served with attitude.",
    image: tacosImg,
    heat: 2,
  },
  {
    id: "burger",
    name: "The Bandit Burger",
    tagline: "Rob your appetite.",
    price: "10 DT",
    desc: "Smashed beef patty, thick bacon, caramelized onions and melted cheddar on a toasted brioche. Straight from the saloon grill.",
    image: burgerImg,
    heat: 2,
  },
];

function Index() {
  const [active, setActive] = useState<Dish>(DISHES[0]);

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
            <a href="#story" className="hover:text-accent transition-colors">Saloon</a>
            <a href="#visit" className="hover:text-accent transition-colors">Visit</a>
          </nav>
          <a
            href="#order"
            className="rounded-none border-2 border-accent bg-accent px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-accent-foreground shadow-[4px_4px_0_0_oklch(0_0_0)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_oklch(0_0_0)]"
          >
            Order Now
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
        {/* torn edge bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-background"
             style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 40%, 96% 90%, 92% 30%, 88% 80%, 84% 20%, 80% 90%, 76% 40%, 72% 80%, 68% 20%, 64% 90%, 60% 30%, 56% 80%, 52% 40%, 48% 90%, 44% 20%, 40% 80%, 36% 30%, 32% 90%, 28% 40%, 24% 80%, 20% 20%, 16% 90%, 12% 30%, 8% 80%, 4% 40%, 0 90%)" }} />

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
            Makloub. Tacos. Burgers. Slow-grilled, hard-hitting, straight from
            the wildest saloon in Sousse.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href="#menu"
              className="group relative inline-flex items-center gap-2 rounded-none border-2 border-ember bg-ember px-8 py-4 font-display text-lg tracking-widest text-primary-foreground shadow-[6px_6px_0_0_oklch(0_0_0)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_oklch(0_0_0)]"
            >
              <Flame className="h-5 w-5" />
              SEE THE MENU
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#visit"
              className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-widest text-parchment/80 underline decoration-accent decoration-2 underline-offset-8 hover:text-accent"
            >
              Find the saloon
            </a>
          </motion.div>

          {/* rating strip */}
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
            <div>1–10 DT / person</div>
            <div className="h-4 w-px bg-parchment/20" />
            <div>Fast · Fresh · Fired up</div>
          </motion.div>
        </div>
      </section>

      {/* MENU SWITCHER */}
      <section id="menu" className="relative bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <div className="mb-3 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-ember">
              <span className="h-px w-8 bg-ember" />
              Wanted · Dead or Alive
              <span className="h-px w-8 bg-ember" />
            </div>
            <h2 className="font-display text-5xl text-parchment md:text-6xl">
              PICK YOUR POISON
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-serif italic text-muted-foreground">
              Three legendary bites. One cowboy grill. Tap a name and watch it draw.
            </p>
          </div>

          {/* Selector */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            {DISHES.map((d) => {
              const isActive = d.id === active.id;
              return (
                <button
                  key={d.id}
                  onClick={() => setActive(d)}
                  className={`relative rounded-none border-2 px-6 py-3 font-display text-sm uppercase tracking-[0.2em] transition-all ${
                    isActive
                      ? "border-ember bg-ember text-primary-foreground shadow-[4px_4px_0_0_oklch(0_0_0)]"
                      : "border-border bg-transparent text-parchment/70 hover:border-accent hover:text-accent"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute -top-2 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-ember"
                    />
                  )}
                  {d.name.split(" ").slice(-1)[0]}
                </button>
              );
            })}
          </div>

          {/* Animated card */}
          <div className="relative min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 30, rotateX: -8 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -30, rotateX: 8 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-10 md:grid-cols-2 md:items-center"
                style={{ perspective: 1200 }}
              >
                {/* Image */}
                <motion.div
                  initial={{ scale: 0.9, rotate: -3 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="absolute inset-4 -z-10 border-2 border-accent" />
                  <div className="absolute inset-0 -z-20 translate-x-4 translate-y-4 bg-ember" />
                  <img
                    src={active.image}
                    alt={active.name}
                    width={1200}
                    height={1200}
                    className="aspect-square w-full object-cover shadow-2xl"
                  />
                  <div className="absolute right-4 top-4 rotate-6 border-2 border-parchment bg-background/90 px-4 py-2 font-display text-2xl text-parchment shadow-lg">
                    {active.price}
                  </div>
                </motion.div>

                {/* Text */}
                <div>
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mb-3 font-serif text-lg italic text-accent"
                  >
                    "{active.tagline}"
                  </motion.p>
                  <motion.h3
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-display text-5xl leading-none text-parchment md:text-6xl"
                  >
                    {active.name.toUpperCase()}
                  </motion.h3>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                    className="mt-5 flex items-center gap-2"
                  >
                    {[...Array(3)].map((_, i) => (
                      <Flame
                        key={i}
                        className={`h-5 w-5 ${i < active.heat ? "fill-ember text-ember" : "text-muted"}`}
                      />
                    ))}
                    <span className="ml-2 text-xs uppercase tracking-widest text-muted-foreground">
                      Heat level
                    </span>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 font-body text-lg leading-relaxed text-parchment/80"
                  >
                    {active.desc}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 flex flex-wrap gap-4"
                  >
                    <a
                      href="#order"
                      className="inline-flex items-center gap-2 border-2 border-ember bg-ember px-6 py-3 font-display text-sm uppercase tracking-widest text-primary-foreground shadow-[4px_4px_0_0_oklch(0_0_0)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0_0_oklch(0_0_0)]"
                    >
                      Order this
                      <ChevronRight className="h-4 w-4" />
                    </a>
                    <a
                      href="#visit"
                      className="inline-flex items-center gap-2 border-2 border-parchment/40 bg-transparent px-6 py-3 font-display text-sm uppercase tracking-widest text-parchment/80 hover:border-accent hover:text-accent"
                    >
                      Visit us
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="relative border-y border-border bg-card py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.4em] text-accent">Our Saloon</div>
            <h2 className="font-display text-5xl leading-tight text-parchment md:text-6xl">
              A LITTLE
              <br />
              <span className="text-ember">WILD.</span>
              <br />
              A LOT TASTY.
            </h2>
            <p className="mt-6 max-w-md font-serif text-lg italic leading-relaxed text-parchment/80">
              The Cowboy was born on a dusty street in Sousse with one rule:
              serve food so good, they'll ride miles for it. Grilled hot,
              wrapped tight, priced fair. That's the cowboy code.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: "4.2", v: "Google rating" },
                { k: "1-10", v: "DT per plate" },
                { k: "100%", v: "Grilled fresh" },
              ].map((s) => (
                <div key={s.v} className="border-l-2 border-ember pl-3">
                  <div className="font-display text-3xl text-parchment">{s.k}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 border-2 border-accent" />
            <img
              src={heroBg}
              alt="Inside the Cowboy saloon"
              width={1920}
              height={1200}
              loading="lazy"
              className="relative aspect-[4/3] w-full object-cover grayscale-[0.2]"
            />
            <div className="absolute bottom-4 left-4 right-4 border border-parchment/40 bg-background/80 p-4 backdrop-blur">
              <div className="font-serif italic text-parchment/90">
                "Best makloub I've had in Sousse. The place has soul."
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-accent">
                ★★★★★ — Verified guest
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISIT / CTA */}
      <section id="visit" className="relative bg-background py-24">
        <div id="order" className="mx-auto max-w-5xl px-6 text-center">
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
              { icon: Phone, label: "Reserve a spot", value: "Call the saloon" },
            ].map((c) => (
              <div
                key={c.label}
                className="group border-2 border-border bg-card p-6 text-left transition-all hover:border-ember hover:shadow-[6px_6px_0_0_oklch(0.62_0.19_40)]"
              >
                <c.icon className="h-6 w-6 text-ember" />
                <div className="mt-4 text-[10px] uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </div>
                <div className="mt-1 font-display text-xl text-parchment">{c.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <a
              href="https://maps.google.com/?q=RJ6G%2BQC5+Sousse"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border-2 border-accent bg-accent px-10 py-5 font-display text-xl uppercase tracking-widest text-accent-foreground shadow-[6px_6px_0_0_oklch(0_0_0)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_oklch(0_0_0)]"
            >
              <MapPin className="h-5 w-5" />
              Get directions
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs uppercase tracking-widest text-muted-foreground md:flex-row">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-8 w-8" width={32} height={32} />
            <span className="font-display text-parchment">The Cowboy · Sousse</span>
          </div>
          <div>© {new Date().getFullYear()} — Ride safe, eat hard.</div>
        </div>
      </footer>
    </div>
  );
}
