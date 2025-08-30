import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';
import {
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
  Code2,
  Package,
  Layers,
  Network,
  Cloud,
  Settings2,
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
        <linearGradient id="techinium-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6BB26B" />
          <stop offset="50%" stopColor="#8DC73F" />
          <stop offset="100%" stopColor="#C8D946" />
        </linearGradient>
        <linearGradient id="node-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7BC142" />
          <stop offset="100%" stopColor="#A8C73C" />
        </linearGradient>
      </defs>
      
      {/* Outer circle */}
      <circle cx="32" cy="32" r="30" fill="none" stroke="url(#techinium-gradient)" strokeWidth="2" />
      
      {/* Network nodes */}
      <circle cx="32" cy="18" r="4" fill="url(#node-gradient)" />
      <circle cx="45" cy="25" r="3.5" fill="url(#node-gradient)" />
      <circle cx="45" cy="39" r="3.5" fill="url(#node-gradient)" />
      <circle cx="32" cy="46" r="4" fill="url(#node-gradient)" />
      <circle cx="19" cy="39" r="3.5" fill="url(#node-gradient)" />
      <circle cx="19" cy="25" r="3.5" fill="url(#node-gradient)" />
      <circle cx="32" cy="32" r="3" fill="url(#node-gradient)" />
      
      {/* Connecting lines */}
      <path d="M32 18 L32 29" stroke="url(#node-gradient)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 35 L32 46" stroke="url(#node-gradient)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M35 32 L42 36" stroke="url(#node-gradient)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M29 32 L22 36" stroke="url(#node-gradient)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M35 29 L42 26" stroke="url(#node-gradient)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M29 29 L22 26" stroke="url(#node-gradient)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M35 35 L42 39" stroke="url(#node-gradient)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M29 35 L22 39" stroke="url(#node-gradient)" strokeWidth="2.5" strokeLinecap="round" />
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
  { label: "Home", href: "#home" },
  { 
    label: "Services", 
    href: "#solutions",
    dropdown: [
      { label: "Web Development", href: "#solutions" },
      { label: "Mobile App Development", href: "#solutions" },
      { label: "Full Stack Development", href: "#solutions" },
      { label: "API Development", href: "#solutions" },
      { label: "E-commerce Development", href: "#solutions" },
      { label: "UI/UX Design", href: "#solutions" },
      { label: "AI Chatbots", href: "#solutions" },
      { label: "AI Agents", href: "#solutions" },
      { label: "Consulting", href: "#solutions" }
    ]
  },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const clients = ["Malama EV Cabs", "Krushi Vista", "Launch & Lift", "Saga15", "Adchef", "A to Z AI", "Modern Concept"];

const services = [
  { 
    icon: <Code2 className="h-6 w-6" />, 
    title: "AI-Powered Web Application Development", 
    desc: "AI-enhanced web applications, intelligent responsive websites, AI-powered corporate portals, smart PWAs, enterprise applications with ML integration.",
    features: ["AI-enhanced web applications", "Intelligent responsive websites", "AI-powered corporate portals", "Smart PWAs with ML integration"],
    technologies: "HTML5, CSS3, JavaScript, React, Angular, Vue.js, Node.js, Python, .NET, TensorFlow, PyTorch, OpenAI API, Hugging Face"
  },
  { 
    icon: <Phone className="h-6 w-6" />, 
    title: "AI-Enhanced Mobile App Development", 
    desc: "AI-integrated native iOS/Android apps, intelligent cross-platform solutions, AI-powered mobile experiences, predictive analytics integration.",
    features: ["AI-integrated native iOS & Android apps", "Intelligent cross-platform solutions", "AI-powered mobile experiences", "Predictive analytics integration"],
    technologies: "Swift, Kotlin, Java, Flutter, React Native, Xamarin, TensorFlow Lite, Core ML, ML Kit, PyTorch Mobile, AI/ML SDKs"
  },
  { 
    icon: <Database className="h-6 w-6" />, 
    title: "AI-Integrated Full Stack Development", 
    desc: "AI-enhanced frontend development, intelligent backend systems, ML-powered database management, smart API development, AI cloud deployment.",
    features: ["AI-enhanced frontend development", "Intelligent backend systems", "ML-powered database management", "Smart API development"],
    technologies: "MEAN/MERN stack, Django, Laravel, Spring Boot, microservices, TensorFlow, PyTorch, Scikit-learn, Docker, Kubernetes"
  },
  { 
    icon: <Network className="h-6 w-6" />, 
    title: "AI API Development & Integration", 
    desc: "AI-powered custom API development (REST, GraphQL), intelligent third-party integrations, AI payment processing, ML-enhanced data communication.",
    features: ["AI-powered custom APIs (REST, GraphQL)", "Intelligent third-party integrations", "AI payment processing", "ML-enhanced data communication"],
    technologies: "REST APIs, GraphQL, JSON, XML, OAuth, JWT, OpenAI API, Hugging Face API, TensorFlow Serving, MLflow, FastAPI"
  },
];

const additionalServices = [
  {
    icon: <Package className="h-5 w-5" />,
    title: "AI-Powered E-commerce Development",
    desc: "AI-powered online stores, intelligent recommendation engines, automated inventory management, predictive analytics for sales, AI-driven customer insights.",
    technologies: "Shopify Plus, Magento Commerce, WooCommerce, custom platforms, TensorFlow, scikit-learn, recommendation engines, Apache Spark"
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "AI-Enhanced UI/UX Design Services",
    desc: "AI-assisted user research, intelligent wireframing, AI-generated prototypes, adaptive visual design, AI-powered usability testing, responsive design automation.",
    technologies: "Figma, Sketch, Adobe XD, InVision, Framer, AI design tools, automated testing frameworks, user behavior analytics"
  },
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "AI Web Development Consulting",
    desc: "AI architecture guidance, intelligent technology selection, AI-powered performance optimization, automated security audits, AI roadmap development.",
    technologies: "Architecture patterns, AI frameworks, performance monitoring, security tools, ML model deployment, cloud-native solutions"
  },
  {
    icon: <Settings2 className="h-5 w-5" />,
    title: "AI-Powered Website Maintenance & Support",
    desc: "AI-automated software updates, intelligent security monitoring, AI-powered content management, predictive maintenance, performance optimization with ML.",
    technologies: "CMS platforms, AI monitoring tools, automated backup solutions, predictive maintenance systems, ML-powered security tools"
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "AI-Enhanced Quality Assurance & Testing",
    desc: "AI-enhanced functionality testing, intelligent usability testing, ML-powered performance testing, automated security testing, AI-driven test case generation.",
    technologies: "Selenium, Jest, Cypress, JUnit, AI testing frameworks, automated test generation, ML-powered quality assurance tools"
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "AI-Driven Digital Marketing Integration",
    desc: "AI-powered SEO optimization, intelligent content strategy, automated social media marketing, AI-driven PPC optimization, predictive analytics integration.",
    technologies: "Google Analytics, AI-powered SEO tools, automated content generation, intelligent social media platforms, predictive marketing tools"
  },
  {
    icon: <Cloud className="h-5 w-5" />,
    title: "AI Cloud Services & DevOps",
    desc: "AI-optimized cloud migration, intelligent CI/CD pipelines, automated deployments with ML monitoring, predictive scaling, AI-powered infrastructure management.",
    technologies: "Docker, Kubernetes, Jenkins, GitHub Actions, MLOps tools, AI model deployment, intelligent monitoring and scaling solutions"
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "🤖 AI Chatbot Development & Integration",
    desc: "Custom AI chatbots, conversational AI interfaces, NLP-powered customer support, multi-platform chatbot deployment, intelligent conversation flows.",
    technologies: "Dialogflow, Microsoft Bot Framework, Rasa, OpenAI API, Natural Language Toolkit, spaCy, TensorFlow, conversational AI platforms"
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "🧠 AI Agent Development & Deployment",
    desc: "Custom AI agents, autonomous task automation, intelligent workflow management, AI-powered decision making systems, multi-agent orchestration.",
    technologies: "LangChain, AutoGPT, CrewAI, OpenAI API, Hugging Face Transformers, custom AI frameworks, agent orchestration platforms"
  }
];

