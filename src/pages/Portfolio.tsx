import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Github, Linkedin, Mail, ChevronRight, ArrowRight,
  Code, Database, Layout, Server, Cloud, Shield, Activity, Lock, Bug, Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "skills"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div 
            className="font-semibold text-lg tracking-tight text-slate-900 cursor-pointer"
            onClick={() => scrollTo("hero")}
          >
            Aditya Yaduvanshi
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm cursor-pointer font-medium transition-colors hover:text-indigo-600 ${
                  activeSection === item.id ? "text-indigo-600" : "text-slate-600"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="default" 
              className="bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white rounded-md px-5 h-9 font-medium shadow-sm transition-all"
              onClick={() => scrollTo("contact")}
            >
              Contact
            </Button>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16">
        {/* HERO SECTION */}
        <section id="hero" className="min-h-[85vh] flex flex-col justify-center px-6 max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              I am a <span className="text-indigo-600">Product Engineer</span> building scalable systems.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl font-light">
              I specialize in high-performance web applications, AI-driven products, and robust infrastructure.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 mb-16">
              <Button className="bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white px-8 h-12 rounded-md font-medium shadow-sm flex items-center gap-2 group transition-all" onClick={() => scrollTo("projects")}>
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex items-center gap-3 ml-2">
                <a href="https://github.com/aditya-yaduvanshi" target="_blank" rel="noopener noreferrer" className="p-2.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"><Github className="w-5 h-5" /></a>
                <a href="https://linkedin.com/in/aditya-kamsan" target="_blank" rel="noopener noreferrer" className="p-2.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="mailto:aditya.yaduvanshi.work@gmail.com" className="p-2.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"><Mail className="w-5 h-5" /></a>
              </div>
            </motion.div>

            {/* Key Metrics Cards */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">90%</div>
                  <div className="text-sm font-medium text-slate-900">Bundle Size Reduction</div>
                  <div className="text-sm text-slate-500 mt-1">Optimized frontend assets</div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">85%</div>
                  <div className="text-sm font-medium text-slate-900">Latency Improvement</div>
                  <div className="text-sm text-slate-500 mt-1">Through API optimization</div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">5&times;</div>
                  <div className="text-sm font-medium text-slate-900">Product Adoption</div>
                  <div className="text-sm text-slate-500 mt-1">Driven by reusable components</div>
                </CardContent>
              </Card>
            </motion.div>

          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">About</h2>
              <div className="w-12 h-1 bg-indigo-600 mt-4 rounded-full" />
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                I am a Product Engineer with close to 5 years of experience building scalable, high-performance web applications and AI-driven systems. My approach combines deep technical expertise with a strong product sense to deliver solutions that solve real business problems.
              </p>
              <p>
                I have a proven track record of optimizing complex systems, including achieving a 90% reduction in frontend bundle size and an 85% improvement in system latency. I specialize in full-stack development, system design, and DevOps, ensuring that infrastructure is not only performant but also highly secure and compliant with ISO 27001 and SOC 2 standards.
              </p>
              <p>
                Recently, I have focused on integrating large language models (LLMs) into production environments, crafting prompt-engineered workflows, and building asynchronous pipelines for data processing at scale.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 px-6 bg-slate-50 border-y border-slate-200">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-16">
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Experience</h2>
                <div className="w-12 h-1 bg-indigo-600 mt-4 rounded-full" />
              </motion.div>

              <div className="space-y-12">
                {/* Experience 1 */}
                <motion.div variants={fadeInUp} className="relative pl-8 md:pl-0">
                  <div className="hidden md:block absolute left-[8.5rem] top-2 bottom-[-3rem] w-[2px] bg-slate-200" />
                  <div className="hidden md:block absolute left-[8.2rem] top-2 w-3 h-3 rounded-full bg-indigo-600 border-4 border-slate-50 box-content" />
                  
                  <div className="grid md:grid-cols-[10rem_1fr] gap-4 md:gap-12">
                    <div className="text-sm font-medium text-slate-500 pt-1">2023 &mdash; Present</div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-slate-900">Full Stack Engineer</h3>
                      <div className="text-indigo-600 font-medium mb-4">Socialtrait</div>
                      <ul className="space-y-3 text-slate-600">
                        <li className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                          <span>Built AI-driven persona evaluation and survey analysis system utilizing LLM-based insight generation.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                          <span>Architected asynchronous pipelines for large-scale survey submission and data processing.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                          <span>Reduced frontend bundle size by 90% and improved system latency by 85% via API optimization.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                          <span>Deployed scalable, secure infrastructure on AWS and Docker, maintaining strict ISO 27001 and SOC 2 compliance.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Experience 2 */}
                <motion.div variants={fadeInUp} className="relative pl-8 md:pl-0">
                  <div className="hidden md:block absolute left-[8.5rem] top-2 bottom-[-3rem] w-[2px] bg-slate-200" />
                  <div className="hidden md:block absolute left-[8.2rem] top-2 w-3 h-3 rounded-full bg-white border-2 border-slate-300 box-content" />
                  
                  <div className="grid md:grid-cols-[10rem_1fr] gap-4 md:gap-12">
                    <div className="text-sm font-medium text-slate-500 pt-1">2022 &mdash; 2023</div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-slate-900">Software Engineer</h3>
                      <div className="text-slate-700 font-medium mb-4">Databrain Labs</div>
                      <ul className="space-y-3 text-slate-600">
                        <li className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                          <span>Developed a scalable analytics platform optimized for processing massive datasets.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                          <span>Drove a 5&times; increase in product adoption by establishing a robust, reusable component architecture.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                          <span>Improved CSV processing performance by 70%.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                          <span>Engineered role-based access control (RBAC) mechanisms for secure, multi-tenant environments.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Experience 3 */}
                <motion.div variants={fadeInUp} className="relative pl-8 md:pl-0">
                  <div className="hidden md:block absolute left-[8.2rem] top-2 w-3 h-3 rounded-full bg-white border-2 border-slate-300 box-content" />
                  
                  <div className="grid md:grid-cols-[10rem_1fr] gap-4 md:gap-12">
                    <div className="text-sm font-medium text-slate-500 pt-1">2021 &mdash; 2022</div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-slate-900">Full Stack Developer</h3>
                      <div className="text-slate-700 font-medium mb-4">Early Career</div>
                      <ul className="space-y-3 text-slate-600">
                        <li className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                          <span>Built full-stack features across two companies — responsive, performant interfaces paired with backend APIs and database integrations.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                          <span>Developed reusable UI components and RESTful API endpoints adopted across multiple products.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                          <span>Focused on UI performance, accessibility, cross-browser compatibility, and clean code practices.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Projects</h2>
              <div className="w-12 h-1 bg-indigo-600 mt-4 rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1: Performance */}
              <motion.div variants={fadeInUp}>
                <Link href="/case-study/performance-optimization">
                  <Card className="h-full border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white group cursor-pointer flex flex-col">
                    <CardContent className="p-8 flex-1 flex flex-col">
                      <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <Activity className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Frontend Performance Optimization</h3>
                      <p className="text-sm text-slate-600 mb-6 leading-relaxed flex-1">
                        Reduced bundle size by 90% and dramatically improved load times in a production React app.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-medium">React</Badge>
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-medium">Vite</Badge>
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-medium">Webpack</Badge>
                      </div>
                      <div className="text-sm font-semibold text-indigo-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              {/* Project 2: AI */}
              <motion.div variants={fadeInUp}>
                <Link href="/case-study/ai-evaluation-framework">
                  <Card className="h-full border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white group cursor-pointer flex flex-col">
                    <CardContent className="p-8 flex-1 flex flex-col">
                      <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <Database className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">AI Agent Evaluation Framework</h3>
                      <p className="text-sm text-slate-600 mb-6 leading-relaxed flex-1">
                        Led the design of a system to evaluate AI agent responses for focused group discussions — validating alignment with participant demographics and research objectives.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-medium">OpenAI</Badge>
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-medium">Node.js</Badge>
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-medium">React</Badge>
                      </div>
                      <div className="text-sm font-semibold text-indigo-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              {/* Project 3: Streaming */}
              <motion.div variants={fadeInUp}>
                <Link href="/case-study/million-records-streaming">
                  <Card className="h-full border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white group cursor-pointer flex flex-col">
                    <CardContent className="p-8 flex-1 flex flex-col">
                      <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <Server className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Million Records Streaming</h3>
                      <p className="text-sm text-slate-600 mb-6 leading-relaxed flex-1">
                        Engineered a streaming data export solution capable of downloading millions of records reliably.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-medium">Node.js Streams</Badge>
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-medium">React</Badge>
                      </div>
                      <div className="text-sm font-semibold text-indigo-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              {/* Project 4: RBAC */}
              <motion.div variants={fadeInUp}>
                <Link href="/case-study/rbac">
                  <Card className="h-full border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white group cursor-pointer flex flex-col">
                    <CardContent className="p-8 flex-1 flex flex-col">
                      <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <Lock className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Role-Based Access Control</h3>
                      <p className="text-sm text-slate-600 mb-6 leading-relaxed flex-1">
                        Designed and implemented a flexible RBAC system for a multi-tenant analytics platform.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-medium">PostgreSQL</Badge>
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-medium">Node.js</Badge>
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-medium">React</Badge>
                      </div>
                      <div className="text-sm font-semibold text-indigo-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              {/* Project 5: Sentry */}
              <motion.div variants={fadeInUp}>
                <Link href="/case-study/sentry-optimization">
                  <Card className="h-full border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white group cursor-pointer flex flex-col">
                    <CardContent className="p-8 flex-1 flex flex-col">
                      <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <Bug className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Sentry Error Optimization</h3>
                      <p className="text-sm text-slate-600 mb-6 leading-relaxed flex-1">
                        Overhauled error tracking to dramatically reduce noise and accelerate incident response.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-medium">Sentry</Badge>
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-medium">React</Badge>
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-medium">Node.js</Badge>
                      </div>
                      <div className="text-sm font-semibold text-indigo-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              {/* Project 6: Web Components */}
              <motion.div variants={fadeInUp}>
                <Link href="/case-study/react-web-component-library">
                  <Card className="h-full border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white group cursor-pointer flex flex-col">
                    <CardContent className="p-8 flex-1 flex flex-col">
                      <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <Layers className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Universal Web Components</h3>
                      <p className="text-sm text-slate-600 mb-6 leading-relaxed flex-1">
                        Transformed an internal React component library into a framework-agnostic NPM package.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-medium">Web Components</Badge>
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-medium">React</Badge>
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-medium">Vite</Badge>
                      </div>
                      <div className="text-sm font-semibold text-indigo-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 px-6 bg-slate-50 border-y border-slate-200">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-16">
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Skills & Expertise</h2>
                <div className="w-12 h-1 bg-indigo-600 mt-4 rounded-full" />
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                <motion.div variants={fadeInUp}>
                  <div className="flex items-center gap-3 mb-4">
                    <Layout className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-lg font-bold text-slate-900">Frontend</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "TypeScript", "React", "Next.js", "Vite", "Tailwind CSS", "React Query", "Zustand", "Redux", "AntDesign", "MUI"].map(skill => (
                      <Badge key={skill} variant="outline" className="border-slate-300 text-slate-700 font-medium py-1.5 px-3 bg-white hover:bg-slate-50 transition-colors cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-lg font-bold text-slate-900">Backend & APIs</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express", "Nest.js", "Python", "Django", "FastAPI", "REST APIs", "GraphQL", "Hasura", "WebSockets", "Auth0", "OAuth 2.0"].map(skill => (
                      <Badge key={skill} variant="outline" className="border-slate-300 text-slate-700 font-medium py-1.5 px-3 bg-white hover:bg-slate-50 transition-colors cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-lg font-bold text-slate-900">Databases & BaaS</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis", "Supabase", "Firebase", "Appwrite"].map(skill => (
                      <Badge key={skill} variant="outline" className="border-slate-300 text-slate-700 font-medium py-1.5 px-3 bg-white hover:bg-slate-50 transition-colors cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <div className="flex items-center gap-3 mb-4">
                    <Cloud className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-lg font-bold text-slate-900">Cloud & DevOps</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["AWS", "Docker", "CI/CD", "GitHub Actions"].map(skill => (
                      <Badge key={skill} variant="outline" className="border-slate-300 text-slate-700 font-medium py-1.5 px-3 bg-white hover:bg-slate-50 transition-colors cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-lg font-bold text-slate-900">AI & LLMs</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["LLM Integration", "Prompt Engineering", "OpenAI APIs", "AI Evaluation"].map(skill => (
                      <Badge key={skill} variant="outline" className="border-slate-300 text-slate-700 font-medium py-1.5 px-3 bg-white hover:bg-slate-50 transition-colors cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-lg font-bold text-slate-900">Security & Compliance</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["ISO 27001", "SOC 2", "RBAC", "Auth & AuthZ"].map(skill => (
                      <Badge key={skill} variant="outline" className="border-slate-300 text-slate-700 font-medium py-1.5 px-3 bg-white hover:bg-slate-50 transition-colors cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 px-6 max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="bg-white border border-slate-200 rounded-2xl p-12 shadow-sm"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-4">Get In Touch</motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-600 mb-8 max-w-xl mx-auto">
              I'm currently exploring new opportunities. Whether you have a question or just want to connect, my inbox is always open.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a href="mailto:aditya.yaduvanshi.work@gmail.com">
                <Button className="bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white px-8 h-12 rounded-md font-medium shadow-sm transition-all text-base">
                  Say Hello
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </section>

      </main>

      <footer className="py-8 text-center border-t border-slate-200 bg-white">
        <p className="text-slate-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Aditya Yaduvanshi.
        </p>
      </footer>
    </div>
  );
}