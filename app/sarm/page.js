"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
export default function SarmPage() {
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
        {/* Header Section */}
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
          Computer Vision / Biomedical
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 font-Ovo">
          SARM: Assessing Sperm Motility Through Multi-Modal Correlation
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-4xl">
          A comprehensive AI system designed to semi-automatically annotate
          sperm cells and evaluate their motility using a three-fold mechanism.
          The system adheres to WHO standards by integrating spatial aggregation
          (Heatmap) and temporal information (Trajectory).
        </p>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          {/* LEFT COLUMN: Detailed Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* 1. System Pipeline */}
            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                System Architecture
              </h3>
              <div className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 dark:bg-white/5 p-2">
                <img
                  src="/assets/pipeline1.png"
                  alt="SARM System Pipeline"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  Figure 1: The three-fold mechanism: Key-frame Extraction, YOLO
                  Labeling, and Multi-modal Presentation.
                </p>
              </div>
            </section>

            {/* 2. Algorithm Logic */}
            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Motility Calculation Logic
              </h3>

              {/* Coordinate Mapping */}
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">
                  1. Coordinate Mapping (Pixel to Micron)
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                  To analyze motility accurately, pixel coordinates (x, y) are
                  converted to the real-world Neubauer chamber frame (x_μm,
                  y_μm) based on microscope calibration.
                </p>
                <div className="bg-gray-100 dark:bg-darkHover p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <p>x_µm = x * micron_per_pixel * 1000 / frame_size</p>
                  <p>y_µm = y * micron_per_pixel * 1000 / frame_size</p>
                </div>
              </div>

              {/* Kinematic Parameters */}
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">
                  2. Kinematic Metrics
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                  The system calculates advanced kinematic parameters to
                  classify sperm movement patterns:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg dark:border-white/20">
                    <span className="font-bold text-blue-600">VCL</span>{" "}
                    <span className="text-xs text-gray-500">
                      (Curvilinear Velocity)
                    </span>
                    <p className="text-sm mt-1">
                      Speed along the actual curved path.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg dark:border-white/20">
                    <span className="font-bold text-blue-600">VSL</span>{" "}
                    <span className="text-xs text-gray-500">
                      (Straight Line Velocity)
                    </span>
                    <p className="text-sm mt-1">
                      Speed in a straight line from start to end.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg dark:border-white/20">
                    <span className="font-bold text-blue-600">VAP</span>{" "}
                    <span className="text-xs text-gray-500">
                      (Average Path Velocity)
                    </span>
                    <p className="text-sm mt-1">
                      Speed along a smoothed average path.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg dark:border-white/20">
                    <span className="font-bold text-blue-600">LIN</span>{" "}
                    <span className="text-xs text-gray-500">(Linearity)</span>
                    <p className="text-sm mt-1">
                      Ratio of VSL / VCL (Path straightness).
                    </p>
                  </div>
                </div>
              </div>

              {/* Classification Rules */}
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">
                  3. WHO Classification Criteria
                </h4>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex gap-2">
                    <span className="font-bold text-green-600 whitespace-nowrap">
                      Rapid Progressive:
                    </span>
                    <span>
                      VAP ≥ 25 µm/s, VCL ≥ 40 µm/s, VSL ≥ 20 µm/s, LIN ≥ 0.6.
                      Moves linearly or in large circles.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-lime-600 whitespace-nowrap">
                      Slow Progressive:
                    </span>
                    <span>
                      VAP ≥ 5 µm/s. Active forward movement but slower speed.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-yellow-600 whitespace-nowrap">
                      Non-Progressive:
                    </span>
                    <span>
                      VAP &gt; 0.5 µm/s. Tail motion present but net
                      displacement &lt; 5 µm/s.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-red-600 whitespace-nowrap">
                      Immotile:
                    </span>
                    <span>VAP ≤ 0.5 µm/s. No observable movement.</span>
                  </li>
                </ul>
              </div>

              {/* Python Implementation */}
              <div>
                <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">
                  4. Python Implementation
                </h4>
                <div className="bg-[#1e1e1e] text-gray-300 p-4 rounded-lg overflow-x-auto text-xs font-mono leading-relaxed">
                  <pre>
                    {`# Calculate categorized metrics
duration = (len(coords) - 1) / fps
vcl = np.sum(np.linalg.norm(np.diff(coords, axis=0), axis=1)) / duration
vsl = np.linalg.norm(coords[-1] - coords[0]) / duration

# Average Path (Smoothed)
avg_path = np.cumsum(coords, axis=0) / np.arange(1, len(coords) + 1).reshape(-1, 1)
vap = np.sum(np.linalg.norm(np.diff(avg_path, axis=0), axis=1)) / duration
lin = vsl / vcl if vcl > 0 else 0.0

# Classification Logic
if vap >= 25 and vcl >= 40 and vsl >= 20 and lin >= 0.6:
    motility_class = "Rapid Progressive"
elif vap >= 5:
    motility_class = "Slow Progressive"
elif vap > 0.5:
    motility_class = "Non Progressive"
else:
    motility_class = "Immotile"`}
                  </pre>
                </div>
              </div>
            </section>

            {/* 3. Field Drift Calibration */}
            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Field Drift Calibration
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Microscope stage movement (drift) can cause false positives in
                motility tracking. We implemented a calibration algorithm to
                detect and discard drifting frames.
              </p>
              <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-900/30 p-5 rounded-xl">
                <h5 className="font-bold text-orange-800 dark:text-orange-300 mb-2">
                  Drift Detection Condition
                </h5>
                <ul className="list-disc ml-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>
                    <strong>Consistency Check:</strong> At least 70% of tracks
                    move in the same direction (Dot Product &gt; 0.7).
                  </li>
                  <li>
                    <strong>Minimum Activity:</strong> At least 5 tracks exist
                    in a 30-frame window.
                  </li>
                  <li>
                    <strong>Action:</strong> If drift duration &gt; 50% of
                    video, the video is removed. Otherwise, drift frames are
                    split/removed.
                  </li>
                </ul>
              </div>
            </section>

            {/* 4. Visualization Results */}
            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Visual Results
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="aspect-square bg-black rounded-lg overflow-hidden border border-gray-200">
                    <img
                      src="/assets/1_Tracer.png"
                      alt="Sperm Trajectory Map"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-center text-sm font-semibold">
                    Trajectory Map
                  </p>
                  <p className="text-center text-xs text-gray-500">
                    Tracks individual movement paths.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="aspect-square bg-white rounded-lg overflow-hidden border border-gray-200">
                    <img
                      src="/assets/1_Heatmap.png"
                      alt="Sperm Motility Heatmap"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-center text-sm font-semibold">
                    Density Heatmap
                  </p>
                  <p className="text-center text-xs text-gray-500">
                    Highlights zones of frequent presence.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Quantitative Results (NEW SECTION) */}
            <section>
              <h3 className="text-2xl font-bold mb-6 font-Ovo border-b pb-2">
                Quantitative Results
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The system generates a comprehensive laboratory standard report.
                Below is a sample analysis output from a validation dataset.
              </p>

              {/* Extracted Data Table */}
              <div className="border border-gray-200 dark:border-white/20 rounded-xl overflow-hidden">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200">
                    <tr>
                      <th className="px-6 py-3 font-semibold">
                        Motility Parameter
                      </th>
                      <th className="px-6 py-3 font-semibold">Result (%)</th>
                      <th className="px-6 py-3 font-semibold">Reference</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-white/10 bg-white dark:bg-transparent">
                    <tr className="bg-green-50 dark:bg-green-900/10">
                      <td className="px-6 py-3 font-medium text-green-800 dark:text-green-400">
                        Progressive (PR)
                      </td>
                      <td className="px-6 py-3 font-bold text-green-700 dark:text-green-300">
                        43.47%
                      </td>
                      <td className="px-6 py-3 text-gray-500">≥ 30%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 pl-10 text-gray-600 dark:text-gray-300">
                        • Rapid Progressive
                      </td>
                      <td className="px-6 py-3">13.04%</td>
                      <td className="px-6 py-3 text-gray-400">-</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 pl-10 text-gray-600 dark:text-gray-300">
                        • Slow Progressive
                      </td>
                      <td className="px-6 py-3">30.43%</td>
                      <td className="px-6 py-3 text-gray-400">-</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 text-gray-700 dark:text-gray-200">
                        Non-Progressive (NP)
                      </td>
                      <td className="px-6 py-3">48.91%</td>
                      <td className="px-6 py-3 text-gray-400">-</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 text-gray-700 dark:text-gray-200">
                        Immotile (IM)
                      </td>
                      <td className="px-6 py-3">7.61%</td>
                      <td className="px-6 py-3 text-gray-500">N/A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: Project Info Card */}
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
                  <p className="font-semibold text-base">AI Engineer</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 dark:bg-white/10 rounded text-xs">
                      Python
                    </span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-white/10 rounded text-xs">
                      YOLOv8
                    </span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-white/10 rounded text-xs">
                      OpenCV
                    </span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-white/10 rounded text-xs">
                      NumPy
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                    Publication
                  </p>
                  <p className="font-semibold">IEEE ISCI 2025</p>
                  <p className="text-xs text-gray-500 italic">
                    Kuala Lumpur, Malaysia
                  </p>
                </div>

                <a
                  href="https://doi.org/10.1109/ISCI65687.2025.11167457"
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full py-3 text-center bg-black text-white rounded-lg hover:bg-gray-800 transition mt-4 group"
                >
                  <span>Read Full Paper</span>
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
