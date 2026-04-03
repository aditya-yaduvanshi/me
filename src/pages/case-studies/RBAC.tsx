import React from "react";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

export default function RBAC() {
  return (
    <CaseStudyLayout
      title="Role-Based Access Control System"
      tagline="Independently led and built a flexible, extensible RBAC system — including custom user and organization-defined roles — for a multi-tenant analytics platform."
      stats={[
        { label: "Role", value: "Lead Engineer (Solo)" },
        { label: "Company", value: "Databrain Labs" },
        { label: "Impact", value: "Secure multi-tenant platform" },
        { label: "Stack", value: "Node.js, PostgreSQL, React" }
      ]}
      nextCaseStudy={{
        title: "Sentry Monitoring & Debugging Optimization",
        path: "/case-study/sentry-optimization"
      }}
    >
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">01</span>
          The Problem
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Databrain Labs' analytics platform was scaling rapidly across multiple organizations. Each organization had different team structures and different expectations around data access — some users needed full admin control, others were analysts with read/write access, and others were viewers with read-only access.
        </p>
        <p className="text-slate-600 leading-relaxed mt-4">
          The platform had no centralized access control system. Permissions were scattered, inconsistently applied, and not enforced server-side. More critically, there was no way for organizations to define their own roles or customize permissions to match their internal team structures.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">02</span>
          The Approach
        </h2>
        <p className="text-slate-600 leading-relaxed">
          I owned this project entirely — from system design through to production deployment. The key design decision was building the permission model around two layers: system-defined roles (built-in, cannot be deleted) and organization-defined roles (fully customizable per org).
        </p>
        <p className="text-slate-600 leading-relaxed mt-4">
          I modeled permissions as discrete, named capabilities (e.g. <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">reports:read</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">datasets:write</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">users:manage</code>) and roles as named collections of permissions. This meant new permissions could be added to the system without changing the role structure, and organizations could compose their own roles from any combination of available permissions.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">03</span>
          The Solution
        </h2>
        <p className="text-slate-600 leading-relaxed">
          I implemented a three-tier authorization model: <strong className="text-slate-800">Users → Roles → Permissions</strong>, with an additional org-scoping layer. The schema:
        </p>
        <ul className="mt-4 space-y-3 text-slate-600">
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2.5 shrink-0" />
            <span><strong className="text-slate-800">System roles</strong> — predefined (Admin, Analyst, Viewer) with locked permission sets, available to all orgs.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2.5 shrink-0" />
            <span><strong className="text-slate-800">Custom org roles</strong> — any organization can create named roles and assign any combination of permissions to them, scoped only to that org.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2.5 shrink-0" />
            <span><strong className="text-slate-800">Permission middleware</strong> — every API route is guarded by an Express middleware that checks the requesting user's resolved permission set. Checks are always server-side.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2.5 shrink-0" />
            <span><strong className="text-slate-800">Frontend enforcement</strong> — a <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">usePermission</code> hook conditionally renders UI elements based on the user's active role. UI enforcement mirrors server enforcement but never replaces it.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2.5 shrink-0" />
            <span><strong className="text-slate-800">Role management UI</strong> — built an admin interface for org admins to create, edit, and assign custom roles without engineering involvement.</span>
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">04</span>
          The Results
        </h2>
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-8 my-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">2-layer</div>
              <div className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Role system</div>
              <div className="text-sm text-slate-500 mt-1">System + custom org-defined roles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">Zero</div>
              <div className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Code changes needed</div>
              <div className="text-sm text-slate-500 mt-1">To add new org roles or permissions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">Full</div>
              <div className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Audit trail</div>
              <div className="text-sm text-slate-500 mt-1">All permission changes logged</div>
            </div>
          </div>
        </div>
        <p className="text-slate-600 leading-relaxed">
          Organizations can now define roles that match their exact team structure without engineering support. The system is fully extensible — adding a new permission is a database entry, not a code change. Security is enforced at every layer, with a complete audit trail for compliance purposes.
        </p>
      </section>
    </CaseStudyLayout>
  );
}