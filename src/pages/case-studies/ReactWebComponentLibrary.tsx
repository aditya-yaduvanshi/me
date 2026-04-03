import React from "react";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

export default function ReactWebComponentLibrary() {
  return (
    <CaseStudyLayout
      title="React to Universal Web Component Library"
      tagline="Transformed an internal React component library into a framework-agnostic NPM package usable in any tech stack."
      stats={[
        { label: "Role", value: "Product Engineer" },
        { label: "Impact", value: "Universal component adoption" },
        { label: "Stack", value: "React, Custom Elements, Vite" }
      ]}
    >
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">01</span>
          The Problem
        </h2>
        <p>
          The team had developed a highly polished, robust React component library, but partner teams utilizing Vue, Angular, and vanilla JS were unable to adopt it. The overhead of duplicating and maintaining components across disparate frameworks was unsustainable.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">02</span>
          The Approach
        </h2>
        <p>
          I researched the Web Components standard (Custom Elements API) alongside various wrapper strategies. I evaluated multiple options: a full rewrite using native web components, utilizing a bridge library like <code>@r2wc/react-to-web-component</code>, or compiling React directly to custom elements using Vite.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">03</span>
          The Solution
        </h2>
        <p>
          I opted for a compile-time approach. Each React component is automatically wrapped in a Custom Element class that manages the React lifecycle internally. Props are mapped to element attributes and properties, and React events map seamlessly to <code>CustomEvent</code> dispatches. The resulting bundle was published as a versioned NPM package with precise TypeScript definitions, allowing consumers to simply import a script and use standard HTML elements like <code>&lt;my-button&gt;</code> natively in their framework of choice.
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
              <div className="text-4xl font-bold text-indigo-600 mb-2">1 Base</div>
              <div className="text-sm font-semibold text-slate-700 uppercase tracking-wide">One codebase, universal usage</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Consistent design language</div>
            </div>
          </div>
        </div>
        <p>
          The universal package was immediately adopted by partner teams. It enforced a consistent design language across all products while maintaining a single source of truth for UI logic, complete with comprehensive documentation and TypeScript support.
        </p>
      </section>
    </CaseStudyLayout>
  );
}