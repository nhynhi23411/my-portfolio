"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function DrugReliabilityPage() {
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
          Machine Learning / Reliability
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 font-Ovo">
          B2BNet: Reliability-Aware Transfer for Cross-Scale Drug Response
          Prediction
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-4xl">
          External biological evidence can help a drug-response model — or
          quietly hurt it on an unseen compound. This project builds a
          reliability-audit framework that separates whether evidence is{" "}
          <em>available</em> from whether it is <em>safe to use</em>, and
          adds a support rule that suppresses it when it isn&apos;t.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Architecture
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A frozen BindingDB-pretrained drug–protein interaction encoder
                produces pair representations that are aggregated into
                thirteen pathway-level evidence slots. This drug-conditioned
                signal is fed to a cell-line response model alongside
                gene-expression features, with the evidence channel gated
                independently of the response head.
              </p>
              <div className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 dark:bg-white/5 p-2">
                <img
                  src="/assets/b2b_pipeline.png"
                  alt="B2BNet pipeline overview"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  Figure 1: Frozen evidence encoder → pathway aggregation →
                  gated fusion into the response model.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Selective Evidence Transfer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Only 8 of 22 evaluated drugs have conservative pathway
                support. Rather than fusing evidence unconditionally, a
                training-support rule suppresses the auxiliary channel when a
                test drug&apos;s pathway coverage exceeds the maximum seen
                among supported training drugs — an exact zero in the forward
                pass, not an approximation.
              </p>
              <div className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 dark:bg-white/5 p-2">
                <img
                  src="/assets/b2b_scaffold_mechanism.png"
                  alt="Scaffold-disjoint reliability mechanism"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  Figure 2: Support-based suppression mechanism under
                  scaffold-disjoint evaluation.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Evaluation Protocol
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600 whitespace-nowrap">
                    Held-out-drug CV:
                  </span>
                  <span>
                    matched training seeds compare evidence-aware vs.
                    matched no-evidence predictors on identical test rows.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600 whitespace-nowrap">
                    Scaffold-disjoint CV:
                  </span>
                  <span>
                    Bemis–Murcko scaffold splits stress-test generalization
                    to structurally novel compounds.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600 whitespace-nowrap">
                    Inference-only corruption:
                  </span>
                  <span>
                    fixed-checkpoint evidence corruption isolates the
                    channel&apos;s contribution from backbone training
                    effects.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Key Findings
              </h3>
              <div className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 dark:bg-white/5 p-2 mb-6">
                <img
                  src="/assets/b2b_alpha_utility.png"
                  alt="Gate confidence vs. realized utility"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  Figure 3: Gate confidence does not track realized
                  drug-level utility.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-white/20 rounded-xl overflow-hidden">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200">
                    <tr>
                      <th className="px-6 py-3 font-semibold">Setting</th>
                      <th className="px-6 py-3 font-semibold">Observation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-white/10 bg-white dark:bg-transparent">
                    <tr>
                      <td className="px-6 py-3 font-medium text-gray-700 dark:text-gray-200">
                        Generic fusion
                      </td>
                      <td className="px-6 py-3">
                        Can produce large drug-specific losses (negative
                        transfer).
                      </td>
                    </tr>
                    <tr className="bg-green-50 dark:bg-green-900/10">
                      <td className="px-6 py-3 font-medium text-green-800 dark:text-green-400">
                        Support-based abstention
                      </td>
                      <td className="px-6 py-3 text-green-700 dark:text-green-300">
                        Reduces the most severe observed losses (matched
                        3-seed comparison).
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 font-medium text-gray-700 dark:text-gray-200">
                        8-seed scaffold extension
                      </td>
                      <td className="px-6 py-3">
                        Smaller, more uncertain mean benefit and a worse
                        observed minimum — sensitive to training randomness.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 font-medium text-gray-700 dark:text-gray-200">
                        Partial evidence corruption
                      </td>
                      <td className="px-6 py-3">
                        Can reactivate transfer on an initially rejected
                        drug.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm">
                Bottom line: evidence availability, training-side support,
                and realized predictive utility are distinct quantities and
                should be reported separately under drug-level shift — a
                deliberately bounded, mechanism-level conclusion rather than
                a claim of a universal fusion architecture.
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
                  <p className="font-semibold text-base">ML Researcher</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "PyTorch", "BindingDB", "Scaffold-disjoint CV", "Bootstrap Testing"].map(
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
                  <p className="font-semibold">Manuscript in Preparation</p>
                  <p className="text-xs text-gray-500 italic">
                    ICLR 2027 submission cycle
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
