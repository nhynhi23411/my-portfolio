"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SurveillancePage() {
  return (
    <>
      <Navbar />
      <div className="w-full px-[5%] md:px-[12%] py-20 pt-32">
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

        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
          Time Series / Public Health
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 font-Ovo">
          Reporting-Aware Forecasting for Disease Surveillance Under
          Structural Missingness
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-4xl">
          Weekly disease bulletins often omit a condition because of a
          reporting or ranking process — not because the true count is zero.
          This project builds a reporting-aware forecasting protocol for a
          district-week-condition panel drawn from 164 weekly surveillance
          bulletins in Khyber Pakhtunkhwa, Pakistan, and shows what
          zero-filling silently breaks.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Four Observation States
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The panel contains 115,456 cells, including 43,384
                structurally unreported cells (condition not in the bulletin)
                and 12,248 district- or cell-level non-reporting cells. The
                protocol keeps these separate from genuine observed zeros
                instead of collapsing everything to a single missing value.
              </p>
              <div className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 dark:bg-white/5 p-2">
                <img
                  src="/assets/surv_pipeline.png"
                  alt="Reporting-aware panel construction pipeline"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  Figure 1: Panel construction separating structural absence,
                  non-reporting, and observed counts.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Missingness Diagnostics
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A predictive audit shows the missingness is MNAR-like rather
                than random: a classifier using only recent reporting volume
                reaches AUROC 0.805, and adding condition fixed effects
                raises this to 0.925 — the absence pattern itself carries
                information that a model can exploit or be misled by.
              </p>
              <div className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 dark:bg-white/5 p-2">
                <img
                  src="/assets/surv_timeline.png"
                  alt="Reporting timeline"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  Figure 2: Rotating bulletin reporting timeline by district
                  and condition.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Forecasting & Evaluation Protocol
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Last-value, seasonal, and moving-average baselines are
                compared against count models and tree-based models under
                chronological rolling-origin evaluation, with the final 20
                origins held out as a locked test block — no future
                information leaks into any fold.
              </p>
              <div className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 dark:bg-white/5 p-2">
                <img
                  src="/assets/surv_paired_errors.png"
                  alt="Paired forecast error comparison"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  Figure 3: Paired forecast-error comparison, zero-fill vs.
                  reporting-aware reconstruction.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Stress-Testing Under Injected Missingness
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A multi-mechanism stress test injects additional missingness
                up to 80% of the historical record. The advantage of
                reporting-aware preprocessing grows with missingness,
                reaching 8.51–12.40 MAE points at 80% missingness and
                forecast horizon four — while the effect is small for
                conditions that were already fully reported.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                    <img
                      src="/assets/surv_propensity.png"
                      alt="Propensity gain by district"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="text-center text-xs text-gray-500">
                    District-level heterogeneity in reporting-aware gain.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                    <img
                      src="/assets/surv_hazard.png"
                      alt="Hazard curve"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="text-center text-xs text-gray-500">
                    Hazard-curve view of non-reporting risk over time.
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm">
                The practical conclusion is narrow but load-bearing: absence
                in a surveillance table should be modeled as part of the
                observation process, not silently interpreted as zero
                incidence.
              </p>
            </section>
          </div>

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
                  <p className="font-semibold text-base">Data Scientist</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "pandas", "Tree-based Models", "Rolling-Origin CV", "LaTeX"].map(
                      (t) => (
                        <span
                          key={t}
                          className="px-2 py-1 bg-gray-100 dark:bg-white/10 rounded text-xs"
                        >
                          {t}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                    Status
                  </p>
                  <p className="font-semibold">In Preparation for Submission</p>
                  <p className="text-xs text-gray-500 italic">
                    ISC 2026 (Springer LNCS)
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
