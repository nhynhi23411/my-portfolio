"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function GynSurgPage() {
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
          Computer Vision / Biomedical
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 font-Ovo">
          Adaptive Multi-Input Fuzzy Reliability Reasoning for Trustworthy
          Surgical Instrument Segmentation
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-4xl">
          A segmentation model can output a mask and a confidence score, but
          softmax confidence alone is not necessarily calibrated. This project
          adds a post-hoc adaptive fuzzy reliability layer on top of a fixed,
          already-trained DeepLabV3+/ResNet-50 segmenter, converting four
          uncertainty cues into an interpretable error-risk score, without
          retraining or touching the segmentation network.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-3 italic">
          With Kim Ngan Ly and Assoc. Prof. Nguyen Quoc Khanh Le, AIBioMed
          Lab, Taipei Medical University.
        </p>

        <div className="w-full mt-8 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white">
          <img
            src="/assets/gynsurg_fig3_qualitative.png"
            alt="Held-out example: input frame, hard prediction, and adaptive Sugeno pixel-error risk"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Segmentation Pipeline
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The GynSurg release is audited, quality-controlled, and
                label-harmonized (13 instrument labels merged and filtered
                down to 7 foreground classes plus background), then split by
                video into four folds and trained with DeepLabV3+/ResNet-50.
                The out-of-fold hard masks and softmax probabilities from this
                stage feed the fuzzy reliability pipeline; the segmentation
                network is never revised afterward.
              </p>
              <div className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 dark:bg-white/5 p-2">
                <img
                  src="/assets/gynsurg_fig1_pipeline.png"
                  alt="Segmentation pipeline: dataset audit, 4-fold training, out-of-fold evaluation"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  Fig. 1. Dataset audit and label harmonization through
                  4-fold DeepLabV3+/ResNet-50 training to out-of-fold
                  evaluation.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Adaptive Multi-Input Fuzzy Reliability
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Four pixel-level cues, maximum softmax probability, predictive
                entropy, boundary disagreement, and predicted class-area
                context, are combined through Gaussian membership functions
                into a zero-order Sugeno fuzzy system (81 rules from 4 inputs
                x 3 linguistic states). The system is trained on calibration
                videos only, with every held-out test video strictly excluded
                from fitting, and outputs a pixel-error risk score that maps
                to Accept / Review / Abstain.
              </p>
              <div className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 dark:bg-white/5 p-2">
                <img
                  src="/assets/gynsurg_fig2_fuzzy.png"
                  alt="Implementation-faithful adaptive fuzzy reliability pipeline"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  Fig. 2. Calibration-only fitting of Gaussian memberships,
                  Sugeno consequents, sparse-rule selection, and action
                  thresholds; held-out videos are reserved for evaluation.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Held-Out Results
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Four-fold video-level cross-validation on 4,992 GynSurg
                frames gives a mean foreground mIoU of 0.6627 and foreground
                Dice of 0.7893, with model-only throughput of 99.6 FPS on an
                NVIDIA T4 (126.5 FPS on an A100). Against a fixed 1&minus;p_max
                confidence baseline, the adaptive fuzzy model improves
                held-out reliability estimation on every metric:
              </p>
              <div className="border border-gray-200 dark:border-white/20 rounded-xl overflow-hidden">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200">
                    <tr>
                      <th className="px-6 py-3 font-semibold">Method</th>
                      <th className="px-6 py-3 font-semibold">AUROC ↑</th>
                      <th className="px-6 py-3 font-semibold">AUPRC ↑</th>
                      <th className="px-6 py-3 font-semibold">AURC ↓</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-white/10 bg-white dark:bg-transparent">
                    <tr>
                      <td className="px-6 py-3 font-medium text-gray-700 dark:text-gray-200">
                        Fixed p_max
                      </td>
                      <td className="px-6 py-3">0.8218</td>
                      <td className="px-6 py-3">0.6169</td>
                      <td className="px-6 py-3">0.1155</td>
                    </tr>
                    <tr className="bg-green-50 dark:bg-green-900/10">
                      <td className="px-6 py-3 font-medium text-green-800 dark:text-green-400">
                        Adaptive 81-rule
                      </td>
                      <td className="px-6 py-3 font-bold text-green-700 dark:text-green-300">
                        0.8599
                      </td>
                      <td className="px-6 py-3 font-bold text-green-700 dark:text-green-300">
                        0.7346
                      </td>
                      <td className="px-6 py-3 font-bold text-green-700 dark:text-green-300">
                        0.0969
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 text-gray-700 dark:text-gray-200">
                        Boundary-specific
                      </td>
                      <td className="px-6 py-3">0.8567</td>
                      <td className="px-6 py-3">0.7325</td>
                      <td className="px-6 py-3">0.0996</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 text-gray-700 dark:text-gray-200">
                        Sparse 15-rule
                      </td>
                      <td className="px-6 py-3">0.8600</td>
                      <td className="px-6 py-3">0.7349</td>
                      <td className="px-6 py-3">0.0969</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm">
                The sparse 15-rule approximation keeps essentially the same
                reliability (0.8600 AUROC) as the full 81-rule system while
                being cheaper to run, which matters for real-time use. In a
                separate single-seed ablation, learning from p_max alone
                actually underperformed the fixed baseline (0.8115 vs.
                0.8215 AUROC); the measurable gain only appeared once
                entropy, boundary disagreement, and class-area context were
                added (0.8608 AUROC), confirming that it is the four-cue
                combination, not just learning, that helps.
              </p>
              <div className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 dark:bg-white/5 p-2 mt-4">
                <img
                  src="/assets/gynsurg_fuzzy_ablation.png"
                  alt="Fixed vs single-input vs four-input adaptive fuzzy AUROC by fold"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  Single-seed ablation: fixed p_max vs. single-input adaptive
                  vs. four-input adaptive fuzzy, by fold.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Risk-Coverage and Sparse-Rule Efficiency
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Sorting predictions by fuzzy reliability and only keeping the
                most reliable half cuts retained pixel error to roughly 0.07,
                versus about 0.29 if every prediction is kept. The sparse
                15-rule system is also consistently faster than the full
                81-rule system in paired A100 runs (3.26 vs. 4.54 ms/map and
                5.22 vs. 6.72 ms/map), though two paired runs are not enough
                for a general hardware speed claim.
              </p>
              <div className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 dark:bg-white/5 p-2">
                <img
                  src="/assets/gynsurg_fig4_risk_latency.png"
                  alt="Risk-coverage curve and run-specific fuzzy-map latency"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  Fig. 4. (a) Risk-coverage curve with bootstrap bands. (b)
                  Run-specific latency, 81-rule vs. sparse 15-rule.
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm">
                Scope note, directly from the paper: the fuzzy layer is
                evaluated purely as an error-ranking mechanism. It does not
                change hard masks, does not improve mIoU or Dice, and the
                Accept/Review/Abstain states are retrospective technical
                labels, not validated clinical decisions.
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
                  <p className="font-semibold text-base">AI Researcher</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "PyTorch", "DeepLabV3+/ResNet-50", "Sugeno Fuzzy Inference"].map(
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
                    Dataset
                  </p>
                  <p className="font-semibold">GynSurg (4,992 frames)</p>
                  <p className="text-xs text-gray-500 italic">
                    10 laparoscopic hysterectomy videos
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                    Status
                  </p>
                  <p className="font-semibold">
                    Accepted &mdash; Oral Presentation
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    IEEE iFUZZY &amp; Fuzzy 2026, Taichung, Taiwan (Nov
                    20&ndash;22, 2026)
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
