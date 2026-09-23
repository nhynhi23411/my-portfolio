"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function VlmRoutingPage() {
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
          Vision-Language Models / Medical AI
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 font-Ovo">
          Look Again or Answer Now? Evidence Routing for VLMs in Medical VQA
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-4xl">
          Should a vision-language model crop and re-examine an image before
          answering, or answer from the global view immediately? This
          project builds a paired-counterfactual pipeline to test that
          question rigorously — and reports an honest, controlled negative
          result instead of overclaiming a general-purpose router.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Paired-Counterfactual Pipeline
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Every case shares one global answer across all routing
                policies, so a crop-and-reacquire decision can be scored
                against a true counterfactual rather than a re-run of the
                model. The pipeline uses four quadrant-crop actions, an
                immutable SQLite result cache, and revision-pinned frozen VLM
                checkpoints so results stay reproducible run to run.
              </p>
              <div className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 dark:bg-white/5 p-2">
                <img
                  src="/assets/vlm_primary_transfer.png"
                  alt="Primary source transfer of the routing policy"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  Figure 1: Transfer of the crop-acquisition policy across
                  models and datasets.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Models & Benchmarks
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600 whitespace-nowrap">
                    Models:
                  </span>
                  <span>
                    Qwen2.5-VL-3B/7B, MedGemma-4B, and AdaptVision-7B,
                    evaluated at matched capacity controls.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600 whitespace-nowrap">
                    Benchmarks:
                  </span>
                  <span>
                    a 514-question in-house cohort split by image group, 256
                    independent PathVQA image groups, SLAKE lesion-mask
                    sensitivity, and 2,996 prospective 3MDBench cases across
                    34 diagnoses.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600 whitespace-nowrap">
                    Scale:
                  </span>
                  <span>
                    over 10,000 model responses collected for the primary
                    state matrix alone.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Cost–Accuracy Trade-off
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Acquiring extra crops has a compute cost. Plotting accuracy
                against acquisition cost per model shows that a crop-based
                policy can help in-distribution but the benefit is model- and
                dataset-dependent, not a fixed win.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                    <img
                      src="/assets/vlm_qwen_cost_acc.png"
                      alt="Qwen2.5-VL cost vs accuracy"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="text-center text-xs text-gray-500">
                    Qwen2.5-VL: cost vs. accuracy under transfer.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                    <img
                      src="/assets/vlm_medgemma_cost_acc.png"
                      alt="MedGemma cost vs accuracy"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="text-center text-xs text-gray-500">
                    MedGemma-4B: cost vs. accuracy under transfer.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                A Controlled Negative Result
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                After locking the protocol, re-running the parser, and
                evaluating on cohorts never used to tune the policy, the
                earlier claim of a generally transferable router did not
                hold up. The honest finding is a corruption-risk reversal
                under distribution shift: cropping can help in one regime
                and increase risk in another, and the direction flips when
                the model, dataset, or task changes.
              </p>
              <div className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 dark:bg-white/5 p-2">
                <img
                  src="/assets/vlm_recall_shift.png"
                  alt="Per-class recall shift under distribution shift"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  Figure 2: Per-class recall shift exposing where the routing
                  policy stops transferring.
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm">
                The project treats this as the deliverable: a reproducible,
                machine-checked audit trail (18/18 tests passing, hash-locked
                manifests) that turns an overclaimed positive result into a
                precisely scoped negative one.
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
                  <p className="font-semibold text-base">Research Engineer</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Qwen2.5-VL", "MedGemma", "SQLite", "Modal Deploy"].map(
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
                  <p className="font-semibold">Ongoing Research — Working Paper</p>
                  <p className="text-xs text-gray-500 italic">
                    Project 3, multimodal evidence routing track
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
