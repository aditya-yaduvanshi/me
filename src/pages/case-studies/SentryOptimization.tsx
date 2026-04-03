import React from "react";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

export default function SentryOptimization() {
  return (
    <CaseStudyLayout
      title="Sentry Monitoring & Debugging Optimization"
      tagline="Overhauled error tracking and observability to dramatically reduce noise and accelerate incident response."
      stats={[
        { label: "Role", value: "Product Engineer" },
        { label: "Impact", value: "Faster incident resolution" },
        { label: "Stack", value: "Sentry, React, Node.js" }
      ]}
      nextCaseStudy={{
        title: "React Web Component Library",
        path: "/case-study/react-web-component-library"
      }}
    >
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">01</span>
          The Problem
        </h2>
        <p>
          Sentry was configured out-of-the-box with no filtering. The engineering team was drowning in thousands of low-priority, duplicate, and non-actionable errors. Real bugs were getting buried, and alert fatigue was causing critical issues to be overlooked.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">02</span>
          The Approach
        </h2>
        <p>
          I audited all active issues in Sentry, categorizing errors into three groups: critical (user-impacting), warnings (needs attention), and noise (known/ignorable). Based on this, I designed a robust filtering and grouping strategy to restore observability.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">03</span>
          The Solution
        </h2>
        <p>
          I implemented custom Sentry fingerprinting to intelligently group related errors and added <code>beforeSend</code> filters to aggressively drop known non-actionable errors. I also set up performance monitoring with custom transactions for critical user flows, configured alert rules with strict severity tiers (critical alerts to PagerDuty, warnings to Slack), and attached rich custom context (user ID, session data, feature flags) to all reports.
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
              <div className="text-4xl font-bold text-indigo-600 mb-2">80%</div>
              <div className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Reduction in Sentry noise</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">Improved</div>
              <div className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Mean Time to Resolution</div>
            </div>
          </div>
        </div>
        <p>
          The team now focuses exclusively on actionable errors. The mean time to resolution (MTTR) improved significantly, and performance bottlenecks are now proactively identified rather than reacting to user complaints.
        </p>
      </section>
    </CaseStudyLayout>
  );
}