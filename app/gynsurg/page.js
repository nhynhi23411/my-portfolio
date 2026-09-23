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
          GynSurg: Instrument & Anatomy Segmentation for Gynecologic
          Laparoscopy
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-4xl">
          A segmentation pipeline for laparoscopic gynecologic surgery video
          that identifies surgical instruments and anatomical structures
          frame-by-frame, then scores each prediction with an adaptive
          multi-input fuzzy reliability layer instead of trusting a single
          confidence score.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Dataset Composition
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Training data combines the public CholecSeg8k benchmark with a
                custom GynSurg corpus of instrument and anatomy frames pulled
                from real laparoscopic video, grouped by source video to
                prevent leakage across splits.
              </p>
              <div className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 dark:bg-white/5 p-2">
                <img
                  src="/assets/gynsurg_dataset.png"
                  alt="Dataset composition"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  Figure 1: Instrument and anatomy frame composition across
                  data sources.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Model Registry & Class Distribution
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Four segmentation backbones — a YOLO-based detector, a
                DeepLabV3+ decoder, and two DINO-backed encoders — are trained
                under a shared interface so their outputs can be compared
                directly against class frequency and video-level splits.
              </p>
              <div className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 dark:bg-white/5 p-2">
                <img
                  src="/assets/gynsurg_counts.png"
                  alt="Instrument and anatomy class counts"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  Figure 2: Per-class instrument and anatomy frame counts used
                  for class-weighted loss.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Adaptive Fuzzy Reliability Layer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A single softmax score does not tell a surgeon whether a mask
                is trustworthy. The reliability layer fuses multiple inputs —
                per-model confidence, inter-model agreement, and temporal
                consistency across adjacent frames — into a fuzzy reasoning
                step that flags low-reliability predictions instead of
                silently accepting them.
              </p>
              <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-900/30 p-5 rounded-xl">
                <h5 className="font-bold text-orange-800 dark:text-orange-300 mb-2">
                  Why fuzzy, not thresholding
                </h5>
                <ul className="list-disc ml-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>
                    <strong>Multi-input:</strong> combines several imperfect
                    reliability cues rather than a single hard threshold.
                  </li>
                  <li>
                    <strong>Adaptive:</strong> the fusion weights adjust to the
                    class and to the segmentation backbone in use.
                  </li>
                  <li>
                    <strong>Actionable:</strong> low-reliability frames are
                    surfaced for review rather than passed through silently.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Training Protocol
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Frames are grouped by source video before K-fold splitting so
                no video appears in both train and validation. Training uses
                mixed-precision (AMP), cosine warm-restart scheduling,
                class-weighted combined loss (cross-entropy + Dice + focal),
                and early stopping on validation mIoU, run on Modal's GPU
                cloud.
              </p>
              <div className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 dark:bg-white/5 p-2">
                <img
                  src="/assets/gynsurg_timeline.png"
                  alt="Timeline of surgical actions"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  Figure 3: Timeline visualization of annotated surgical
                  actions across a procedure.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Visual Results
              </h3>
              <div className="w-full bg-black rounded-xl overflow-hidden border border-gray-200">
                <img
                  src="/assets/gynsurg_visual.png"
                  alt="Instrument and anatomy segmentation overlay"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Across the four backbones, the goal is not the single largest
                model: lightweight architectures reach mIoU close to the
                heaviest baseline while running substantially faster and with
                a much smaller footprint, which matters for eventual
                in-theatre deployment.
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
                    {["Python", "PyTorch", "YOLOv8", "DeepLabV3+", "DINO", "Modal GPU Cloud"].map(
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
                  <p className="font-semibold">Ongoing Research Project</p>
                  <p className="text-xs text-gray-500 italic">
                    Instrument & anatomy segmentation, GynSurg lab
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
