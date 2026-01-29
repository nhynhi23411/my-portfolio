"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
export default function AfasPage() {
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
        <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
          Fintech / Explainable AI (XAI)
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 font-Ovo">
          AFAS: Beyond the Pitch Deck
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-4xl">
          The AI-Based Funding Assessment System (AFAS) redefines startup
          valuation by converting tabular financial data into visual "Investment
          Profiles". Utilizing a fine-tuned UNet++ and SHAP, AFAS predicts
          funding outcomes (Angel to Series-C) with interpretable reasoning.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          {/* LEFT COLUMN: Deep Dive Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* 1. System Pipeline */}
            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                System Architecture
              </h3>
              <div className="w-full bg-white dark:bg-white/5 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 p-2 shadow-sm">
                <img
                  src="/assets/AFAS.png"
                  alt="AFAS Pipeline"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  Figure 1: The AFAS Pipeline: From Market Screening (Prompting)
                  → Pixel-Wise Encoding → UNet++ Classification → SHAP
                  Explanation.
                </p>
              </div>
            </section>

            {/* 2. Core Innovation: Pixel-Wise Encoder */}
            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                The Innovation: Pixel-Wise Encoder
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Traditional financial models struggle with the high
                dimensionality of startup data. We proposed a novel encoding
                scheme that transforms discrete features (Funding Rounds,
                Participants, Amount) into a{" "}
                <strong>Visual Investment Map</strong> (RGB Image).
              </p>

              <div className="flex flex-col md:flex-row gap-6 items-center bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10">
                <div className="w-full md:w-1/2">
                  <img
                    src="/assets/pixel-code.png"
                    alt="Pixel Encoding"
                    className="w-full rounded-lg shadow-sm"
                  />
                  <p className="text-center text-xs text-gray-500 mt-2">
                    Evolution of investment profiles: (a) Series-A, (b)
                    Series-B, (c) Series-C.
                  </p>
                </div>
                <div className="w-full md:w-1/2 space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>• Semantic Grouping:</strong> Features are grouped
                    by similarity and weighted by impact.
                  </p>
                  <p>
                    <strong>• Visual Density:</strong> Early-stage startups have
                    simple color blocks (a). As they mature (Series-C), the
                    pixel density increases (c), representing complex financial
                    structures.
                  </p>
                  <p>
                    <strong>• Lagrange Interpolation:</strong> Used to smooth
                    data points into continuous color stripes.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Model & Explainability */}
            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Model & Explainability
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* UNet++ */}
                <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-900/30">
                  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
                    Why UNet++?
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Originally for medical image segmentation, UNet++ was
                    adapted here because its{" "}
                    <strong>Nested Skip Connections</strong> are excellent at
                    capturing both low-level features (early funding signals)
                    and high-level semantics (market maturity) from the encoded
                    images.
                  </p>
                </div>

                {/* SHAP */}
                <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-xl border border-purple-100 dark:border-purple-900/30">
                  <h4 className="font-bold text-purple-800 dark:text-purple-300 mb-2">
                    SHAP Interpretability
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    We reject "Black Box" predictions. AFAS uses{" "}
                    <strong>Shapley Additive Explanations</strong> to quantify{" "}
                    <em>why</em> a decision was made.
                    <br />
                    <br />
                    <em>Example:</em> "Prediction: Series B. Reason: Strong
                    leadership score (+0.4) and high market capitalization
                    (+0.3)."
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Experimental Results */}
            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Performance Metrics
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                The model was trained on 5,000+ unique investment profiles
                derived from 700,000 data points.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="p-4 bg-gray-100 dark:bg-white/5 rounded-lg text-center">
                  <div className="text-3xl font-bold text-gray-800 dark:text-white">
                    92%
                  </div>
                  <div className="text-xs text-gray-500 uppercase mt-1">
                    Val. Accuracy
                  </div>
                </div>
                <div className="p-4 bg-gray-100 dark:bg-white/5 rounded-lg text-center">
                  <div className="text-3xl font-bold text-gray-800 dark:text-white">
                    &lt;10s
                  </div>
                  <div className="text-xs text-gray-500 uppercase mt-1">
                    Inference Time
                  </div>
                </div>
                <div className="p-4 bg-gray-100 dark:bg-white/5 rounded-lg text-center">
                  <div className="text-3xl font-bold text-gray-800 dark:text-white">
                    0.30
                  </div>
                  <div className="text-xs text-gray-500 uppercase mt-1">
                    Validation Loss
                  </div>
                </div>
                <div className="p-4 bg-gray-100 dark:bg-white/5 rounded-lg text-center">
                  <div className="text-3xl font-bold text-gray-800 dark:text-white">
                    5k+
                  </div>
                  <div className="text-xs text-gray-500 uppercase mt-1">
                    Profiles
                  </div>
                </div>
              </div>

              {/* Classification Detail Table */}
              <div className="border border-gray-200 dark:border-white/20 rounded-xl overflow-hidden">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200">
                    <tr>
                      <th className="px-6 py-3 font-semibold">Funding Stage</th>
                      <th className="px-6 py-3 font-semibold">
                        Correct Predictions
                      </th>
                      <th className="px-6 py-3 font-semibold">
                        Accuracy Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-white/10 bg-white dark:bg-transparent">
                    <tr>
                      <td className="px-6 py-3 font-medium">Series C</td>
                      <td className="px-6 py-3 text-green-600 font-bold">
                        121 / 127
                      </td>
                      <td className="px-6 py-3 text-gray-500">
                        Highest precision due to rich data density.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 font-medium">Series B</td>
                      <td className="px-6 py-3 text-green-600 font-bold">
                        46 / 47
                      </td>
                      <td className="px-6 py-3 text-gray-500">
                        Very low misclassification rate.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 font-medium">Series A</td>
                      <td className="px-6 py-3 text-green-600 font-bold">
                        33 / 34
                      </td>
                      <td className="px-6 py-3 text-gray-500">
                        Robust identification of growth phase.
                      </td>
                    </tr>
                    <tr className="bg-yellow-50 dark:bg-yellow-900/10">
                      <td className="px-6 py-3 font-medium text-yellow-800 dark:text-yellow-400">
                        Angel / Seed
                      </td>
                      <td className="px-6 py-3 font-bold text-yellow-700">
                        14 / 19
                      </td>
                      <td className="px-6 py-3 text-gray-500">
                        Minor confusion due to sparse data (limitation).
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
                    Role
                  </p>
                  <p className="font-semibold text-base">Research Associate</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                    Core Tech
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">
                      UNet++
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                      SHAP (XAI)
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                      PyTorch
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                      LLM Prompting
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                    Key Contribution
                  </p>
                  <p className="font-medium text-gray-700 dark:text-gray-300">
                    Developed the <strong>Pixel-Wise Encoder</strong> algorithm
                    to visualize financial data.
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                    Publication
                  </p>
                  <p className="font-semibold">
                    From Angel to Series-C: Assessing a Start-Up's Funding
                    Opportunities
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    Dec 2025 • Vol 16(1)
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE12293033"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 text-center bg-black text-white rounded-lg hover:bg-gray-800 transition group"
                    title="Read Full Manuscript on DBpia"
                  >
                    <span className="font-medium">Read Manuscript</span>
                    <img
                      src="/assets/right-arrow-bold.png"
                      alt=""
                      className="w-3 invert group-hover:translate-x-1 duration-300"
                    />
                  </a>
                  <p className="text-[10px] text-center text-gray-400 mt-2">
                    * Accepted for publication (Dec 2025)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
