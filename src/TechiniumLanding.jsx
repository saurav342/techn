import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Rocket,
  ShieldCheck,
  Building2,
  Phone,
  Mail,
  ArrowRight,
  Check,
  Github,
  Linkedin,
  Twitter,
  Send,
  Brain,
  MessageSquare,
  Database,
  Users,
  Award,
  Globe,
  Briefcase,
  ChevronDown,
  Target,
  Zap,
  TrendingUp,
  Heart,
  Coffee,
  Lightbulb,
  MapPin,
  Clock,
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
        <linearGradient id="techinium-gradient" x1="0" x2="1">
          <stop offset="0%" stopColor="#1A2E45" />
          <stop offset="50%" stopColor="#6A0DAD" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="48" height="48" rx="16" fill="none" stroke="url(#techinium-gradient)" strokeWidth="3" />
      <circle cx="20" cy="20" r="2" fill="url(#techinium-gradient)" />
      <circle cx="44" cy="20" r="2" fill="url(#techinium-gradient)" />
      <circle cx="32" cy="32" r="3" fill="url(#techinium-gradient)" />
      <circle cx="20" cy="44" r="2" fill="url(#techinium-gradient)" />
      <circle cx="44" cy="44" r="2" fill="url(#techinium-gradient)" />
      <path d="M20 20 L32 32 L44 20 M20 44 L32 32 L44 44" stroke="url(#techinium-gradient)" strokeWidth="2" strokeLinecap="round" />
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
  { 
    label: "Solutions", 
    href: "#solutions",
    dropdown: [
      { label: "Autonomous Agents", href: "#agents" },
      { label: "NLP Tools", href: "#nlp" },
      { label: "MLOps Platforms", href: "#mlops" },
      { label: "AI Consulting", href: "#consulting" }
    ]
  },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const clients = ["Meta", "Amazon", "Google", "Microsoft", "Shopify", "Stripe", "Notion", "OpenAI"];

const services = [
  { 
    icon: <Bot className="h-6 w-6" />, 
    title: "Autonomous Agents", 
    desc: "AI agents that work 24/7 to automate complex workflows, make intelligent decisions, and handle customer interactions with human-level understanding.",
    features: ["Customer service automation", "Sales pipeline management", "Back-office workflow automation", "Decision-making intelligence"]
  },
  { 
    icon: <MessageSquare className="h-6 w-6" />, 
    title: "NLP Tools", 
    desc: "Advanced natural language processing solutions for understanding, generating, and analyzing human language at scale with enterprise-grade accuracy.",
    features: ["Intelligent chatbots", "Sentiment analysis", "Document processing", "Multi-language translation"]
  },
  { 
    icon: <Database className="h-6 w-6" />, 
    title: "MLOps Platforms", 
    desc: "End-to-end machine learning operations platform ensuring your AI models are always optimized, monitored, and performing at peak efficiency.",
    features: ["Model deployment & scaling", "Performance monitoring", "Data pipeline management", "A/B testing frameworks"]
  },
  { 
    icon: <Lightbulb className="h-6 w-6" />, 
    title: "AI Consulting", 
    desc: "Strategic guidance from our experts to identify AI opportunities, develop implementation roadmaps, and transform your business with intelligent solutions.",
    features: ["AI strategy development", "Technology assessment", "Implementation planning", "Team training & workshops"]
  },
];

const industries = [
  { 
    tag: "Healthcare", 
    title: "Healthcare AI", 
    icon: <Heart className="h-5 w-5" />,
    points: ["Medical image analysis", "Patient data insights", "Drug discovery acceleration"],
    case: "Reduced diagnosis time by 40% with AI-powered radiology assistant"
  },
  { 
    tag: "Finance", 
    title: "Financial Services", 
    icon: <TrendingUp className="h-5 w-5" />,
    points: ["Fraud detection systems", "Risk assessment models", "Trading algorithms"],
    case: "Prevented $2M+ in fraudulent transactions with real-time AI monitoring"
  },
  { 
    tag: "Retail", 
    title: "E-commerce & Retail", 
    icon: <Target className="h-5 w-5" />,
    points: ["Recommendation engines", "Inventory optimization", "Customer insights"],
    case: "Increased conversion rates by 35% with AI-powered personalization"
  },
];

