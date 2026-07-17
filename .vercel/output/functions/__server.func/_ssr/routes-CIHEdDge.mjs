import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as Clock, i as MapPin, n as Star, o as ChevronRight, r as Phone, t as Truck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CIHEdDge.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_bg_default = "/assets/hero-bg-CtzezHb3.jpg";
var MENU_IMAGES = {
	pizza: "/assets/pizza-menu-DtgK95WR.png",
	sandwich: "/assets/sandwich-tacos-menu-B62AFhDh.png",
	plats: "/assets/plats-extras-menu-D-5SX-Kb.png"
};
var logo = "/cowboy-logo.png";
var PHONE_DISPLAY = "48 050 048";
var PHONE_TEL = "+21648050048";
var MENU = [
	{
		id: "pizza",
		label: "Pizza & Napolitane",
		sections: [
			{
				title: "Pizza",
				columns: ["Large", "Mini"],
				items: [
					{
						name: "Margherita",
						prices: ["11.000", "8.000"]
					},
					{
						name: "Thon",
						prices: ["13.000", "8.500"]
					},
					{
						name: "Chawarma",
						prices: ["15.000", "9.000"]
					},
					{
						name: "Escalope",
						prices: ["16.000", "9.500"]
					},
					{
						name: "4 Saisons",
						prices: ["16.000", "10.000"]
					},
					{
						name: "Champignons",
						prices: ["12.000", "—"]
					},
					{
						name: "Thon Champignons",
						prices: ["15.000", "—"]
					},
					{
						name: "4 Fromages",
						prices: ["16.500", "—"]
					},
					{
						name: "Turc",
						prices: ["21.000", "—"]
					}
				]
			},
			{
				title: "Napolitane",
				items: [
					{
						name: "Margherita",
						price: "15.000"
					},
					{
						name: "Thon",
						price: "16.500"
					},
					{
						name: "Escalope",
						price: "18.000"
					},
					{
						name: "4 Saisons",
						price: "17.500"
					},
					{
						name: "Champignons",
						price: "15.500"
					},
					{
						name: "4 Fromages",
						price: "20.000"
					},
					{
						name: "Fruit de Mer",
						price: "25.000"
					}
				]
			},
			{
				title: "Triangle",
				items: [
					{
						name: "Thon",
						price: "10.000"
					},
					{
						name: "Chawarma",
						price: "11.000"
					},
					{
						name: "Escalope Grillé",
						price: "12.000"
					},
					{
						name: "Escalope Panné",
						price: "13.500"
					},
					{
						name: "Cordon Bleu",
						price: "13.500"
					},
					{
						name: "Cowboy",
						price: "15.000"
					}
				]
			},
			{
				title: "Panozzo",
				items: [
					{
						name: "Thon",
						price: "10.000"
					},
					{
						name: "Chawarma",
						price: "10.500"
					},
					{
						name: "Escalope Grillé",
						price: "10.500"
					},
					{
						name: "Escalope Panné",
						price: "12.500"
					},
					{
						name: "Cordon Bleu",
						price: "12.000"
					},
					{
						name: "Kabeb",
						price: "13.500"
					}
				]
			}
		]
	},
	{
		id: "sandwich",
		label: "Sandwich & Tacos",
		sections: [
			{
				title: "Sandwich",
				items: [
					{
						name: "Thon",
						price: "7.500"
					},
					{
						name: "Escalope Grillé",
						price: "8.000"
					},
					{
						name: "Escalope Panné",
						price: "9.000"
					},
					{
						name: "Chawarma",
						price: "7.500"
					},
					{
						name: "Cordon Bleu",
						price: "9.000"
					}
				]
			},
			{
				title: "Tacos",
				items: [
					{
						name: "Thon",
						price: "9.500"
					},
					{
						name: "Chawarma",
						price: "10.000"
					},
					{
						name: "Escalope Grillé",
						price: "10.000"
					},
					{
						name: "Escalope Panné",
						price: "11.000"
					},
					{
						name: "Cordon Bleu",
						price: "11.000"
					},
					{
						name: "Cowboy",
						price: "17.000"
					}
				]
			},
			{
				title: "Makloub / Baguette Farcie / Libanais / Cornet",
				items: [
					{
						name: "Thon",
						price: "7.500"
					},
					{
						name: "Chawarma",
						price: "8.000"
					},
					{
						name: "Escalope Grillé",
						price: "8.500"
					},
					{
						name: "Escalope Panné",
						price: "9.500"
					},
					{
						name: "Cordon Bleu",
						price: "9.500"
					}
				]
			},
			{
				title: "Galette",
				items: [
					{
						name: "Thon",
						price: "13.000"
					},
					{
						name: "Chawarma",
						price: "14.000"
					},
					{
						name: "Escalope Grillé",
						price: "15.000"
					},
					{
						name: "Escalope Panné",
						price: "16.500"
					},
					{
						name: "Cordon Bleu",
						price: "16.500"
					},
					{
						name: "Cowboy",
						price: "25.000"
					}
				]
			}
		]
	},
	{
		id: "plats",
		label: "Plats & Extras",
		sections: [
			{
				title: "Les Plats",
				items: [
					{
						name: "Escalope Grillé",
						price: "24.000"
					},
					{
						name: "Chawarma",
						price: "22.000"
					},
					{
						name: "Escalope / Chawarma",
						price: "30.000"
					}
				]
			},
			{
				title: "Omelettes",
				items: [
					{
						name: "Fromage",
						price: "5.500"
					},
					{
						name: "Thon Fromage",
						price: "6.500"
					},
					{
						name: "Jambon Fromage",
						price: "6.000"
					},
					{
						name: "Spécial",
						price: "8.500"
					}
				]
			},
			{
				title: "Chapati",
				items: [
					{
						name: "Jambon",
						price: "3.500"
					},
					{
						name: "Thon",
						price: "4.000"
					},
					{
						name: "Spécial",
						price: "5.500"
					}
				]
			},
			{
				title: "Les Suppléments",
				items: [
					{
						name: "Mozarella",
						price: "4.000"
					},
					{
						name: "Gruyère",
						price: "5.000"
					},
					{
						name: "Cheddar",
						price: "4.000"
					},
					{
						name: "Fromage Slice",
						price: "1.000"
					},
					{
						name: "Œuf",
						price: "0.900"
					},
					{
						name: "Frite",
						price: "3.000"
					},
					{
						name: "Champignons",
						price: "2.000"
					}
				]
			},
			{
				title: "Portion Viandes",
				items: [
					{
						name: "Thon",
						price: "4.000"
					},
					{
						name: "Chawarma",
						price: "5.000"
					},
					{
						name: "Escalope Grillé",
						price: "6.000"
					},
					{
						name: "Escalope Panné",
						price: "6.500"
					},
					{
						name: "Cordon Bleu",
						price: "4.000"
					}
				]
			}
		]
	}
];
function Index() {
	const [menuTab, setMenuTab] = (0, import_react.useState)(MENU[0].id);
	const currentMenu = MENU.find((m) => m.id === menuTab);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "absolute top-0 left-0 right-0 z-30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo,
								alt: "The Cowboy",
								className: "h-12 w-12 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]",
								width: 48,
								height: 48
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl tracking-widest text-parchment",
								children: "THE COWBOY"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden gap-8 text-sm uppercase tracking-[0.2em] text-parchment/80 md:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#menu",
								className: "hover:text-accent transition-colors",
								children: "Menu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#visit",
								className: "hover:text-accent transition-colors",
								children: "Visit"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${PHONE_TEL}`,
							className: "rounded-none border-2 border-accent bg-accent px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-accent-foreground shadow-[4px_4px_0_0_oklch(0_0_0)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_oklch(0_0_0)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mr-1.5 inline h-3.5 w-3.5" }), PHONE_DISPLAY]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "top",
				className: "relative min-h-screen bg-grain",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: {
						backgroundImage: `linear-gradient(180deg, oklch(0.12 0.02 40 / 0.85) 0%, oklch(0.12 0.02 40 / 0.75) 50%, oklch(0.12 0.02 40 / 0.95) 100%), url(${hero_bg_default})`,
						backgroundSize: "cover",
						backgroundPosition: "center"
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-32 pb-24 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: -20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .6 },
							className: "mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-accent",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-accent" }),
								"Est. Sousse · Tunisia · Livraison à Domicile",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-accent" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							initial: {
								opacity: 0,
								y: 30
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .8,
								delay: .1
							},
							className: "font-display text-6xl leading-[0.9] text-parchment sm:text-7xl md:text-8xl lg:text-9xl",
							children: [
								"EAT LIKE",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-ember",
									children: "AN OUTLAW"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: {
								duration: .8,
								delay: .4
							},
							className: "mt-8 max-w-xl font-serif text-lg italic text-parchment/80 md:text-xl",
							children: "Pizza. Tacos. Makloub. Galettes. Slow-grilled, hard-hitting, straight from the wildest saloon in Sousse."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .6
							},
							className: "mt-10 flex flex-col items-center gap-4 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${PHONE_TEL}`,
								className: "group relative inline-flex items-center gap-2 rounded-none border-2 border-ember bg-ember px-8 py-4 font-display text-lg tracking-widest text-primary-foreground shadow-[6px_6px_0_0_oklch(0_0_0)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_oklch(0_0_0)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5 animate-pulse" }),
									"CALL ",
									PHONE_DISPLAY
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#menu",
								className: "inline-flex items-center gap-2 font-body text-sm uppercase tracking-widest text-parchment/80 underline decoration-accent decoration-2 underline-offset-8 hover:text-accent",
								children: ["See the full menu", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: {
								duration: .8,
								delay: .7
							},
							className: "mt-4 flex items-center gap-2 text-xs uppercase tracking-widest text-accent border border-accent/20 px-4 py-2 bg-background/60 backdrop-blur-sm shadow-[4px_4px_0_0_oklch(0_0_0)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-4 w-4 text-accent animate-bounce" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Livraison à Domicile disponible sur Sousse" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: { delay: .9 },
							className: "mt-16 flex flex-wrap items-center justify-center gap-8 text-xs uppercase tracking-widest text-parchment/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex",
										children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-4 w-4 ${i < 4 ? "fill-accent text-accent" : "text-accent/40"}` }, i))
									}), "4.2 · Google"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-parchment/20" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "1–25 DT / person" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-parchment/20" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 text-accent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Livraison à Domicile" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-parchment/20" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Fast · Fresh · Fired up" })
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "menu",
				className: "relative border-y border-border bg-card py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-10 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-3 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-accent",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-accent" }),
										"La Carte",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-accent" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-5xl text-parchment md:text-6xl",
									children: ["THE FULL ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-ember",
										children: "MENU"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-4 max-w-xl font-serif italic text-muted-foreground",
									children: "Prix en Dinar Tunisien. Everything grilled fresh to order."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-10 flex flex-wrap items-center justify-center gap-3",
							children: MENU.map((m) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setMenuTab(m.id),
									className: `rounded-none border-2 px-5 py-3 font-display text-xs uppercase tracking-[0.2em] transition-all ${m.id === menuTab ? "border-accent bg-accent text-accent-foreground shadow-[4px_4px_0_0_oklch(0_0_0)]" : "border-border bg-transparent text-parchment/70 hover:border-accent hover:text-accent"}`,
									children: m.label
								}, m.id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -20
								},
								transition: { duration: .35 },
								className: "grid gap-8 lg:grid-cols-[1.1fr_2fr]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative group overflow-hidden border-2 border-ember bg-card h-[280px] lg:h-auto min-h-[280px] shadow-[6px_6px_0_0_oklch(0_0_0)]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: MENU_IMAGES[currentMenu.id],
											alt: currentMenu.label,
											className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute bottom-6 left-6 right-6",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] uppercase tracking-[0.25em] text-accent mb-1 block font-body",
													children: "Featured Cowboy Fare"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-display text-2xl text-parchment tracking-widest uppercase",
													children: currentMenu.label
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-serif italic text-xs text-parchment/60 mt-1",
													children: "Freshly fired up on the saloon grill."
												})
											]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-8 sm:grid-cols-2",
									children: currentMenu.sections.map((section, si) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											y: 10
										},
										animate: {
											opacity: 1,
											y: 0
										},
										transition: { delay: .1 + si * .06 },
										className: "border-t-2 border-ember pt-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mb-4 font-display text-xl uppercase tracking-widest text-parchment",
												children: section.title
											}),
											section.columns && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mb-2 flex justify-end gap-6 text-[10px] uppercase tracking-widest text-accent",
												children: section.columns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "w-14 text-right",
													children: c
												}, c))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "space-y-2",
												children: section.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-baseline justify-between gap-3 border-b border-dashed border-border/60 pb-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-body text-sm text-parchment/90",
														children: it.name
													}), "prices" in it ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "flex gap-6 font-display text-sm text-accent",
														children: it.prices.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "w-14 text-right tabular-nums",
															children: p
														}, i))
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-display text-sm text-accent tabular-nums",
														children: it.price
													})]
												}, it.name))
											})
										]
									}, section.title))
								})]
							}, currentMenu.id)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${PHONE_TEL}`,
								className: "inline-flex items-center gap-3 border-2 border-ember bg-ember px-8 py-4 font-display text-base uppercase tracking-widest text-primary-foreground shadow-[6px_6px_0_0_oklch(0_0_0)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_oklch(0_0_0)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" }),
									"Order & Delivery — ",
									PHONE_DISPLAY
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-xs uppercase tracking-[0.2em] text-accent flex items-center justify-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-4 w-4 text-accent animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Livraison à domicile rapide sur Sousse" })]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "visit",
				className: "relative bg-background py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl px-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 text-xs uppercase tracking-[0.4em] text-ember",
							children: "Round 'em up"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-5xl text-parchment md:text-7xl",
							children: [
								"SADDLE UP.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-ember",
									children: "COME HUNGRY."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-xl font-serif italic text-parchment/70",
							children: "Walk in, take out, or send a rider. We'll have the grill fired up."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
							children: [
								{
									icon: MapPin,
									label: "Find us",
									value: "RJ6G+QC5, Sousse"
								},
								{
									icon: Clock,
									label: "Grill hours",
									value: "Daily · 11am – 02:00"
								},
								{
									icon: Phone,
									label: "Call the saloon",
									value: PHONE_DISPLAY,
									href: `tel:${PHONE_TEL}`
								},
								{
									icon: Truck,
									label: "Livraison à domicile",
									value: "Disponible à Sousse",
									href: `tel:${PHONE_TEL}`
								}
							].map((c) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(c.href ? "a" : "div", {
									...c.href ? { href: c.href } : {},
									className: "group block border-2 border-border bg-card p-6 text-left transition-all hover:border-ember hover:shadow-[6px_6px_0_0_oklch(0.62_0.19_40)]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-6 w-6 text-ember group-hover:animate-bounce" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4 text-[10px] uppercase tracking-widest text-muted-foreground",
											children: c.label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 font-display text-lg text-parchment",
											children: c.value
										})
									]
								}, c.label);
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t-2 border-ember bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1fr_1.3fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo,
								alt: "",
								className: "h-14 w-14",
								width: 56,
								height: 56
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-2xl tracking-widest text-parchment",
								children: "THE COWBOY"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-widest text-accent",
								children: "Sousse · Tunisia"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-sm font-serif italic text-parchment/70",
							children: "The wildest fast-food joint in town. Grilled hot, wrapped tight, priced fair — that's the cowboy code."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-8 space-y-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-5 w-5 shrink-0 text-ember" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://maps.google.com/?q=RJ6G%2BQC5+Sousse",
										target: "_blank",
										rel: "noreferrer",
										className: "text-parchment hover:text-accent",
										children: "RJ6G+QC5, Sousse, Tunisia"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5 shrink-0 text-ember" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${PHONE_TEL}`,
										className: "font-display text-lg tracking-widest text-parchment hover:text-accent",
										children: PHONE_DISPLAY
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-5 w-5 shrink-0 text-ember" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-parchment",
										children: "Livraison à domicile disponible"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5 shrink-0 text-ember" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-parchment",
										children: "Daily · 11:00 – 02:00"
									})]
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-2 border-2 border-accent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: "The Cowboy — Sousse location",
								src: "https://maps.google.com/maps?q=RJ6G%2BQC5%20Sousse&t=&z=16&ie=UTF8&iwloc=&output=embed",
								loading: "lazy",
								className: "relative h-[360px] w-full border-0 grayscale-[0.15]",
								referrerPolicy: "no-referrer-when-downgrade"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://maps.google.com/?q=RJ6G%2BQC5+Sousse",
								target: "_blank",
								rel: "noreferrer",
								className: "absolute bottom-4 left-4 inline-flex items-center gap-2 border-2 border-accent bg-accent px-4 py-2 font-display text-xs uppercase tracking-widest text-accent-foreground shadow-[4px_4px_0_0_oklch(0_0_0)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_oklch(0_0_0)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), "Open in Maps"]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border py-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-[10px] uppercase tracking-widest text-muted-foreground md:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" The Cowboy · Sousse"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Ride safe, eat hard." })]
					})
				})]
			})
		]
	});
}
//#endregion
export { Index as component };