const industries = [
  { 
    tag: "Electric Vehicles", 
    title: "Electric Vehicle & Transportation", 
    icon: <Target className="h-5 w-5" />,
    points: ["AI-powered fleet management systems", "Route optimization algorithms", "Predictive maintenance platforms"],
    case: "Developed an AI fleet management system for Malama EV Cabs that reduced operational costs by 45% through intelligent route optimization"
  },
  { 
    tag: "AgriTech", 
    title: "Agricultural Technology", 
    icon: <TrendingUp className="h-5 w-5" />,
    points: ["AI-driven crop monitoring solutions", "Yield prediction analytics", "Smart farming automation tools"],
    case: "Built an AI crop monitoring platform for Krushi Vista that increased yield prediction accuracy by 80%, revolutionizing agricultural decision-making"
  },
  { 
    tag: "Startup Ecosystem", 
    title: "Startup Incubation & Acceleration", 
    icon: <Heart className="h-5 w-5" />,
    points: ["AI-accelerated development frameworks", "Rapid prototyping solutions", "Market analysis automation"],
    case: "Created an AI-powered development platform for Launch & Lift that helped portfolio companies go to market 60% faster with intelligent automation"
  },
  { 
    tag: "Digital Marketing", 
    title: "Digital Marketing & Automation", 
    icon: <Target className="h-5 w-5" />,
    points: ["Intelligent chatbot systems", "Automated marketing workflows", "AI-driven engagement analytics"],
    case: "Implemented smart chatbots and automation tools for Saga15 that boosted client engagement by 150% with personalized AI interactions"
  },
  { 
    tag: "AdTech", 
    title: "Advertising Technology", 
    icon: <TrendingUp className="h-5 w-5" />,
    points: ["AI-powered ad optimization platforms", "Real-time campaign analytics", "Automated bidding systems"],
    case: "Developed an AI ad optimization platform for Adchef that increased campaign performance by 90% through intelligent targeting and automation"
  },
  { 
    tag: "AI Solutions", 
    title: "Artificial Intelligence & ML", 
    icon: <Heart className="h-5 w-5" />,
    points: ["Custom AI agent frameworks", "Machine learning pipelines", "Intelligent automation systems"],
    case: "Built an AI agent deployment framework for A to Z AI that accelerated their product development by 8 months with autonomous task management"
  }
];

const careers = [
  {
    title: "AI-Powered Full Stack Developer",
    location: "Bengaluru / Remote",
    type: "Full-time",
    description: "Lead development of intelligent web applications using AI-assisted coding, React, Node.js, and advanced automation technologies."
  },
  {
    title: "AI Solutions Engineer",
    location: "Bengaluru / Remote", 
    type: "Full-time",
    description: "Build and deploy AI agents, chatbots, and intelligent automation systems for diverse industry applications."
  },
  {
    title: "AI-Enhanced Mobile Developer",
    location: "Bengaluru / Remote",
    type: "Full-time", 
    description: "Create smart mobile applications with AI integration using React Native, Flutter, and machine learning capabilities."
  },
  {
    title: "AI-Driven UI/UX Designer",
    location: "Bengaluru / Remote",
    type: "Full-time", 
    description: "Design intelligent user experiences leveraging AI insights and user behavior analytics for optimal engagement."
  }
];

