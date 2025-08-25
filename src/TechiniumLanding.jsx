import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Sparkles,
  Cpu,
  LineChart,
  Layers,
  Rocket,
  ShieldCheck,
  Building2,
  Phone,
  Mail,
  ArrowRight,
  Settings2,
  Code2,
  Package,
  Check,
  Star,
  Github,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";
import { Button } from "./ui-button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui-card";
import { Badge } from "./ui-badge";
import { Input } from "./ui-input";
import { Textarea } from "./ui-textarea";

// --- Brand ---
function LogoAI({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="44" height="44" rx="12" fill="none" stroke="url(#g)" strokeWidth="3" />
      <circle cx="22" cy="22" r="3" fill="url(#g)" />
      <circle cx="42" cy="22" r="3" fill="url(#g)" />
      <circle cx="22" cy="42" r="3" fill="url(#g)" />
      <circle cx="42" cy="42" r="3" fill="url(#g)" />
      <path d="M22 22 L42 42 M42 22 L22 42" stroke="url(#g)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// --- Magnetic button wrapper ---
function Magnetic({ children, radius = 120 }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.hypot(x, y);
      if (dist < radius) setPos({ x: x * 0.2, y: y * 0.2 });
      else setPos({ x: 0, y: 0 });
    };
    const onEnter = () => setHover(true);
    const onLeave = () => {
      setHover(false);
      setPos({ x: 0, y: 0 });
    };
    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [radius]);
  return (
    <motion.div ref={ref} animate={{ x: pos.x, y: pos.y, scale: hover ? 1.03 : 1 }} transition={{ type: "spring", stiffness: 200, damping: 15 }}>
      {children}
    </motion.div>
  );
}

// --- Data ---
const nav = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const clients = ["Infoserve", "FinSmart", "Medica", "UrbanGrid", "Edulab", "RetailX"];

const services = [
  { icon: <Code2 className="h-6 w-6" />, title: "Custom Software", desc: "Full‑stack web & mobile built with modern frameworks—accelerated by AI tools." },
  { icon: <Package className="h-6 w-6" />, title: "AI Integration", desc: "Ship chatbots, copilots, search, analytics, or vision into existing products." },
  { icon: <Bot className="h-6 w-6" />, title: "AI Agents", desc: "Agents for support, sales, and ops—securely connected to your data & APIs." },
  { icon: <LineChart className="h-6 w-6" />, title: "Analytics & ML", desc: "Forecasting, anomalies, churn, and decision dashboards with E2E pipelines." },
  { icon: <Cpu className="h-6 w-6" />, title: "Vision & Speech", desc: "OCR, quality inspection, voice UIs, call summarization—real‑time & multi‑lingual." },
  { icon: <ShieldCheck className="h-6 w-6" />, title: "Secure Delivery", desc: "Cloud or on‑prem with CI/CD, monitoring, guardrails, and compliance." },
];

const solutions = [
  { tag: "Product", title: "Product Engineering", points: ["Greenfield apps", "Feature squads", "Design systems"] },
  { tag: "Modernization", title: "Legacy to Modern", points: ["Monolith → services", "DB & API refactors", "Performance wins"] },
  { tag: "Automation", title: "Automation & Agents", points: ["Support & sales copilots", "Back‑office workflows", "Voice/chat + tools"] },
];