const team = [
  {
    name: "Senior Leadership",
    experience: "35+ years combined",
    background: "Meta, Amazon, Google",
    expertise: "Product Strategy & AI Architecture"
  },
  {
    name: "AI Engineers",
    experience: "10+ years average",
    background: "Top-tier tech companies",
    expertise: "Machine Learning & Deep Learning"
  },
  {
    name: "Full-Stack Developers",
    experience: "8+ years average",
    background: "Startup to enterprise",
    expertise: "Modern Web & Mobile Development"
  }
];

const careers = [
  {
    title: "Senior AI Engineer",
    location: "Bengaluru / Remote",
    type: "Full-time",
    description: "Lead development of autonomous AI agents and NLP systems for enterprise clients."
  },
  {
    title: "MLOps Engineer",
    location: "Bengaluru / Remote", 
    type: "Full-time",
    description: "Build and maintain scalable ML infrastructure and deployment pipelines."
  },
  {
    title: "Product Designer",
    location: "Bengaluru / Remote",
    type: "Full-time", 
    description: "Design intuitive AI-powered interfaces and user experiences."
  }
];

export default function TechiniumLanding() {
  // Rotating hero phrases
  const words = ["Autonomous AI Solutions", "Intelligent Automation", "Smart Business Systems", "AI-Powered Innovation"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2500);
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
    <div className="min-h-screen relative bg-gradient-to-br from-slate-50 via-white to-violet-50 text-slate-900">
      {/* Cursor glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed -z-10 aspect-square w-[44rem] rounded-full opacity-40 blur-3xl"
        style={{
          left: mouse.x - 352,
          top: mouse.y - 352,
          background: "radial-gradient(40% 40% at 50% 50%, rgba(26,46,69,0.25), rgba(106,13,173,0.15), transparent 70%)",
        }}
      />

      {/* Top scroll progress */}
      <div className="fixed inset-x-0 top-0 h-1 z-50">
        <div className="h-full bg-gradient-to-r from-slate-700 via-violet-600 to-purple-500" style={{ width: `${progress}%` }} />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-slate-200/70 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
            <LogoAI />
            <span>Techinium</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <div key={n.label} className="relative group">
                {n.dropdown ? (
                  <>
                    <button className="hover:text-slate-950 text-slate-600 transition flex items-center gap-1">
                      {n.label} <ChevronDown className="h-3 w-3" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px]">
                      {n.dropdown.map((item) => (
                        <a key={item.href} href={item.href} className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 first:rounded-t-lg last:rounded-b-lg">
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a href={n.href} className="hover:text-slate-950 text-slate-600 transition">{n.label}</a>
                )}
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Magnetic>
              <Button asChild variant="secondary" className="hidden sm:inline-flex border border-slate-200 bg-white hover:bg-slate-50">
                <a href="#contact">Schedule Demo</a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild className="bg-gradient-to-r from-slate-700 via-violet-600 to-purple-600 text-white hover:brightness-110 shadow-md">
                <a href="#contact" className="inline-flex items-center">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </Magnetic>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        {/* Animated blobs */}
        <motion.div aria-hidden className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-slate-400 via-violet-400 to-purple-400 blur-3xl opacity-30" animate={{ y: [0, -12, 0] }} transition={{ duration: 7, repeat: Infinity }} />
        <motion.div aria-hidden className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-slate-300 via-violet-300 to-purple-300 blur-3xl opacity-25" animate={{ y: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs text-violet-700">
                <Brain className="h-3.5 w-3.5" /> Autonomous AI Solutions
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-slate-900">
                <span className="inline-block">
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={index} 
                      initial={{ opacity: 0, y: 12 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: -12 }} 
                      transition={{ duration: 0.4 }} 
                      className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-violet-600 to-purple-600"
                    >
                      {words[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <br />for Smarter Business
              </h1>
              <p className="mt-6 text-lg text-slate-700 max-w-2xl leading-relaxed">
                Techinium delivers cutting-edge AI solutions that transform how businesses operate. From intelligent automation to autonomous agents, we help startups innovate rapidly and enterprises scale intelligently.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Magnetic>
                  <Button asChild size="lg" className="bg-gradient-to-r from-slate-700 via-violet-600 to-purple-600 text-white hover:brightness-110 shadow-lg px-8">
                    <a href="#contact" className="inline-flex items-center">Request a Demo <ArrowRight className="ml-2 h-5 w-5" /></a>
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button asChild variant="secondary" size="lg" className="bg-white border border-slate-200 hover:border-slate-300 px-8">
                    <a href="#solutions">Explore Solutions</a>
                  </Button>
                </Magnetic>
              </div>

              {/* Value proposition for different audiences */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Rocket className="h-6 w-6 text-violet-600" />
                    <h3 className="font-semibold text-slate-900">For Startups</h3>
                  </div>
                  <p className="text-sm text-slate-600">Rapid AI implementation to accelerate growth and outpace competition with cutting-edge technology.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="h-6 w-6 text-violet-600" />
                    <h3 className="font-semibold text-slate-900">For Enterprises</h3>
                  </div>
                  <p className="text-sm text-slate-600">Scalable, reliable AI solutions with enterprise-grade security and seamless integration.</p>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="mt-10">
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">Trusted by industry leaders</p>
                <div className="relative overflow-hidden">
                  <div className="flex gap-8 animate-[scroll_30s_linear_infinite] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    {clients.concat(clients).map((c, i) => (
                      <div key={c + i} className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm text-slate-600 shadow-sm whitespace-nowrap font-medium">{c}</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { n: "35+", l: "Years Experience", i: Award },
                  { n: "50+", l: "AI Projects", i: Bot },
                  { n: "99.9%", l: "Uptime SLA", i: ShieldCheck },
                ].map((m) => (
                  <div key={m.l} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-100 border border-violet-200 mb-2">
                      <m.i className="h-6 w-6 text-violet-600" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900">{m.n}</div>
                    <div className="text-xs text-slate-600">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI showcase visualization */}
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative p-[2px] rounded-[32px] bg-gradient-to-br from-slate-300 via-violet-300 to-purple-300 shadow-2xl">
                  <div className="aspect-[4/3] rounded-[30px] bg-gradient-to-br from-white to-slate-50 p-6">
                    {/* Neural network visualization */}
                    <div className="h-full grid grid-cols-3 gap-4 items-center">
                      <div className="space-y-4">
                        {[0, 1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            className="w-4 h-4 rounded-full bg-gradient-to-r from-slate-400 to-violet-400"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.6, 1, 0.6]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2
                            }}
                          />
                        ))}
                      </div>
                      <div className="space-y-3">
                        {[0, 1, 2, 3, 4, 5].map((i) => (
                          <motion.div
                            key={i}
                            className="w-3 h-3 rounded-full bg-gradient-to-r from-violet-400 to-purple-400"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              delay: i * 0.15
                            }}
                          />
                        ))}
                      </div>
                      <div className="space-y-4">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-400 to-slate-600"
                            animate={{
                              scale: [1, 1.4, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.3
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Connecting lines */}
                    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                      <defs>
                        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#64748b" stopOpacity="0.3" />
                          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3" />
                        </linearGradient>
                      </defs>
                      {/* Example connecting lines */}
                      <motion.path
                        d="M80 50 Q200 100 300 80"
                        stroke="url(#line-gradient)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.path
                        d="M80 120 Q200 160 300 140"
                        stroke="url(#line-gradient)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      />
                    </svg>
                  </div>
                </div>
                
                {/* Floating AI icons */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg border border-slate-200"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Brain className="h-6 w-6 text-violet-600" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg border border-slate-200"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <Zap className="h-6 w-6 text-purple-600" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE AI SOLUTIONS */}
      <section id="solutions" className="py-24 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-violet-50 text-violet-700 border border-violet-200 mb-4">Core AI Solutions</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Autonomous AI for Modern Business</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Transform your operations with our cutting-edge AI solutions. From intelligent automation to advanced analytics, 
              we deliver the technology that powers tomorrow's businesses today.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="bg-white border border-slate-200 hover:shadow-xl transition-all duration-300 will-change-transform hover:-translate-y-1 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-purple-100 border border-violet-200 group-hover:from-violet-200 group-hover:to-purple-200 transition-all duration-300">
                        <span className="text-violet-600 group-hover:text-violet-700 transition-colors duration-300">
                          {service.icon}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-slate-900 mb-2">{service.title}</CardTitle>
                      <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 pt-0">
                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-violet-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Magnetic>
                      <Button variant="outline" className="border-violet-200 text-violet-700 hover:bg-violet-50 group-hover:border-violet-300">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Magnetic>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY SOLUTIONS */}
      <section id="industries" className="py-24 border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Industry Expertise</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Proven success across industries with tailored AI solutions that deliver measurable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Card key={industry.title} className="bg-white border border-slate-200 hover:shadow-lg transition-all duration-300 will-change-transform hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-100 to-purple-100 border border-violet-200">
                      {industry.icon}
                    </div>
                    <Badge variant="secondary" className="bg-slate-100 border border-slate-200 text-slate-700">
                      {industry.tag}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {industry.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-violet-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-800 font-medium">
                      Success Story: {industry.case}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section id="careers" className="py-24 border-t border-slate-200 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-violet-100 text-violet-700 border border-violet-200 mb-4">Join Our Team</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Build the Future of AI with Us</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Join a team of passionate innovators working on cutting-edge AI projects. We're building tomorrow's 
              intelligent systems today, and we want you to be part of that journey.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Techinium?</h3>
              <div className="grid gap-6">
                {[
                  {
                    icon: <Lightbulb className="h-6 w-6" />,
                    title: "Innovation-First Culture",
                    desc: "Work on groundbreaking AI projects that push the boundaries of what's possible."
                  },
                  {
                    icon: <TrendingUp className="h-6 w-6" />,
                    title: "Rapid Growth Opportunities",
                    desc: "Advance your career in a fast-growing company with mentorship from industry veterans."
                  },
                  {
                    icon: <Users className="h-6 w-6" />,
                    title: "World-Class Team",
                    desc: "Collaborate with experts from Meta, Amazon, and other leading tech companies."
                  },
                  {
                    icon: <Globe className="h-6 w-6" />,
                    title: "Remote-First Flexibility",
                    desc: "Work from anywhere with flexible hours and a strong work-life balance."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-violet-200 text-violet-600">
                        {benefit.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{benefit.title}</h4>
                      <p className="text-slate-600 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Perks & Benefits</h3>
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="grid gap-4">
                  {[
                    "Competitive salary + equity packages",
                    "Health, dental, and vision insurance",
                    "Annual learning & development budget",
                    "Latest MacBook Pro + equipment stipend",
                    "Flexible vacation policy",
                    "Annual team retreats & conferences",
                    "Stock options in a growing AI company",
                    "Parental leave & family support"
                  ].map((perk, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Open Positions</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {careers.map((job, index) => (
                <Card key={index} className="bg-white border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{job.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-2 text-sm text-slate-600">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-violet-100 text-violet-700 border-violet-200">
                        {job.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 text-sm mb-4">{job.description}</p>
                    <Magnetic>
                      <Button className="w-full bg-gradient-to-r from-slate-700 via-violet-600 to-purple-600 text-white hover:brightness-110">
                        Apply Now
                      </Button>
                    </Magnetic>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm inline-block">
                <Coffee className="h-8 w-8 text-violet-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Don't see your role?</h4>
                <p className="text-slate-600 mb-4">We're always looking for exceptional talent. Send us your resume!</p>
                <Magnetic>
                  <Button variant="outline" className="border-violet-200 text-violet-700 hover:bg-violet-50">
                    <a href="mailto:careers@techinium.ai?subject=Open Application" className="inline-flex items-center">
                      Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ABOUT US */}
      <section id="about" className="py-24 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-violet-50 text-violet-700 border border-violet-200 mb-4">About Techinium</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Built by Visionaries, Powered by Experience</h2>
              <div className="space-y-6 text-slate-700">
                <p className="text-lg leading-relaxed">
                  Techinium was founded by a team of seasoned technology leaders with a combined 35+ years of experience 
                  in web design and software architecture. Our leadership includes veterans from Meta, Amazon, and other 
                  top-tier technology companies.
                </p>
                <p className="leading-relaxed">
                  We blend decades of design and technical expertise with cutting-edge AI innovation to deliver solutions 
                  that are not just technologically advanced, but also intuitive, scalable, and reliable. Whether you're 
                  a startup looking to disrupt your industry or an enterprise seeking to optimize operations, we have the 
                  experience and vision to bring your AI ambitions to life.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="text-center p-4 rounded-lg border border-slate-200 bg-slate-50">
                    <div className="text-2xl font-bold text-violet-600 mb-1">35+</div>
                    <div className="text-sm text-slate-600">Years Combined Experience</div>
                  </div>
                  <div className="text-center p-4 rounded-lg border border-slate-200 bg-slate-50">
                    <div className="text-2xl font-bold text-violet-600 mb-1">50+</div>
                    <div className="text-sm text-slate-600">AI Projects Delivered</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-50 to-violet-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-violet-600" />
                  Our Team
                </h3>
                <div className="space-y-4">
                  {team.map((member, index) => (
                    <div key={index} className="border-l-4 border-violet-200 pl-4">
                      <div className="font-medium text-slate-900">{member.name}</div>
                      <div className="text-sm text-slate-600">{member.experience} • {member.background}</div>
                      <div className="text-sm text-violet-700">{member.expertise}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5 text-violet-600" />
                  Our Mission
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  To democratize AI technology by making sophisticated autonomous solutions accessible to businesses 
                  of all sizes, while maintaining the highest standards of security, reliability, and ethical AI practices.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 border border-slate-200 rounded-lg bg-white">
                  <Award className="h-8 w-8 text-violet-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-slate-900">Industry Recognition</div>
                  <div className="text-xs text-slate-600">AI Innovation Awards</div>
                </div>
                <div className="text-center p-4 border border-slate-200 rounded-lg bg-white">
                  <Globe className="h-8 w-8 text-violet-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-slate-900">Global Reach</div>
                  <div className="text-xs text-slate-600">Serving 15+ Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-violet-50 text-violet-700 border border-violet-200 mb-4">Get Started</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Let's discuss how Techinium's AI solutions can accelerate your growth and optimize your operations. 
              Schedule a consultation or reach out directly.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Project Inquiry Form */}
            <Card className="bg-white border border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Rocket className="h-5 w-5 text-violet-600" />
                  Project Inquiry
                </CardTitle>
                <p className="text-slate-600">Tell us about your AI project or business challenge</p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1 block">Name *</label>
                      <Input placeholder="Your name" className="bg-white border-slate-300" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1 block">Company *</label>
                      <Input placeholder="Company name" className="bg-white border-slate-300" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1 block">Work Email *</label>
                    <Input type="email" placeholder="you@company.com" className="bg-white border-slate-300" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1 block">Phone</label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" className="bg-white border-slate-300" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1 block">Project Type *</label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white text-slate-900">
                      <option value="">Select project type</option>
                      <option value="autonomous-agents">Autonomous Agents</option>
                      <option value="nlp-tools">NLP Tools</option>
                      <option value="mlops">MLOps Platform</option>
                      <option value="consulting">AI Consulting</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1 block">Project Details *</label>
                    <Textarea 
                      rows={4} 
                      placeholder="Describe your project goals, current challenges, timeline, and budget range..." 
                      className="bg-white border-slate-300" 
                      required 
                    />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <ShieldCheck className="h-4 w-4 text-green-600" />
                    <span>Your information is secure and never shared with third parties.</span>
                  </div>
                  <Magnetic>
                    <Button type="submit" className="w-full bg-gradient-to-r from-slate-700 via-violet-600 to-purple-600 text-white hover:brightness-110 py-3">
                      Request Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Magnetic>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Information & Career Inquiries */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Users className="h-5 w-5 text-violet-600" />
                    Career Opportunities
                  </CardTitle>
                  <p className="text-slate-600">Join our team of AI innovators</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-slate-700">Interested in working with cutting-edge AI technology? We're always looking for talented individuals to join our team.</p>
                    <div className="grid gap-3">
                      <Magnetic>
                        <Button variant="outline" className="border-violet-200 text-violet-700 hover:bg-violet-100 justify-start">
                          <a href="#careers" className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4" />
                            View Open Positions
                          </a>
                        </Button>
                      </Magnetic>
                      <Magnetic>
                        <Button variant="outline" className="border-violet-200 text-violet-700 hover:bg-violet-100 justify-start">
                          <a href="mailto:careers@techinium.ai" className="flex items-center gap-2">
                            <Send className="h-4 w-4" />
                            Send Resume
                          </a>
                        </Button>
                      </Magnetic>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white border border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Building2 className="h-5 w-5 text-violet-600" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 border border-violet-200">
                        <Mail className="h-5 w-5 text-violet-600" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-600">Email</div>
                        <a href="mailto:hello@techinium.ai" className="font-medium text-slate-900 hover:text-violet-600 transition">
                          hello@techinium.ai
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 border border-violet-200">
                        <Phone className="h-5 w-5 text-violet-600" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-600">Phone</div>
                        <a href="tel:+918123456789" className="font-medium text-slate-900 hover:text-violet-600 transition">
                          +91 8123 456 789
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 border border-violet-200">
                        <MapPin className="h-5 w-5 text-violet-600" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-600">Headquarters</div>
                        <div className="font-medium text-slate-900">Bengaluru, India</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="bg-gradient-to-r from-slate-700 via-violet-600 to-purple-600 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Prefer to schedule a call?</h3>
                <p className="text-sm opacity-90 mb-4">Book a 30-minute discovery call with our AI experts to discuss your project requirements.</p>
                <Magnetic>
                  <Button variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100 w-full">
                    <a href="https://calendly.com/techinium" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Clock className="h-4 w-4" />
                      Schedule Discovery Call
                    </a>
                  </Button>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS & CASE STUDIES */}
      <section className="py-24 border-t border-slate-200 bg-gradient-to-br from-slate-50 to-violet-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-50 text-green-700 border border-green-200 mb-4">
              5.0 ★★★★★ Client Rating
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how we've helped companies transform their operations with intelligent AI solutions.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                company: "FinTech Startup",
                industry: "Financial Services",
                quote: "Techinium's AI agents reduced our customer support response time by 75% while maintaining quality. The ROI was immediate.",
                author: "Sarah Chen",
                role: "CTO",
                metric: "75% faster responses",
                logo: "💰"
              },
              {
                company: "E-commerce Platform",
                industry: "Retail Technology",
                quote: "The recommendation engine they built increased our conversion rates by 40%. Their MLOps platform keeps everything running smoothly.",
                author: "Michael Rodriguez",
                role: "Head of Engineering",
                metric: "40% higher conversions",
                logo: "🛒"
              },
              {
                company: "Healthcare AI Startup",
                industry: "Healthcare",
                quote: "Working with Techinium accelerated our product development by 6 months. Their expertise in NLP was exactly what we needed.",
                author: "Dr. Emily Watson",
                role: "Founder & CEO",
                metric: "6 months faster to market",
                logo: "🏥"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{testimonial.logo}</div>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.company}</div>
                      <div className="text-sm text-slate-600">{testimonial.industry}</div>
                    </div>
                  </div>
                  <blockquote className="text-slate-700 mb-4 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-slate-900">{testimonial.author}</div>
                      <div className="text-sm text-slate-600">{testimonial.role}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{testimonial.metric}</div>
                      <div className="text-xs text-slate-500">improvement</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Case Study Highlights */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Success Stories by the Numbers</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "₹50Cr+", label: "Value Generated", desc: "For our clients through AI automation" },
                { number: "99.9%", label: "Uptime SLA", desc: "Maintained across all deployments" },
                { number: "50+", label: "AI Projects", desc: "Successfully delivered and scaled" },
                { number: "15+", label: "Industries", desc: "Served with tailored solutions" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-violet-600 mb-2">{stat.number}</div>
                  <div className="font-semibold text-slate-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-slate-600">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 font-bold mb-4">
                <LogoAI className="h-8 w-8" /> 
                <span className="text-xl">Techinium</span>
              </div>
              <p className="text-slate-400 text-sm max-w-sm mb-6 leading-relaxed">
                Transforming businesses with autonomous AI solutions. From intelligent automation to advanced analytics, 
                we deliver the technology that powers tomorrow's enterprises.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/techinium" 
                  className="rounded-full border border-slate-700 p-2 hover:bg-slate-800 hover:border-slate-600 transition" 
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/techinium" 
                  className="rounded-full border border-slate-700 p-2 hover:bg-slate-800 hover:border-slate-600 transition" 
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com/techinium" 
                  className="rounded-full border border-slate-700 p-2 hover:bg-slate-800 hover:border-slate-600 transition" 
                  aria-label="Twitter/X"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <div className="font-semibold mb-4 text-white">Solutions</div>
              <ul className="text-sm text-slate-400 space-y-3">
                <li><a href="#solutions" className="hover:text-white transition">Autonomous Agents</a></li>
                <li><a href="#solutions" className="hover:text-white transition">NLP Tools</a></li>
                <li><a href="#solutions" className="hover:text-white transition">MLOps Platforms</a></li>
                <li><a href="#solutions" className="hover:text-white transition">AI Consulting</a></li>
              </ul>
            </div>

            <div>
              <div className="font-semibold mb-4 text-white">Company</div>
              <ul className="text-sm text-slate-400 space-y-3">
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#careers" className="hover:text-white transition">Careers</a></li>
                <li><a href="#industries" className="hover:text-white transition">Industries</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <div className="font-semibold mb-4 text-white">Resources</div>
              <div className="space-y-4">
                <div className="text-sm text-slate-400">
                  <div className="font-medium text-white mb-1">Email</div>
                  <a href="mailto:hello@techinium.ai" className="hover:text-white transition">
                    hello@techinium.ai
                  </a>
                </div>
                <div className="text-sm text-slate-400">
                  <div className="font-medium text-white mb-1">Phone</div>
                  <a href="tel:+918123456789" className="hover:text-white transition">
                    +91 8123 456 789
                  </a>
                </div>
                <div className="text-sm text-slate-400">
                  <div className="font-medium text-white mb-1">Location</div>
                  <div>Bengaluru, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Techinium. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition">Terms of Service</a>
              <a href="mailto:hello@techinium.ai" className="hover:text-white transition">Support</a>
            </div>
          </div>
        </div>
      </footer>

      {/* keyframes for marquee */}
      <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}