export default function TechiniumLanding() {
  // Form state for project inquiry
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    projectDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // EmailJS configuration - replace with your actual IDs
      await emailjs.send(
        'service_q6t3zx4', // Your EmailJS service ID - replace this
        'template_hr9u6th', // Your EmailJS template ID - replace this
        {
          from_name: formData.name,
          from_company: formData.company,
          from_email: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          message: formData.projectDetails,
          to_email: 'hello@techinium.com'
        },
        'L-UGXLM3_6CD8X5i3' // Your EmailJS public key - replace this
      );
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        projectType: '',
        projectDetails: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  // Rotating hero phrases
  const words = ["Web Development", "App Development", "API Integration", "E-commerce Development", "Digital Transformation", "Chatbot Integration", "Agent Deployment"];
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
            <LogoAI className="h-6 w-6 sm:h-8 sm:w-8" />
            <span className="text-base sm:text-lg">Techinium</span>
          </a>
          <nav className="hidden lg:flex items-center gap-6 text-sm">
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
          <div className="flex items-center gap-2 sm:gap-3">
            <Magnetic>
              <Button asChild size="sm" className="bg-gradient-to-r from-slate-700 via-violet-600 to-purple-600 text-white hover:brightness-110 shadow-md text-xs sm:text-sm px-3 sm:px-4">
                <a href="#contact" className="inline-flex items-center">
                  <span className="hidden sm:inline">Get in Touch</span>
                  <span className="sm:hidden">Contact</span>
                  <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </a>
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

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs text-violet-700">
                <Brain className="h-3.5 w-3.5" /> AI-Driven Tech Solutions
              </div>
              <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight text-slate-900">
                <span className="block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-violet-600 to-purple-600">AI-Powered</span>
                </span>
                <span className="block mt-2">
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={index} 
                      initial={{ opacity: 0, y: 12 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: -12 }} 
                      transition={{ duration: 0.4 }} 
                      className="text-slate-900 whitespace-nowrap"
                    >
                      {words[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Leverage the power of AI to drive enhanced & optimized results.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Magnetic>
                  <Button asChild size="lg" className="bg-gradient-to-r from-slate-700 via-violet-600 to-purple-600 text-white hover:brightness-110 shadow-lg px-6 sm:px-8 w-full sm:w-auto">
                    <a href="#contact" className="inline-flex items-center justify-center">
                      Start Your Project <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button asChild variant="secondary" size="lg" className="bg-white border border-slate-200 hover:border-slate-300 px-6 sm:px-8 w-full sm:w-auto">
                    <a href="#solutions">View Our Services</a>
                  </Button>
                </Magnetic>
              </div>

              {/* Value proposition for different audiences */}
              <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-2 sm:mb-3">
                    <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-violet-600" />
                    <h3 className="font-semibold text-slate-900 text-sm sm:text-base">For Startups</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">MVP to markets in days, not months.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-2 sm:mb-3">
                    <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-violet-600" />
                    <h3 className="font-semibold text-slate-900 text-sm sm:text-base">For Enterprises</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">Scalable solutions, proven security, guaranteed results.</p>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 sm:mt-10">
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-3 sm:mb-4 text-center lg:text-left">Trusted by industry leaders</p>
                <div className="relative overflow-hidden">
                  <div className="flex gap-4 sm:gap-6 lg:gap-8 animate-[scroll_30s_linear_infinite] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    {clients.concat(clients).map((c, i) => (
                      <div key={c + i} className="rounded-xl border border-slate-200 bg-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-slate-600 shadow-sm whitespace-nowrap font-medium">{c}</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key stats */}
              <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                {[
                  { n: "50+", l: "Projects Delivered", i: Award },
                  { n: "25+", l: "Happy Clients", i: Users },
                  { n: "99.9%", l: "Uptime SLA", i: ShieldCheck },
                ].map((m) => (
                  <div key={m.l} className="text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-violet-100 border border-violet-200 mb-2">
                      <m.i className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-violet-600" />
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">{m.n}</div>
                    <div className="text-xs text-slate-600">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Innovative code-flow visualization */}
            <div className="relative mt-8 lg:mt-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Main container with glass morphism - Made larger */}
                <div className="relative aspect-[5/4] rounded-[32px] bg-gradient-to-br from-white/70 to-slate-50/70 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">
                  {/* Animated code blocks flowing */}
                  <div className="absolute inset-0 p-6 sm:p-8">
                    {/* Terminal window simulation */}
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 h-8 bg-slate-900 rounded-t-lg flex items-center px-4 gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-gray-400 ml-4 font-mono">~ building magic</span>
                    </div>
                    
                    {/* Code editor simulation - Made larger */}
                    <div className="absolute top-12 sm:top-14 left-4 sm:left-6 right-4 sm:right-6 bottom-8 sm:bottom-12 bg-slate-900 rounded-b-lg p-3 sm:p-4 font-mono text-xs sm:text-sm overflow-hidden">
                      {/* Animated code lines */}
                      <motion.div
                        className="space-y-1 sm:space-y-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        <motion.div 
                          className="text-purple-400"
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: "auto", opacity: 1 }}
                          transition={{ delay: 1.2, duration: 0.8 }}
                        >
                          <span className="text-gray-500">1</span> <span className="text-blue-400">const</span> <span className="text-white">magic</span> <span className="text-purple-400">=</span> <span className="text-green-400">await</span> <span className="text-yellow-400">buildApp</span><span className="text-white">()</span>
                        </motion.div>
                        
                        <motion.div 
                          className="text-purple-400"
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: "auto", opacity: 1 }}
                          transition={{ delay: 1.6, duration: 0.8 }}
                        >
                          <span className="text-gray-500">2</span> <span className="text-blue-400">export</span> <span className="text-white">function</span> <span className="text-yellow-400">Innovation</span><span className="text-white">()</span> <span className="text-white">{'{'}</span>
                        </motion.div>
                        
                        <motion.div 
                          className="text-purple-400 ml-4"
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: "auto", opacity: 1 }}
                          transition={{ delay: 2.0, duration: 0.8 }}
                        >
                          <span className="text-gray-500">3</span> <span className="text-blue-400">return</span> <span className="text-white">&lt;</span><span className="text-red-400">Future</span> <span className="text-purple-400">speed</span><span className="text-white">=</span><span className="text-green-400">"lightning"</span> <span className="text-white">/&gt;</span>
                        </motion.div>
                        
                        <motion.div 
                          className="text-white ml-2"
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: "auto", opacity: 1 }}
                          transition={{ delay: 2.4, duration: 0.8 }}
                        >
                          <span className="text-gray-500">4</span> <span className="text-white">{'}'}</span>
                        </motion.div>
                        
                        <motion.div 
                          className="text-white"
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: "auto", opacity: 1 }}
                          transition={{ delay: 2.8, duration: 0.8 }}
                        >
                          <span className="text-gray-500">5</span> <span className="text-green-400">{'// AI accelerated build complete ⚡'}</span>
                        </motion.div>
                        
                        <motion.div 
                          className="text-white"
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: "auto", opacity: 1 }}
                          transition={{ delay: 3.2, duration: 0.8 }}
                        >
                          <span className="text-gray-500">6</span> <span className="text-blue-400">console</span><span className="text-white">.</span><span className="text-yellow-400">log</span><span className="text-white">(</span><span className="text-green-400">'Deploy successful! 🚀'</span><span className="text-white">)</span>
                        </motion.div>
                      </motion.div>
                      
                      {/* Blinking cursor */}
                      <motion.div
                        className="inline-block w-2 h-4 bg-green-400 ml-1"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </div>
                    
                    {/* Floating data particles - More particles */}
                    {[...Array(16)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-violet-400 rounded-full"
                        style={{
                          left: `${15 + (i * 5)}%`,
                          top: `${25 + (i % 4) * 12}%`
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.3, 1, 0.3],
                          scale: [0.5, 1.2, 0.5]
                        }}
                        transition={{
                          duration: 3 + (i * 0.2),
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                    
                    {/* AI Processing indicator */}
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                        <div className="flex items-center gap-3">
                          <motion.div
                            className="w-2 h-2 bg-green-400 rounded-full"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          <span className="text-xs text-slate-600 font-medium">AI accelerating your build...</span>
                          
                          {/* Progress dots */}
                          <div className="flex gap-1 ml-auto">
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                className="w-1 h-1 bg-violet-400 rounded-full"
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  delay: i * 0.3
                                }}
                              />
                            ))}
                          </div>
                        </div>
                        
                        {/* Progress bar */}
                        <div className="mt-2 h-1 bg-slate-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-violet-400 to-purple-500"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Ambient lighting effects */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/5 via-transparent to-purple-500/5"></div>
                  
                  {/* Subtle grid pattern */}
                  <div 
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `
                        linear-gradient(90deg, #000 1px, transparent 1px),
                        linear-gradient(180deg, #000 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }}
                  />
                </div>
                
                {/* Floating tech badges - More prominent */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">AI</span>
                  </div>
                </motion.div>
                
                {/* React badge */}
                <motion.div
                  className="absolute top-1/4 -left-8 bg-white rounded-xl p-3 shadow-lg border border-slate-200"
                  animate={{ 
                    x: [0, 8, 0],
                    rotate: [0, -3, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center">
                    <span className="text-white text-xs font-bold">⚛</span>
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-4 shadow-xl border border-slate-200"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ duration: 7, repeat: Infinity }}
                >
                  <Zap className="h-8 w-8 text-yellow-500" />
                </motion.div>
                
                {/* Speed indicator */}
                <motion.div
                  className="absolute top-1/3 -right-12 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full shadow-lg"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 2, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="text-xs font-bold flex items-center gap-1">
                    <span>50%</span>
                    <span className="text-[10px]">FASTER</span>
                  </div>
                </motion.div>
                
                {/* Deploy success notification */}
                <motion.div
                  className="absolute top-12 -right-12"
                  initial={{ opacity: 0, x: 50, scale: 0.8 }}
                  animate={{ 
                    opacity: [0, 1, 1, 0],
                    x: [50, 0, 0, -50],
                    scale: [0.8, 1, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    delay: 3,
                    times: [0, 0.2, 0.8, 1]
                  }}
                >
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
                    <Check className="w-4 h-4" />
                    Deployed
                  </div>
                </motion.div>
                
                {/* Security badge */}
                <motion.div
                  className="absolute bottom-1/4 -right-10 bg-white rounded-xl p-3 shadow-lg border border-slate-200"
                  animate={{ 
                    y: [0, -8, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                >
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE AI-POWERED SOLUTIONS */}
      <section id="solutions" className="py-16 sm:py-20 lg:py-24 border-t border-slate-200 bg-gradient-to-br from-white via-slate-50/30 to-violet-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-gradient-to-r from-violet-50 to-purple-50 text-violet-700 border border-violet-200 mb-4">Comprehensive AI Solutions</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              <span className="bg-gradient-to-r from-slate-700 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                AI-Powered Development Solutions
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-4xl mx-auto">
              Comprehensive AI-enhanced development services from core web and mobile applications to advanced AI integrations, 
              intelligent automation, and ongoing support. We accelerate your digital transformation with cutting-edge AI technologies.
            </p>
          </div>
          
          {/* Core Development Services */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">Core Development Services</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">Foundation AI-powered development solutions for web, mobile, and full-stack applications</p>
            </div>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {services.map((service, index) => (
                <Card key={service.title} className="bg-gradient-to-br from-white to-violet-50/30 border border-violet-200/50 hover:shadow-xl transition-all duration-300 will-change-transform hover:-translate-y-1 group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-50/40 to-purple-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-purple-100 border border-violet-200 group-hover:from-violet-200 group-hover:to-purple-200 transition-all duration-300">
                          <span className="text-violet-600 group-hover:text-violet-700 transition-colors duration-300">
                            {service.icon}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg sm:text-xl text-slate-900 mb-2">{service.title}</CardTitle>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{service.desc}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10 pt-0">
                    <div className="space-y-2 sm:space-y-3 mb-4">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2 sm:gap-3">
                          <Check className="h-4 w-4 text-violet-600 mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {service.technologies && (
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-slate-900 mb-2 uppercase tracking-wide">Technologies</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{service.technologies}</p>
                      </div>
                    )}
                    

                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Additional AI Services */}
          <div>
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">Enhanced AI Capabilities</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">Specialized AI-powered services for e-commerce, design, consulting, and intelligent automation</p>
            </div>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {additionalServices.map((service, index) => {
                const colors = [
                  { bg: "from-blue-50/60 to-cyan-50/60", border: "border-blue-200/60", icon: "from-blue-100 to-cyan-100", iconHover: "group-hover:from-blue-200 group-hover:to-cyan-200", iconText: "text-blue-600 group-hover:text-blue-700" },
                  { bg: "from-green-50/60 to-emerald-50/60", border: "border-green-200/60", icon: "from-green-100 to-emerald-100", iconHover: "group-hover:from-green-200 group-hover:to-emerald-200", iconText: "text-green-600 group-hover:text-green-700" },
                  { bg: "from-purple-50/60 to-pink-50/60", border: "border-purple-200/60", icon: "from-purple-100 to-pink-100", iconHover: "group-hover:from-purple-200 group-hover:to-pink-200", iconText: "text-purple-600 group-hover:text-purple-700" },
                  { bg: "from-orange-50/60 to-yellow-50/60", border: "border-orange-200/60", icon: "from-orange-100 to-yellow-100", iconHover: "group-hover:from-orange-200 group-hover:to-yellow-200", iconText: "text-orange-600 group-hover:text-orange-700" },
                  { bg: "from-teal-50/60 to-sky-50/60", border: "border-teal-200/60", icon: "from-teal-100 to-sky-100", iconHover: "group-hover:from-teal-200 group-hover:to-sky-200", iconText: "text-teal-600 group-hover:text-teal-700" },
                  { bg: "from-rose-50/60 to-red-50/60", border: "border-rose-200/60", icon: "from-rose-100 to-red-100", iconHover: "group-hover:from-rose-200 group-hover:to-red-200", iconText: "text-rose-600 group-hover:text-rose-700" }
                ];
                const colorSet = colors[index % colors.length];
                return (
                  <Card key={service.title} className={`bg-gradient-to-br from-white ${colorSet.bg} border ${colorSet.border} hover:shadow-lg transition-all duration-300 will-change-transform hover:-translate-y-1 group`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="flex-shrink-0">
                          <div className={`inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${colorSet.icon} ${colorSet.iconHover} border ${colorSet.border} transition-all duration-300`}>
                            <span className={`${colorSet.iconText} transition-colors duration-300`}>
                              {service.icon}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-sm font-semibold text-slate-900 leading-tight">{service.title}</CardTitle>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{service.desc}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {service.technologies && (
                        <div className={`bg-gradient-to-r ${colorSet.bg} border ${colorSet.border} rounded-lg p-2`}>
                          <p className="text-xs text-slate-500 font-medium leading-relaxed">{service.technologies}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full border border-violet-200 px-6 py-3 shadow-sm">
              <Zap className="h-5 w-5 text-violet-600" />
              <span className="text-sm font-medium text-slate-700">All services powered by advanced AI and machine learning for intelligent automation</span>
            </div>
          </div>
        </div>
      </section>
      {/* AI-POWERED TECHNOLOGY STACK */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-slate-200 bg-gradient-to-br from-slate-50 to-violet-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 border border-violet-200 mb-4">AI-Powered Tech Stack</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              <span className="bg-gradient-to-r from-slate-700 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                Powered by Modern Technologies
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-4xl mx-auto">
              We leverage cutting-edge AI technologies combined with proven development frameworks to deliver 
              intelligent, scalable, and high-performance solutions that drive measurable business results.
            </p>
          </div>
          
          {/* Primary AI & Development Stack */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8 sm:mb-12">
            {/* AI & Machine Learning */}
            <Card className="bg-gradient-to-br from-white to-violet-50 border border-violet-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-gradient-to-br from-violet-100 to-purple-100 rounded-lg">
                    <Lightbulb className="h-5 w-5 text-violet-600" />
                  </div>
                  <CardTitle className="text-base font-semibold text-slate-900">AI & Machine Learning</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "LangChain", "Scikit-learn", "MLflow"].map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full"></div>
                      <span className="text-sm text-slate-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Frontend Development */}
            <Card className="bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg">
                    <Code2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-base font-semibold text-slate-900">Frontend Development</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {["React 18", "Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js", "Angular"].map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                      <span className="text-sm text-slate-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Backend & APIs */}
            <Card className="bg-gradient-to-br from-white to-green-50 border border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg">
                    <Database className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle className="text-base font-semibold text-slate-900">Backend & APIs</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {["Node.js", "Python/Django", "FastAPI", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB"].map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                      <span className="text-sm text-slate-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Secondary Technologies */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Cloud & DevOps */}
            <Card className="bg-white border border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Cloud className="h-4 w-4 text-orange-600" />
                  <CardTitle className="text-sm font-semibold text-slate-900">Cloud & DevOps</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-1.5">
                  {["AWS", "Vercel", "Docker", "Kubernetes", "GitHub Actions"].map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                      <span className="text-xs text-slate-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Mobile Development */}
            <Card className="bg-white border border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-pink-600" />
                  <CardTitle className="text-sm font-semibold text-slate-900">Mobile Development</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-1.5">
                  {["React Native", "Flutter", "Swift", "Kotlin", "Expo"].map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                      <span className="text-xs text-slate-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Design & Testing */}
            <Card className="bg-white border border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-purple-600" />
                  <CardTitle className="text-sm font-semibold text-slate-900">Design & Testing</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-1.5">
                  {["Figma", "Jest", "Cypress", "Playwright", "Storybook"].map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span className="text-xs text-slate-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Analytics & Monitoring */}
            <Card className="bg-white border border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-red-600" />
                  <CardTitle className="text-sm font-semibold text-slate-900">Analytics & Monitoring</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-1.5">
                  {["Google Analytics", "Mixpanel", "Sentry", "DataDog", "Amplitude"].map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                      <span className="text-xs text-slate-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* AI Development Approach */}
          <div className="mt-12 sm:mt-16">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">AI-First Development Approach</h3>
                <p className="text-sm text-slate-600">How we leverage AI to accelerate development and enhance quality</p>
              </div>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 border border-violet-200 mb-3">
                    <Zap className="h-5 w-5 text-violet-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm">AI-Assisted Coding</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Intelligent code generation, automated testing, and smart optimization using AI tools for 3x faster development.
                  </p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 border border-blue-200 mb-3">
                    <Target className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm">Intelligent Automation</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Automated deployment pipelines, smart monitoring, and predictive maintenance for 99.9% uptime reliability.
                  </p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100 border border-green-200 mb-3">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm">Quality Assurance</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    AI-powered code review, automated security audits, and performance optimization for enterprise-grade quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY SOLUTIONS */}
      <section id="industries" className="py-16 sm:py-20 lg:py-24 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-violet-50 text-violet-700 border border-violet-200 mb-4">Success Stories</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Industry Expertise</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              Proven success across diverse industries with AI-powered web and mobile solutions that 
              deliver real business impact and measurable results for our clients.
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Card key={industry.title} className="bg-white border border-slate-200 hover:shadow-lg transition-all duration-300 will-change-transform hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-100 to-purple-100 border border-violet-200">
                      {industry.icon}
                    </div>
                    <Badge variant="secondary" className="bg-slate-100 border border-slate-200 text-slate-700 text-xs">
                      {industry.tag}
                    </Badge>
                  </div>
                  <CardTitle className="text-base sm:text-lg">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {industry.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs sm:text-sm">
                        <Check className="h-3 w-3 sm:h-4 sm:w-4 text-violet-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-xs sm:text-sm text-green-800 font-medium leading-relaxed">
                      Success Story: {industry.case}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* TESTIMONIALS & CASE STUDIES */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-slate-200 bg-gradient-to-br from-slate-50 to-violet-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-green-50 text-green-700 border border-green-200 mb-4">
              5.0 ★★★★★ Client Rating
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              See how we've helped companies transform their operations with intelligent AI solutions and accelerated development.
            </p>
          </div>
          
          {/* Rotating Testimonials Carousel */}
          <div className="relative overflow-hidden mb-12 sm:mb-16">
            <motion.div 
              className="flex gap-6 sm:gap-8"
              animate={{ x: [0, -100, -200, -300, -400, -500, -600, 0] }}
              transition={{ 
                duration: 28, 
                repeat: Infinity, 
                ease: "linear"
              }}
            >
              {[
                {
                  company: "Malama EV Cabs",
                  industry: "Electric Vehicle Services",
                  quote: "Techinium's AI-powered fleet management system optimized our routes and reduced operational costs by 45%. Outstanding results!",
                  author: "Saurav K S",
                  role: "Founder & CEO",
                  metric: "45% cost reduction",
                  logo: "🚗"
                },
                {
                  company: "Krushi Vista",
                  industry: "Agricultural Technology",
                  quote: "The AI-driven crop monitoring solution increased our yield predictions accuracy by 80%. Game-changing technology for agriculture.",
                  author: "Akash D",
                  role: "CTO",
                  metric: "80% better accuracy",
                  logo: "🌾"
                },
                {
                  company: "Launch & Lift",
                  industry: "Startup Incubator",
                  quote: "Their AI-accelerated development approach helped our portfolio companies go to market 60% faster. Incredible efficiency gains.",
                  author: "Pushpamala",
                  role: "Managing Partner",
                  metric: "60% faster launch",
                  logo: "🚀"
                },
                {
                  company: "Saga15",
                  industry: "Digital Marketing",
                  quote: "The intelligent chatbot and automation tools boosted our client engagement by 150%. ROI exceeded all expectations.",
                  author: "Shalini G",
                  role: "Head of Operations",
                  metric: "150% more engagement",
                  logo: "📈"
                },
                {
                  company: "Adchef",
                  industry: "Advertising Technology",
                  quote: "Techinium's AI-powered ad optimization platform increased our campaign performance by 90%. Exceptional technical expertise.",
                  author: "Rohit K A",
                  role: "Chief Technology Officer",
                  metric: "90% better performance",
                  logo: "🎯"
                },
                {
                  company: "A to Z AI",
                  industry: "Artificial Intelligence",
                  quote: "Their AI agent deployment framework accelerated our product development by 8 months. Truly innovative solutions.",
                  author: "Dr. Emily Watson",
                  role: "Founder & CEO",
                  metric: "8 months faster",
                  logo: "🤖"
                },
                {
                  company: "Modern Concept",
                  industry: "Design & Technology",
                  quote: "The AI-enhanced UI/UX tools and automated testing reduced our design iteration time by 70%. Outstanding collaboration.",
                  author: "Alex Johnson",
                  role: "Creative Director",
                  metric: "70% faster iterations",
                  logo: "🎨"
                }
              ].concat([
                {
                  company: "Malama EV Cabs",
                  industry: "Electric Vehicle Services",
                  quote: "Techinium's AI-powered fleet management system optimized our routes and reduced operational costs by 45%. Outstanding results!",
                  author: "Saurav K S",
                  role: "Founder & CEO",
                  metric: "45% cost reduction",
                  logo: "🚗"
                },
                {
                  company: "Krushi Vista",
                  industry: "Agricultural Technology",
                  quote: "The AI-driven crop monitoring solution increased our yield predictions accuracy by 80%. Game-changing technology for agriculture.",
                  author: "Akash D",
                  role: "CTO",
                  metric: "80% better accuracy",
                  logo: "🌾"
                },
                {
                  company: "Launch & Lift",
                  industry: "Startup Incubator",
                  quote: "Their AI-accelerated development approach helped our portfolio companies go to market 60% faster. Incredible efficiency gains.",
                  author: "Pushpamala",
                  role: "Managing Partner",
                  metric: "60% faster launch",
                  logo: "🚀"
                }
              ]).map((testimonial, index) => (
                <Card key={index} className="bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 min-w-[320px] sm:min-w-[380px]">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <div className="text-xl sm:text-2xl">{testimonial.logo}</div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm sm:text-base">{testimonial.company}</div>
                        <div className="text-xs sm:text-sm text-slate-600">{testimonial.industry}</div>
                      </div>
                    </div>
                    <blockquote className="text-slate-700 mb-3 sm:mb-4 italic leading-relaxed text-sm sm:text-base">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-slate-900 text-sm">{testimonial.author}</div>
                        <div className="text-xs text-slate-600">{testimonial.role}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm sm:text-lg font-bold text-green-600">{testimonial.metric}</div>
                        <div className="text-xs text-slate-500">improvement</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
          
          {/* Case Study Highlights */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-6 sm:mb-8">Our Impact Across Industries</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                { number: "₹25Cr+", label: "Business Value Generated", desc: "Delivered through AI-powered solutions for our clients" },
                { number: "7", label: "Industry Verticals", desc: "Successfully transformed with AI solutions" },
                { number: "95%", label: "Client Satisfaction", desc: "Exceptional project delivery and support" },
                { number: "60%", label: "Faster Development", desc: "Average acceleration with AI-powered workflows" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-violet-600 mb-2">{stat.number}</div>
                  <div className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">{stat.label}</div>
                  <div className="text-xs sm:text-sm text-slate-600">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <Badge className="bg-violet-50 text-violet-700 border border-violet-200 mb-4">About Techinium</Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">AI-Enabled Tech Solution Company</h2>
              <div className="space-y-4 sm:space-y-6 text-slate-700">
                <p className="text-base sm:text-lg leading-relaxed">
                  Techinium is an AI-first development company founded with a vision to revolutionize how digital solutions are built. 
                  We combine cutting-edge artificial intelligence with proven development methodologies to deliver exceptional results 
                  across diverse industries - from electric vehicles to agriculture, startups to enterprise solutions.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Our unique approach leverages AI to accelerate development cycles, enhance code quality, and create intelligent 
                  applications that not only meet today's requirements but adapt and evolve with your business. We've successfully 
                  transformed operations for companies like Malama EV Cabs, Krushi Vista, Launch & Lift, and many others.
                </p>
                <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4">
                  <div className="text-center p-3 sm:p-4 rounded-lg border border-slate-200 bg-gradient-to-br from-violet-50 to-purple-50">
                    <div className="text-xl sm:text-2xl font-bold text-violet-600 mb-1">2024</div>
                    <div className="text-xs sm:text-sm text-slate-600">Founded</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 rounded-lg border border-slate-200 bg-gradient-to-br from-violet-50 to-purple-50">
                    <div className="text-xl sm:text-2xl font-bold text-violet-600 mb-1">50+</div>
                    <div className="text-xs sm:text-sm text-slate-600">Projects Delivered</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 rounded-lg border border-slate-200 bg-gradient-to-br from-violet-50 to-purple-50">
                    <div className="text-xl sm:text-2xl font-bold text-violet-600 mb-1">10+</div>
                    <div className="text-xs sm:text-sm text-slate-600">Industries Served</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:gap-4 pt-3 sm:pt-4">
                  <div className="text-center p-3 sm:p-4 rounded-lg border border-slate-200 bg-gradient-to-br from-violet-50 to-purple-50">
                    <div className="text-xl sm:text-2xl font-bold text-violet-600 mb-1">20+</div>
                    <div className="text-xs sm:text-sm text-slate-600">Years Combined Experience</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 sm:space-y-6 mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-slate-50 to-violet-50 border border-slate-200 rounded-2xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-violet-600" />
                  Our AI-Powered Approach
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="border-l-4 border-violet-200 pl-3 sm:pl-4">
                    <div className="font-medium text-slate-900 text-sm sm:text-base">Intelligent Development</div>
                    <div className="text-xs sm:text-sm text-slate-600">AI-assisted coding, automated testing, and smart optimization</div>
                  </div>
                  <div className="border-l-4 border-violet-200 pl-3 sm:pl-4">
                    <div className="font-medium text-slate-900 text-sm sm:text-base">Rapid Prototyping</div>
                    <div className="text-xs sm:text-sm text-slate-600">From concept to MVP in days using AI-accelerated workflows</div>
                  </div>
                  <div className="border-l-4 border-violet-200 pl-3 sm:pl-4">
                    <div className="font-medium text-slate-900 text-sm sm:text-base">Continuous Innovation</div>
                    <div className="text-xs sm:text-sm text-slate-600">Staying ahead with latest AI tools and methodologies</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Target className="h-4 w-4 sm:h-5 sm:w-5 text-violet-600" />
                  Our Mission
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  To democratize AI-powered development by making sophisticated, intelligent digital solutions accessible to businesses 
                  of all sizes - from innovative startups to established enterprises - while maintaining the highest standards of 
                  quality, security, and performance.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 border border-slate-200 rounded-lg bg-white hover:shadow-md transition-shadow">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-violet-600 mx-auto mb-2" />
                  <div className="text-xs sm:text-sm font-medium text-slate-900">Innovation Leader</div>
                  <div className="text-xs text-slate-600">AI Development Excellence</div>
                </div>
                <div className="text-center p-3 sm:p-4 border border-slate-200 rounded-lg bg-white hover:shadow-md transition-shadow">
                  <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-violet-600 mx-auto mb-2" />
                  <div className="text-xs sm:text-sm font-medium text-slate-900">Global Impact</div>
                  <div className="text-xs text-slate-600">Multi-Industry Solutions</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Company Values & Culture */}
          <div className="mt-16 sm:mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">What Drives Us</h3>
              <p className="text-slate-600 max-w-3xl mx-auto">
                Our core values shape how we work, innovate, and deliver exceptional AI-powered solutions for our clients.
              </p>
            </div>
            
            <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
              <Card className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 border border-violet-200 mb-4">
                    <Lightbulb className="h-6 w-6 text-violet-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Innovation First</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We constantly explore emerging AI technologies and methodologies to deliver cutting-edge solutions that give our clients a competitive advantage.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 border border-green-200 mb-4">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Client Success</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Every project is driven by our commitment to delivering measurable business value and exceeding client expectations through intelligent solutions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 border border-blue-200 mb-4">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Speed & Quality</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We leverage AI to accelerate development without compromising quality, delivering robust solutions faster than traditional approaches.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-violet-50 text-violet-700 border border-violet-200 mb-4">Get Started</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              Let's discuss how Techinium's AI-powered development services can accelerate your growth and optimize your operations. 
              Schedule a consultation or reach out directly.
            </p>
          </div>
          
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
            {/* Project Inquiry Form */}
            <Card className="bg-white border border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Rocket className="h-4 w-4 sm:h-5 sm:w-5 text-violet-600" />
                  Project Inquiry
                </CardTitle>
                <p className="text-slate-600 text-sm sm:text-base">Tell us about your AI-powered development project</p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1 block">Name *</label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name" 
                        className="bg-white border-slate-300" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1 block">Company *</label>
                      <Input 
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company name" 
                        className="bg-white border-slate-300" 
                        required 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1 block">Work Email *</label>
                    <Input 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@company.com" 
                      className="bg-white border-slate-300" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1 block">Phone</label>
                    <Input 
                      name="phone"
                      type="tel" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 8618847716" 
                      className="bg-white border-slate-300" 
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1 block">Project Type *</label>
                    <select 
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white text-slate-900 text-sm"
                      required
                    >
                      <option value="">Select project type</option>
                      <option value="ai-integration">AI Integration & Automation</option>
                      <option value="web-application">Web Application Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="full-stack">Full Stack Development</option>
                      <option value="ecommerce">E-commerce Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="api-integration">API Development & Integration</option>
                      <option value="digital-transformation">Digital Transformation</option>
                      <option value="consulting">AI Development Consulting</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1 block">Project Details *</label>
                    <Textarea 
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      rows={4} 
                      placeholder="Describe your project goals, current challenges, timeline, and budget range..." 
                      className="bg-white border-slate-300 text-sm" 
                      required 
                    />
                  </div>
                  
                  {/* Status messages */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 p-3 rounded-lg border border-green-200">
                      <Check className="h-4 w-4" />
                      <span>Thank you! Your inquiry has been sent successfully. We'll get back to you soon.</span>
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
                      <span>Sorry, there was an error sending your inquiry. Please try again or contact us directly.</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <ShieldCheck className="h-4 w-4 text-green-600" />
                    <span>Your information is secure and never shared with third parties.</span>
                  </div>
                  <Magnetic>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-slate-700 via-violet-600 to-purple-600 text-white hover:brightness-110 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Request Consultation
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </Magnetic>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Information & Career Inquiries */}
            <div className="space-y-4 sm:space-y-6">
              <Card className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-violet-600" />
                    Career Opportunities
                  </CardTitle>
                  <p className="text-slate-600 text-sm sm:text-base">Join our team of AI innovators</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-slate-700 text-sm sm:text-base">Interested in working with cutting-edge AI and development technology? We're always looking for talented individuals to join our team.</p>
                    <div className="grid gap-3">
                      <Magnetic>
                        <Button variant="outline" className="border-violet-200 text-violet-700 hover:bg-violet-100 justify-start w-full">
                          <a href="#careers" className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4" />
                            View Open Positions
                          </a>
                        </Button>
                      </Magnetic>
                      <Magnetic>
                        <Button variant="outline" className="border-violet-200 text-violet-700 hover:bg-violet-100 justify-start w-full">
                          <a href="mailto:careers@techinium.com" className="flex items-center gap-2">
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
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-violet-600" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-violet-100 border border-violet-200">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-violet-600" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-slate-600">Email</div>
                        <a href="mailto:hello@techinium.com" className="font-medium text-slate-900 hover:text-violet-600 transition text-sm sm:text-base">
                          hello@techinium.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-violet-100 border border-violet-200">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-violet-600" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-slate-600">Phone</div>
                        <a href="tel:+918618847716" className="font-medium text-slate-900 hover:text-violet-600 transition text-sm sm:text-base">
                          +91 8618 847 716
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-violet-100 border border-violet-200">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-violet-600" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-slate-600">Headquarters</div>
                        <div className="font-medium text-slate-900 text-sm sm:text-base">Bengaluru, India</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="bg-gradient-to-r from-slate-700 via-violet-600 to-purple-600 rounded-2xl p-4 sm:p-6 text-white">
                <h3 className="text-base sm:text-lg font-semibold mb-2">Prefer to schedule a call?</h3>
                <p className="text-xs sm:text-sm opacity-90 mb-4">Book a 30-minute discovery call with our AI experts to discuss your project requirements.</p>
                <Magnetic>
                  <Button variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100 w-full text-sm">
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

      {/* CAREERS */}
      <section id="careers" className="py-16 sm:py-20 lg:py-24 border-t border-slate-200 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-violet-100 text-violet-700 border border-violet-200 mb-4">Join Our Team</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Shape the Future of AI-Powered Development</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              Join a pioneering team of AI-first developers and innovators building intelligent solutions that transform industries. 
              We're not just coding the future – we're creating AI-powered experiences that revolutionize how businesses operate.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8 sm:mb-10 text-center">Why Join Techinium?</h3>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Brain className="h-6 w-6 sm:h-7 sm:w-7" />,
                  title: "AI-First Innovation",
                  desc: "Work with cutting-edge AI technologies and tools that accelerate development and enhance capabilities."
                },
                {
                  icon: <Zap className="h-6 w-6 sm:h-7 sm:w-7" />,
                  title: "Accelerated Learning",
                  desc: "Master AI-powered development workflows that make you 3x more productive and efficient."
                },
                {
                  icon: <Target className="h-6 w-6 sm:h-7 sm:w-7" />,
                  title: "Impact-Driven Projects",
                  desc: "Build intelligent solutions that solve real business problems across diverse industries."
                },
                {
                  icon: <Globe className="h-6 w-6 sm:h-7 sm:w-7" />,
                  title: "Global AI Community",
                  desc: "Remote-first culture with flexible hours and access to the latest AI development tools."
                }
              ].map((benefit, index) => (
                <Card key={index} className="bg-white border border-violet-200 hover:shadow-lg transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-purple-100 border border-violet-200 mb-4 text-violet-600">
                      {benefit.icon}
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">{benefit.title}</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{benefit.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 sm:mb-8 text-center">Open Positions</h3>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {careers.map((job, index) => (
                <Card key={index} className="bg-white border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div className="min-w-0 flex-1">
                        <CardTitle className="text-base sm:text-lg pr-2">{job.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm text-slate-600">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-violet-100 text-violet-700 border-violet-200 text-xs">
                        {job.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 text-xs sm:text-sm mb-4 leading-relaxed">{job.description}</p>
                    <Magnetic>
                      <Button className="w-full bg-gradient-to-r from-slate-700 via-violet-600 to-purple-600 text-white hover:brightness-110 text-xs sm:text-sm">
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
                    <a href="mailto:careers@techinium.com?subject=Open Application" className="inline-flex items-center">
                      Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid gap-8 sm:gap-10 md:grid-cols-3 lg:grid-cols-5">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 font-bold mb-4">
                <LogoAI className="h-6 w-6 sm:h-8 sm:w-8" /> 
                <span className="text-lg sm:text-xl">Techinium</span>
              </div>
              <p className="text-slate-400 text-sm max-w-sm mb-6 leading-relaxed">
                Transforming businesses with autonomous AI solutions. From intelligent automation to advanced analytics, 
                we deliver the technology that powers tomorrow's enterprises.
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <a 
                  href="https://github.com/techinium" 
                  className="rounded-full border border-slate-700 p-2 hover:bg-slate-800 hover:border-slate-600 transition" 
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/techinium" 
                  className="rounded-full border border-slate-700 p-2 hover:bg-slate-800 hover:border-slate-600 transition" 
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a 
                  href="https://twitter.com/techinium" 
                  className="rounded-full border border-slate-700 p-2 hover:bg-slate-800 hover:border-slate-600 transition" 
                  aria-label="Twitter/X"
                >
                  <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </div>
            </div>

            <div>
              <div className="font-semibold mb-3 sm:mb-4 text-white text-sm sm:text-base">Services</div>
              <ul className="text-sm text-slate-400 space-y-2 sm:space-y-3">
                <li><a href="#solutions" className="hover:text-white transition">Web Development</a></li>
                <li><a href="#solutions" className="hover:text-white transition">Mobile App Development</a></li>
                <li><a href="#solutions" className="hover:text-white transition">Full Stack Development</a></li>
                <li><a href="#solutions" className="hover:text-white transition">AI Chatbots & Agents</a></li>
                <li><a href="#solutions" className="hover:text-white transition">AI Consulting</a></li>
              </ul>
            </div>

            <div>
              <div className="font-semibold mb-3 sm:mb-4 text-white text-sm sm:text-base">Company</div>
              <ul className="text-sm text-slate-400 space-y-2 sm:space-y-3">
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#industries" className="hover:text-white transition">Industries</a></li>
                <li><a href="#careers" className="hover:text-white transition">Careers</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <div className="font-semibold mb-3 sm:mb-4 text-white text-sm sm:text-base">Contact</div>
              <div className="space-y-3 sm:space-y-4">
                <div className="text-sm text-slate-400">
                  <div className="font-medium text-white mb-1">Email</div>
                  <a href="mailto:hello@techinium.com" className="hover:text-white transition break-all">
                    hello@techinium.com
                  </a>
                </div>
                <div className="text-sm text-slate-400">
                  <div className="font-medium text-white mb-1">Phone</div>
                  <a href="tel:+918618847716" className="hover:text-white transition">
                    +91 8618 847 716
                  </a>
                </div>
                <div className="text-sm text-slate-400">
                  <div className="font-medium text-white mb-1">Location</div>
                  <div>Bengaluru, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Techinium. All rights reserved.
            </div>
            <div className="flex items-center gap-4 sm:gap-6 text-sm text-slate-400">
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