"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function EsgPage() {
  return (
    <>
      <Navbar />
      <div className="w-full px-[5%] md:px-[12%] py-20 pt-32">
        {/* --- NÚT BACK (Thêm đoạn này) --- */}
        <div className="mb-5">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-black dark:hover:text-white transition duration-300"
          >
            <img
              src="/assets/right-arrow-bold.png"
              alt="Back"
              className="w-3 rotate-180 dark:invert opacity-70"
            />
            <span className="font-medium text-sm">Back to Projects</span>
          </Link>
        </div>
        {/* ------------------------------- */}
        {/* Header */}
        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
          Generative AI / Multi-Agent Systems
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 font-Ovo">
          AI-Driven ESG Data Management & Automated Reporting
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-4xl">
          An intelligent framework leveraging <strong>Multi-Agent AI</strong> to
          automate the lifecycle of ESG reporting. By integrating Large Language
          Models (LLMs) like GPT-4o and Gemini, the system automates data
          collection, narrative generation, and compliance auditing against GRI
          standards.
        </p>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          {/* LEFT COLUMN: Deep Dive Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* 1. High-Level Framework */}
            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Framework Overview
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The solution addresses the challenge of heterogeneous ESG data
                by establishing a standardized pipeline from data acquisition to
                validated reporting.
              </p>
              <div className="w-full bg-white dark:bg-white/5 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 p-2 shadow-sm">
                <img
                  src="/assets/pipeline.png"
                  alt="ESG Data Acquisition Pipeline"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  The standardized workflow: Data Acquisition → Preprocessing →
                  Generation → Validation.
                </p>
              </div>
            </section>

            {/* 2. Multi-Agent Architecture */}
            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                The Multi-Agent Engine
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                At the core is a <strong>Multi-Agent System (MAS)</strong> where
                specialized AI agents collaborate to ensure accuracy and reduce
                hallucination.
              </p>

              <div className="w-full bg-green-50 dark:bg-green-900/10 rounded-xl overflow-hidden border border-green-100 dark:border-green-900/30 p-2 mb-6">
                <img
                  src="/assets/ai_agent_for_esg.png"
                  alt="Multi-Agent Workflow"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg dark:border-white/20">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-1">
                    🤖 Generation Agent
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Transforms raw structured data into narrative disclosures
                    aligned with GRI indicators using <strong>GPT-4o</strong>.
                  </p>
                </div>
                <div className="p-4 border rounded-lg dark:border-white/20">
                  <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-1">
                    ⚖️ Validation Agent
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Acts as an auditor to check factual accuracy and stylistic
                    coherence. Triggers refinement if quality is low.
                  </p>
                </div>
                <div className="p-4 border rounded-lg dark:border-white/20">
                  <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-1">
                    🔄 Refinement Agent
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Executes feedback loops to iteratively improve narrative
                    quality based on validator outputs.
                  </p>
                </div>
                <div className="p-4 border rounded-lg dark:border-white/20">
                  <h4 className="font-bold text-orange-700 dark:text-orange-400 mb-1">
                    🏆 Scoring Agent
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Benchmarks final outputs against predefined criteria using{" "}
                    <strong>Gemini 2.5 Pro</strong> for cross-model
                    verification.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Core Technologies */}
            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Core Technologies
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-xl">🧠</span>
                  <div>
                    <strong>LLM Orchestration:</strong> Leveraging
                    state-of-the-art models (GPT-4o for generation, Gemini 2.5
                    Pro for auditing) to mitigate single-model bias.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-xl">📈</span>
                  <div>
                    <strong>Time Series Forecasting (LSTM):</strong> Used in the
                    analytical layer to predict future carbon emission trends
                    and resource consumption.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-xl">🎮</span>
                  <div>
                    <strong>Reinforcement Learning (RL):</strong> Simulates
                    "what-if" strategic scenarios to optimize sustainability
                    decisions before implementation.
                  </div>
                </li>
              </ul>
            </section>

            {/* 4. Quantitative Results */}
            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Validation Results
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                The system was evaluated by a panel of 5 ESG experts and an
                independent AI Auditor across 300 generated narrative segments.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="p-4 bg-gray-100 dark:bg-white/5 rounded-lg text-center">
                  <div className="text-3xl font-bold text-gray-800 dark:text-white">
                    4.2<span className="text-sm text-gray-500">/5</span>
                  </div>
                  <div className="text-xs text-gray-500 uppercase mt-1">
                    Accuracy Score
                  </div>
                </div>
                <div className="p-4 bg-gray-100 dark:bg-white/5 rounded-lg text-center">
                  <div className="text-3xl font-bold text-gray-800 dark:text-white">
                    0.81
                  </div>
                  <div className="text-xs text-gray-500 uppercase mt-1">
                    Human-AI Correlation
                  </div>
                </div>
                <div className="p-4 bg-gray-100 dark:bg-white/5 rounded-lg text-center">
                  <div className="text-3xl font-bold text-gray-800 dark:text-white">
                    4.0<span className="text-sm text-gray-500">/5</span>
                  </div>
                  <div className="text-xs text-gray-500 uppercase mt-1">
                    GRI Compliance
                  </div>
                </div>
                <div className="p-4 bg-gray-100 dark:bg-white/5 rounded-lg text-center">
                  <div className="text-3xl font-bold text-gray-800 dark:text-white">
                    ~10s
                  </div>
                  <div className="text-xs text-gray-500 uppercase mt-1">
                    Processing Time
                  </div>
                </div>
              </div>

              {/* Detailed Table */}
              <div className="border border-gray-200 dark:border-white/20 rounded-xl overflow-hidden">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200">
                    <tr>
                      <th className="px-6 py-3 font-semibold">
                        Evaluation Metric
                      </th>
                      <th className="px-6 py-3 font-semibold">Expert Score</th>
                      <th className="px-6 py-3 font-semibold">
                        AI Auditor Score
                      </th>
                      <th className="px-6 py-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-white/10 bg-white dark:bg-transparent">
                    <tr>
                      <td className="px-6 py-3 font-medium">
                        Factual Accuracy
                      </td>
                      <td className="px-6 py-3 text-green-600 font-bold">
                        4.2
                      </td>
                      <td className="px-6 py-3">4.1</td>
                      <td className="px-6 py-3 text-green-600">
                        High Fidelity
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 font-medium">
                        Narrative Clarity
                      </td>
                      <td className="px-6 py-3 text-green-600 font-bold">
                        4.1
                      </td>
                      <td className="px-6 py-3">4.0</td>
                      <td className="px-6 py-3">Proficient</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 font-medium">GRI Compliance</td>
                      <td className="px-6 py-3 text-green-600 font-bold">
                        4.0
                      </td>
                      <td className="px-6 py-3">4.0</td>
                      <td className="px-6 py-3">Compliant</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-white/5">
                      <td className="px-6 py-3 font-medium italic">
                        Composite Score (CQS)
                      </td>
                      <td className="px-6 py-3 font-bold" colSpan="3">
                        4.1 (Normalized: 0.78)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: Sidebar Info */}
          <div className="h-max sticky top-24">
            <div className="border border-gray-200 dark:border-white/20 p-6 rounded-xl shadow-sm bg-white dark:bg-darkHover">
              <h4 className="font-bold text-lg mb-6 border-b pb-2">
                Project At A Glance
              </h4>
              <div className="space-y-5 text-sm">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                    Focus
                  </p>
                  <p className="font-semibold text-base">
                    Prompt Engineering & Automation
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                    Key Models
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                      GPT-4o
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                      Gemini 2.5 Pro
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                      LSTM
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                      RL
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                    Impact
                  </p>
                  <p className="font-medium text-gray-700 dark:text-gray-300">
                    Reduced reporting time by <strong>40-60%</strong> while
                    maintaining high compliance standards.
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                    Publications
                  </p>
                  <ul className="space-y-2">
                    <li className="font-semibold">
                      Sci. Tech. Dev. J. - Eco. Law Manag. 2025
                    </li>
                    <li className="font-semibold text-gray-600 dark:text-gray-400">
                      Asia Pacific Management Review (Submitted)
                    </li>
                  </ul>
                </div>

                <a
                  href="https://doi.org/10.32508/stdjelm.v9i1.1530"
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full py-3 text-center bg-black text-white rounded-lg hover:bg-gray-800 transition mt-4 group"
                >
                  <span>Read Research</span>
                  <img
                    src="/assets/right-arrow-bold.png"
                    alt=""
                    className="w-3 invert group-hover:translate-x-1 duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
