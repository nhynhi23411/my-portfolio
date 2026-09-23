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
          GynSurg: A Post-Hoc Fuzzy Reliability Layer for Laparoscopic
          Instrument Segmentation
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-4xl">
          A segmentation model can output a mask and a confidence score, but a
          single softmax number does not tell a surgeon whether that mask is
          trustworthy. This project adds a fuzzy reasoning layer on top of a
          frozen, already-trained segmentation model that scores every
          prediction's reliability, without retraining or touching the
          underlying model.
        </p>

        <div className="w-full mt-8 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 relative">
          <img
            src="/assets/gynsurg_cover_overlay.png"
            alt="Real-time instrument segmentation overlay on laparoscopic video"
            className="w-full h-auto object-cover"
          />
          <p className="text-center text-xs text-gray-500 mt-2 italic">
            Live inference overlay from the trained segmentation model on a
            real laparoscopic frame (grasper and sealer-divider classes).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Pipeline Overview
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A laparoscopic frame goes through a frozen DeepLabV3+
                (ResNet-50) segmentation model to produce a softmax output and
                a hard mask. Instead of stopping there, that same output is
                also passed through a post-hoc fuzzy layer that outputs a
                Low / Medium / High reliability membership and a warning
                overlay, with zero changes to the trained model itself.
              </p>
              <div className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 dark:bg-white/5 p-2">
                <img
                  src="/assets/gynsurg_fuzzy_pipeline.png"
                  alt="Frozen segmentation model plus post-hoc fuzzy reliability layer"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  Figure 1: The trained model stays frozen; the fuzzy layer is
                  entirely post-hoc.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Adaptive Multi-Input Fuzzy Inference
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The reliability score is not a single threshold on
                confidence. Four signals extracted from the frozen model's
                own output, predicted object size, boundary sharpness,
                prediction entropy, and max softmax probability, are fed
                through learned Gaussian membership functions into an
                81-rule Sugeno fuzzy inference system that estimates the
                error risk of that specific prediction.
              </p>
              <div className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 dark:bg-white/5 p-2">
                <img
                  src="/assets/gynsurg_fuzzy_architecture.png"
                  alt="Adaptive multi-input fuzzy inference architecture"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  Figure 2: Four prediction-time signals feed an 81-rule
                  Sugeno system that outputs an error-risk estimate.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Why Multi-Input Beats a Single Confidence Score
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To justify the extra complexity, the multi-input fuzzy system
                is compared against two simpler baselines on the same 4,992
                held-out frames: a fixed threshold on the raw softmax
                max-probability, and an adaptive system using only that one
                signal. Combining all four signals raises mean error-detection
                AUROC to 0.861, against 0.822 for the fixed threshold and
                0.811 for the single-input adaptive version, consistently
                across all four folds.
              </p>
              <div className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 dark:bg-white/5 p-2">
                <img
                  src="/assets/gynsurg_fuzzy_ablation.png"
                  alt="Fixed vs adaptive single-input vs adaptive multi-input error-detection AUROC"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  Figure 3: Error-detection AUROC by fold, fixed threshold vs.
                  single-input vs. multi-input fuzzy reliability.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Segmentation Backbone Accuracy
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Before adding the reliability layer, several segmentation
                backbones were benchmarked under 4-fold cross-validation.
                DeepLabV3+ (ResNet-50) was the strongest at 0.70 mean mIoU;
                lighter backbones (SegFormer-B0, DeepLabV3+ EfficientNet-B0,
                U-Net MobileNetV3) landed close behind at 0.67-0.68, within
                the overlapping error bars shown below.
              </p>
              <div className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 dark:bg-white/5 p-2">
                <img
                  src="/assets/gynsurg_model_accuracy.png"
                  alt="Four-fold mean mIoU across segmentation backbones"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  Figure 4: Four-fold mean mIoU across four candidate
                  backbones, with a 0.75 project target line.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                What the Reliability Score Buys You
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The fuzzy score is only useful if it actually tracks real
                error. Sorting predictions by their fuzzy reliability score
                and looking at the pixel error of the frames you would keep
                at each retention rate shows a clean risk-coverage
                relationship: keeping only the top 50% most reliable
                predictions cuts observed pixel error to 6.8%, versus 28.9%
                if every prediction is accepted.
              </p>
              <div className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 dark:bg-white/5 p-2">
                <img
                  src="/assets/gynsurg_risk_coverage.png"
                  alt="Risk-coverage curve for the adaptive fuzzy selection"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  Figure 5: Observed pixel error rises smoothly as more
                  (lower-reliability) predictions are retained.
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm">
                In other words, the fuzzy layer's reliability score is a
                usable selective-prediction signal: a surgeon or downstream
                system can choose how much coverage to trade for how much
                error, instead of accepting every mask at face value.
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
                    {["Python", "PyTorch", "DeepLabV3+", "Fuzzy Inference (Sugeno)", "Modal GPU Cloud"].map(
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
                    Instrument segmentation reliability, GynSurg lab
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
