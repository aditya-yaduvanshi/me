import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronLeft, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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

interface StatChip {
  label: string;
  value: string;
}

interface CaseStudyLayoutProps {
  title: string;
  tagline: string;
  stats: StatChip[];
  children: React.ReactNode;
  nextCaseStudy?: {
    title: string;
    path: string;
  };
}

export function CaseStudyLayout({ title, tagline, stats, children, nextCaseStudy }: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-semibold text-lg tracking-tight text-slate-900 cursor-pointer">
            Aditya Yaduvanshi
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#about" className="text-sm font-medium transition-colors text-slate-600 hover:text-indigo-600">
              About
            </Link>
            <Link href="/#experience" className="text-sm font-medium transition-colors text-slate-600 hover:text-indigo-600">
              Experience
            </Link>
            <Link href="/#projects" className="text-sm font-medium transition-colors text-slate-600 hover:text-indigo-600">
              Projects
            </Link>
            <Link href="/#skills" className="text-sm font-medium transition-colors text-slate-600 hover:text-indigo-600">
              Skills
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-10">
              <Link href="/#projects" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors mb-8 group">
                <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                All Projects
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                {title}
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed font-light mb-10">
                {tagline}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1 bg-white border border-slate-200 rounded-lg px-4 py-3 shadow-sm">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</span>
                    <span className="text-sm font-medium text-slate-900">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="prose prose-slate prose-indigo max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-slate-600">
              {children}
            </motion.div>

            {nextCaseStudy && (
              <motion.div variants={fadeInUp} className="mt-24 pt-12 border-t border-slate-200">
                <div className="flex flex-col items-center text-center">
                  <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Next Case Study</span>
                  <Link href={nextCaseStudy.path} className="group inline-flex items-center gap-2 text-2xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    {nextCaseStudy.title}
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform text-indigo-600" />
                  </Link>
                </div>
              </motion.div>
            )}
          </motion.div>
        </article>
      </main>

      <footer className="py-12 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Aditya Yaduvanshi. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/aditya-yaduvanshi" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"><Github className="w-5 h-5" /></a>
            <a href="https://linkedin.com/in/aditya-kamsan" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:aditya.yaduvanshi.work@gmail.com" className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}