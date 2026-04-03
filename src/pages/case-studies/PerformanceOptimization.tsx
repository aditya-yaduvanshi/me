import React from "react";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

export default function PerformanceOptimization() {
  return (
    <CaseStudyLayout
      title="Frontend Performance Optimization"
      tagline="Reduced bundle size by 90% and dramatically improved load times in a production React app."
      stats={[
        { label: "Role", value: "Product Engineer" },
        { label: "Timeline", value: "3 months" },
        { label: "Impact", value: "90% bundle reduction" },
        { label: "Stack", value: "React, Webpack, Vite" }
      ]}
      nextCaseStudy={{
        title: "AI-Driven Persona Evaluation",
        path: "/case-study/ai-evaluation-framework"
      }}
    >
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">01</span>
          The Problem
        </h2>
        <p>
          The application had accumulated years of unoptimized dependencies, large monolithic bundles, and no code splitting strategy. Initial load time was unacceptable, impacting user retention and overall performance metrics. 
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">02</span>
          The Approach
        </h2>
        <p>
          Conducted a full bundle analysis using <code>webpack-bundle-analyzer</code>. I identified 3 core issues: duplicate dependencies, synchronous loading of non-critical code, and unoptimized image assets. The strategy was to address these systematically without disrupting ongoing feature development.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">03</span>
          The Solution
        </h2>
        <p>
          I implemented route-based code splitting and lazy loading for all non-critical components. We introduced aggressive tree shaking and dependency deduplication. Finally, I led the migration of the bundler from Webpack to Vite, drastically reducing build times and improving the developer experience.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">04</span>
          The Results
        </h2>
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-8 my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">90%</div>
              <div className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Reduction in initial bundle size</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">~60%</div>
              <div className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Improvement in Time to Interactive</div>
            </div>
          </div>
        </div>
        <p>
          The optimizations led to a significant improvement in Lighthouse scores, providing a faster, smoother experience for users and enabling the team to build features without being constrained by slow build pipelines.
        </p>
      </section>
    </CaseStudyLayout>
  );
}