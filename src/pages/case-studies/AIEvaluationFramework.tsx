import React from "react";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

export default function AIEvaluationFramework() {
  return (
    <CaseStudyLayout
      title="AI Agent Evaluation Framework"
      tagline="Led the design and development of a system to evaluate whether AI agents respond appropriately for focused group discussions — validating alignment with participant demographics, community context, and research objectives."
      stats={[
        { label: "Role", value: "Tech Lead" },
        { label: "Company", value: "Socialtrait" },
        { label: "Impact", value: "Scalable AI quality assurance" },
        { label: "Stack", value: "Node.js, OpenAI, React" }
      ]}
      nextCaseStudy={{
        title: "Million Records Streaming",
        path: "/case-study/million-records-streaming"
      }}
    >
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">01</span>
          The Problem
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Socialtrait runs AI-powered focused group discussions where AI agents engage participants in research conversations. A critical product requirement was ensuring that each AI agent responds in a way that is contextually appropriate — aligned with the participant's demographic profile, community background, and the specific research objective of the study.
        </p>
        <p className="text-slate-600 leading-relaxed mt-4">
          Without a structured evaluation layer, there was no reliable way to verify whether an AI agent's responses were accurate, demographically sensitive, or on-topic. This created a quality assurance gap that could directly compromise the integrity of research outcomes.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">02</span>
          The Approach
        </h2>
        <p className="text-slate-600 leading-relaxed">
          I led the project end-to-end — scoping the evaluation criteria, designing the system architecture, and driving implementation across the team. The core challenge was defining what "appropriate" means in context: a response that works for one demographic group or research objective may be inappropriate for another.
        </p>
        <p className="text-slate-600 leading-relaxed mt-4">
          We established three evaluation axes for every AI agent response:
        </p>
        <ul className="mt-4 space-y-3 text-slate-600">
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2.5 shrink-0" />
            <span><strong className="text-slate-800">Demographic alignment</strong> — does the response reflect the participant's age, culture, background, and lived experience?</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2.5 shrink-0" />
            <span><strong className="text-slate-800">Community relevance</strong> — is the language, tone, and framing appropriate to the participant's community context?</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2.5 shrink-0" />
            <span><strong className="text-slate-800">Research objective fidelity</strong> — does the response meaningfully contribute to the study's stated goals?</span>
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">03</span>
          The Solution
        </h2>
        <p className="text-slate-600 leading-relaxed">
          I designed an asynchronous evaluation pipeline that runs alongside the live AI discussion. After each AI agent response is generated, it is passed through the evaluation system before being surfaced in the product analytics.
        </p>
        <p className="text-slate-600 leading-relaxed mt-4">
          The evaluator uses a secondary LLM call with a carefully structured prompt that includes: the participant's demographic profile, the study's research objective, the community context parameters, and the AI agent's response. The evaluation produces a structured score and rationale across the three axes.
        </p>
        <p className="text-slate-600 leading-relaxed mt-4">
          Results feed into an internal dashboard giving researchers visibility into agent quality across studies — flagging low-scoring responses for review and surfacing patterns in agent behavior that need adjustment.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">04</span>
          The Results
        </h2>
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-8 my-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">3-axis</div>
              <div className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Evaluation framework</div>
              <div className="text-sm text-slate-500 mt-1">Demographics, community, research objective</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">Async</div>
              <div className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Non-blocking evaluation</div>
              <div className="text-sm text-slate-500 mt-1">No impact on live discussion performance</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">Scalable</div>
              <div className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Across all studies</div>
              <div className="text-sm text-slate-500 mt-1">Consistent quality assurance at scale</div>
            </div>
          </div>
        </div>
        <p className="text-slate-600 leading-relaxed">
          The framework gave the research team confidence in the integrity of AI-generated discussions. It also created a feedback loop — evaluation data informed prompt tuning, progressively improving agent appropriateness across different demographic and community contexts.
        </p>
      </section>
    </CaseStudyLayout>
  );
}