export default function TechiniumLanding() {
  // Rotating hero phrases
  const words = ["full‑stack apps", "AI integrations", "autonomous agents", "data platforms"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2200);
    return () => clearInterval(id);
  }, [words.length]);

  // Scroll progress bar
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const sTop = window.scrollY;
      const dH = document.body.scrollHeight - window.innerHeight;
      setProgress(Math.min(100, Math.max(0, (sTop / dH) * 100)));
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cursor glow
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-indigo-50 via-white to-rose-50 text-neutral-900">
      {/* Cursor glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed -z-10 aspect-square w-[44rem] rounded-full opacity-40 blur-3xl"
        style={{
          left: mouse.x - 352,
          top: mouse.y - 352,
          background: "radial-gradient(40% 40% at 50% 50%, rgba(99,102,241,0.35), rgba(236,72,153,0.15), transparent 70%)",
        }}
      />

      {/* Top scroll progress */}
      <div className="fixed inset-x-0 top-0 h-1 z-50">
        <div className="h-full bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-500" style={{ width: `${progress}%` }} />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-neutral-200/70 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <LogoAI />
            <span>Techinium</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-neutral-950 text-neutral-600 transition">{n.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Magnetic>
              <Button asChild variant="secondary" className="hidden sm:inline-flex border border-neutral-200 bg-white">
                <a href="#contact">Book a demo</a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600 text-white hover:brightness-110 shadow-md">
                <a href="#contact" className="inline-flex items-center">Talk to us <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </Magnetic>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        {/* Animated blobs */}
        <motion.div aria-hidden className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-400 via-fuchsia-400 to-rose-400 blur-3xl opacity-40" animate={{ y: [0, -12, 0] }} transition={{ duration: 7, repeat: Infinity }} />
        <motion.div aria-hidden className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-300 via-fuchsia-300 to-rose-300 blur-3xl opacity-30" animate={{ y: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs text-indigo-700">
                <Sparkles className="h-3.5 w-3.5" /> Software • AI
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                We build
                <span className="inline-block ml-3 align-top">
                  <AnimatePresence mode="wait">
                    <motion.span key={index} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }} className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600">
                      {words[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
              <p className="mt-5 text-neutral-700 max-w-xl">
                Full‑stack development using AI tools, seamless AI integrations in your products, and production‑grade AI agents connected to your data.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Magnetic>
                  <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600 text-white hover:brightness-110 shadow-lg">
                    <a href="#contact" className="inline-flex items-center">Start your project <ArrowRight className="ml-2 h-4 w-4" /></a>
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button asChild variant="secondary" size="lg" className="bg-white border border-neutral-200 hover:border-neutral-300">
                    <a href="#work">See our work</a>
                  </Button>
                </Magnetic>
              </div>

              {/* stats ribbon + icon highlights */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { n: "20+", l: "AI launches", i: Rocket },
                  { n: "₹50Cr+", l: "Value created", i: LineChart },
                  { n: "99.9%", l: "Uptime target", i: ShieldCheck },
                ].map((m) => (
                  <div key={m.l} className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm flex items-center gap-3">
                    <m.i className="h-5 w-5 text-indigo-600" />
                    <div>
                      <div className="text-lg font-semibold">{m.n}</div>
                      <div className="text-xs text-neutral-600">{m.l}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* colorful tech chips */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                {[
                  { icon: Code2, t: "Next.js", cls: "from-indigo-100 to-indigo-50 text-indigo-700 border-indigo-200" },
                  { icon: Cpu, t: "Python", cls: "from-emerald-100 to-emerald-50 text-emerald-700 border-emerald-200" },
                  { icon: Layers, t: "FastAPI", cls: "from-sky-100 to-sky-50 text-sky-700 border-sky-200" },
                  { icon: Bot, t: "LangChain", cls: "from-fuchsia-100 to-fuchsia-50 text-fuchsia-700 border-fuchsia-200" },
                ].map((x) => (
                  <div key={x.t} className={`rounded-xl border bg-gradient-to-br ${x.cls} px-3 py-2 flex items-center gap-2 shadow-sm`}>
                    <x.icon className="h-4 w-4" /> {x.t}
                  </div>
                ))}
              </div>

              {/* trust marquee */}
              <div className="mt-10">
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">Trusted by teams</p>
                <div className="relative overflow-hidden">
                  <div className="flex gap-6 animate-[scroll_24s_linear_infinite] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    {clients.concat(clients).map((c, i) => (
                      <div key={c + i} className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-600 shadow-sm">{c}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* showcase card grid */}
            <div className="relative">
              <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
                <div className="relative p-[1px] rounded-[26px] bg-gradient-to-br from-indigo-300 via-fuchsia-300 to-rose-300 shadow-xl">
                  <div className="aspect-[4/3] rounded-[25px] bg-white grid grid-cols-2 gap-3 p-4">
                    {[
                      { icon: Code2, t: "Full‑stack", s: "Web & Mobile" },
                      { icon: Bot, t: "AI Agents", s: "Voice, chat, ops" },
                      { icon: Layers, t: "Integrations", s: "APIs & RAG" },
                      { icon: LineChart, t: "Analytics", s: "Dashboards" },
                    ].map((x, i) => (
                      <Card key={i} className="bg-gradient-to-b from-neutral-50 to-white border border-neutral-200 hover:shadow-lg transition will-change-transform hover:-translate-y-0.5">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base flex items-center gap-2">
                            <x.icon className="h-5 w-5 text-indigo-600" /> {x.t}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-neutral-600">{x.s}</CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl sm:text-4xl font-semibold">Capabilities</h2>
            <Badge className="bg-indigo-50 text-indigo-700 border border-indigo-200">Software + AI</Badge>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.title} className="bg-white border border-neutral-200 hover:shadow-lg transition will-change-transform hover:-translate-y-0.5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-fuchsia-100 border border-indigo-200 text-indigo-700">
                      {s.icon}
                    </span>
                    {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-neutral-700">{s.desc}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="py-20 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl sm:text-4xl font-semibold">Industry Solutions</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((x) => (
              <Card key={x.title} className="bg-white border border-neutral-200 hover:shadow-lg transition will-change-transform hover:-translate-y-0.5">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-neutral-100 border border-neutral-200 text-neutral-700">{x.tag}</Badge>
                  </div>
                  <CardTitle className="mt-3">{x.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-neutral-700">
                    {x.points.map((p) => (
                      <li key={p} className="flex items-start gap-2"><Check className="h-4 w-4 text-indigo-600 mt-0.5" /> {p}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10">How we work</h2>
          <div className="grid lg:grid-cols-4 gap-6">
            {[
              { t: "Discover", d: "Workshops to align on use‑cases, scope, KPIs, and constraints.", i: Settings2 },
              { t: "Design", d: "Architecture, UX, prompts/tools, and eval plans.", i: Layers },
              { t: "Build", d: "Ship pilot with CI/CD, logging, and guardrails.", i: Rocket },
              { t: "Scale", d: "Hardening, A/Bs, cost controls, and SLOs.", i: LineChart },
            ].map((s, idx) => (
              <Card key={s.t} className="bg-white border border-neutral-200 relative overflow-hidden hover:shadow-lg transition will-change-transform hover:-translate-y-0.5">
                <div className="absolute inset-x-0 -top-1 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <s.i className="h-5 w-5 text-indigo-600" /> {idx + 1}. {s.t}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-neutral-700">{s.d}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-20 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl sm:text-4xl font-semibold">Selected Work</h2>
            <span className="text-sm text-neutral-600">More on request</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "B2C Commerce App", m: "+17% checkout conversions", p: "Full‑stack rebuild with AI recommendations and WhatsApp agent." },
              { title: "Support Summarizer", m: "-38% average handle time", p: "Ticket triage + summarization with citations; integrated into CRM." },
              { title: "Vision QA", m: "95% defect detection", p: "Edge vision model for assembly QA with human‑in‑the‑loop." },
            ].map((c) => (
              <Card key={c.title} className="group bg-white border border-neutral-200 overflow-hidden hover:shadow-lg transition will-change-transform hover:-translate-y-0.5">
                <CardHeader className="pb-2">
                  <div className="text-xs uppercase tracking-widest text-neutral-500">Case Study</div>
                  <CardTitle className="mt-1">{c.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-emerald-600 text-sm mb-2">{c.m}</div>
                  <p className="text-neutral-700">{c.p}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10">Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {[
              { name: "Starter", price: "₹1.5L / month", note: "2 sprints • 1 workflow", features: ["MVP or feature build", "Agent/RAG or integration", "Deployment & basic CI"], cta: "Start pilot", highlight: false },
              { name: "Growth", price: "₹3.5L / month", note: "4 sprints • 3 workflows", features: ["Squad (PM+FE+BE+ML)", "Cloud infra & MLOps", "Dashboards & analytics"], cta: "Book a demo", highlight: true },
              { name: "Enterprise", price: "Custom", note: "On‑prem • SLAs", features: ["On‑prem/VPC", "Dedicated pods", "24×7 SRE & SLAs"], cta: "Talk to sales", highlight: false },
            ].map((p) => (
              <Card key={p.name} className={`border border-neutral-200 ${p.highlight ? "bg-gradient-to-b from-indigo-50 to-white" : "bg-white"} hover:shadow-lg transition will-change-transform hover:-translate-y-0.5`}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {p.name}
                    {p.highlight && (<Badge className="bg-indigo-100 border border-indigo-200 text-indigo-700">Popular</Badge>)}
                  </CardTitle>
                  <div className="text-3xl font-semibold mt-2">{p.price}</div>
                  <div className="text-sm text-neutral-600">{p.note}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-neutral-700 mb-6">
                    {p.features.map((f) => (<li key={f} className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-indigo-600" /> {f}</li>))}
                  </ul>
                  <Magnetic>
                    <Button asChild className="w-full bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600 text-white hover:brightness-110"><a href="#contact">{p.cta}</a></Button>
                  </Magnetic>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Built for ambitious teams</h2>
              <p className="text-neutral-700 mb-4">We're a senior team of product engineers, data scientists, and designers. We ship end‑to‑end—from discovery and UX to scalable, secure deployments.</p>
              <div className="grid sm:grid-cols-3 gap-3">
                {[{ n: "20+", l: "AI launches" }, { n: "₹50Cr+", l: "Value created" }, { n: "99.9%", l: "Uptime targets" }].map((m) => (
                  <div key={m.l} className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                    <div className="text-2xl font-semibold">{m.n}</div>
                    <div className="text-neutral-600 text-sm">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-5 w-5 text-indigo-600" />
                <div className="font-medium">Contact</div>
              </div>
              <div className="mt-1 flex flex-wrap gap-3 text-neutral-700">
                <div className="flex items-center gap-2"><Phone className="h-4 w-4" /><a href="tel:+919999999999" className="hover:underline">+91 99999 99999</a></div>
                <div className="flex items-center gap-2"><Mail className="h-4 w-4" /><a href="mailto:hello@techinium.ai" className="hover:underline">hello@techinium.ai</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-semibold">Let's build your roadmap</h2>
            <p className="text-neutral-600 mt-2">Tell us about your objectives and we'll propose a 2‑week pilot scoped to outcomes.</p>
          </div>
          <Card className="bg-white border border-neutral-200 shadow-sm">
            <CardContent className="pt-6">
              <form className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-neutral-600">Name</label>
                  <Input placeholder="Your name" className="mt-1 bg-white border-neutral-300" />
                </div>
                <div>
                  <label className="text-sm text-neutral-600">Work Email</label>
                  <Input type="email" placeholder="you@company.com" className="mt-1 bg-white border-neutral-300" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm text-neutral-600">Company</label>
                  <Input placeholder="Company name" className="mt-1 bg-white border-neutral-300" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm text-neutral-600">What do you want to build?</label>
                  <Textarea rows={5} placeholder="e.g., mobile app, platform refactor, WhatsApp agent, RAG over docs…" className="mt-1 bg-white border-neutral-300" />
                </div>
                <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="text-xs text-neutral-600 flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> We never share your data.</div>
                  <Magnetic>
                    <Button type="button" asChild className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600 text-white hover:brightness-110">
                      <a href="mailto:hello@techinium.ai?subject=Project%20Inquiry&body=Hi%20Techinium,%0A%0AI'd%20like%20to%20discuss%20a%20project%20for...">Send enquiry</a>
                    </Button>
                  </Magnetic>
                </div>
              </form>
            </CardContent>
          </Card>
          <p className="text-center text-xs text-neutral-600 mt-4">Prefer WhatsApp? <a className="underline hover:no-underline" href="https://wa.me/919999999999">Chat with us</a></p>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl sm:text-4xl font-semibold">What clients say</h2>
            <Badge className="bg-amber-50 text-amber-700 border border-amber-200">5.0 <Star className="inline h-4 w-4 ml-1" /></Badge>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "Product Lead", q: "They shipped our MVP in weeks, not months—and added an agent that saved our team hours weekly." },
              { n: "CTO", q: "Seamless AI integration. The dashboards finally tell us what's happening in real‑time." },
              { n: "Ops Head", q: "Quality vision reduced defects massively. Their MLOps kept costs in check." },
            ].map((r, i) => (
              <Card key={i} className="bg-white border border-neutral-200 shadow-sm">
                <CardContent className="pt-6 text-neutral-700">
                  "{r.q}"
                  <div className="mt-4 text-sm text-neutral-500">— {r.n}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MEGA FOOTER */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 font-semibold mb-3">
                <LogoAI /> <span>Techinium</span>
              </div>
              <p className="text-neutral-600 text-sm max-w-sm">
                We design, build, and scale software with AI at the core. From greenfield apps to AI agents and integrations—delivered with security and reliability.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a href="https://github.com/techinium" className="rounded-full border border-neutral-200 p-2 hover:bg-neutral-50" aria-label="GitHub"><Github className="h-5 w-5" /></a>
                <a href="https://www.linkedin.com/company/techinium" className="rounded-full border border-neutral-200 p-2 hover:bg-neutral-50" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
                <a href="https://twitter.com/techinium" className="rounded-full border border-neutral-200 p-2 hover:bg-neutral-50" aria-label="Twitter/X"><Twitter className="h-5 w-5" /></a>
              </div>
            </div>

            <div>
              <div className="font-medium mb-3">Company</div>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li><a href="#services" className="hover:text-neutral-900">Services</a></li>
                <li><a href="#solutions" className="hover:text-neutral-900">Solutions</a></li>
                <li><a href="#work" className="hover:text-neutral-900">Case Studies</a></li>
                <li><a href="#pricing" className="hover:text-neutral-900">Pricing</a></li>
              </ul>
            </div>

            <div>
              <div className="font-medium mb-3">Resources</div>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li><a href="#process" className="hover:text-neutral-900">Process</a></li>
                <li><a href="#about" className="hover:text-neutral-900">About</a></li>
                <li><a href="#contact" className="hover:text-neutral-900">Contact</a></li>
              </ul>
            </div>

            <div>
              <div className="font-medium mb-3">Newsletter</div>
              <p className="text-sm text-neutral-600 mb-3">Monthly insights on AI + product engineering. No spam.</p>
              <form className="flex gap-2">
                <Input type="email" placeholder="you@company.com" className="bg-white border-neutral-300" />
                <Magnetic>
                  <Button type="button" className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600 text-white">
                    Subscribe <Send className="ml-2 h-4 w-4" />
                  </Button>
                </Magnetic>
              </form>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-neutral-600 text-sm">© {new Date().getFullYear()} Techinium — All rights reserved.</div>
            <div className="flex items-center gap-4 text-sm text-neutral-600">
              <a href="/privacy" className="hover:text-neutral-900">Privacy</a>
              <a href="/terms" className="hover:text-neutral-900">Terms</a>
              <a href="mailto:hello@techinium.ai" className="hover:text-neutral-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* keyframes for marquee */}
      <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}