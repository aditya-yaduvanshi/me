import React from "react";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

export default function MillionRecordsStreaming() {
  return (
    <CaseStudyLayout
      title="Million Records Streaming Download"
      tagline="Engineered a streaming data export solution capable of downloading millions of records without crashing the browser or server."
      stats={[
        { label: "Role", value: "Product Engineer" },
        { label: "Impact", value: "Millions of records exported reliably" },
        { label: "Stack", value: "Node.js, Streams API, React" }
      ]}
      nextCaseStudy={{
        title: "Role-Based Access Control",
        path: "/case-study/rbac"
      }}
    >
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">01</span>
          The Problem
        </h2>
        <p>
          Users needed to export very large datasets (1M+ rows) as CSV or Excel files. The existing implementation loaded all data into memory simultaneously, causing out-of-memory (OOM) crashes on the server and request timeouts in the browser for large exports.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">02</span>
          The Approach
        </h2>
        <p>
          I researched Node.js stream APIs and browser streaming download techniques to design a chunked pipeline. The goal was to ensure that data flows sequentially from the database, through the server, and straight to the browser without ever fully materializing in memory.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">03</span>
          The Solution
        </h2>
        <p>
          I implemented server-side cursor-based pagination tightly coupled with Node.js Transform streams. Data is fetched in configurable chunks, transformed to CSV format on-the-fly, and streamed directly to the HTTP response. On the frontend, I leveraged the Fetch API along with <code>ReadableStream</code> and a Service Worker to process and save chunked downloads gracefully.
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
              <div className="text-4xl font-bold text-indigo-600 mb-2">1M+</div>
              <div className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Records exported reliably</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">Flat</div>
              <div className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Server memory usage</div>
            </div>
          </div>
        </div>
        <p>
          The system now successfully and reliably exports huge datasets without timeouts. Furthermore, the streaming approach enabled us to provide users with a real-time progress indicator during the download.
        </p>
      </section>
    </CaseStudyLayout>
  );
}