import React from "react";
import Link from "next/link"; // Import Link của Next.js để chuyển trang mượt mà

export default function Work() {
  const work = [
    {
      name: "SARM: Biomedical AI",
      id: "sarm", // Dùng để định danh trang
      icon: "/assets/work1.png",
      description: "Motility Tracking & Heatmap Analysis",
      shortDesc:
        "A three-fold mechanism for sperm motility assessment using YOLO and Trajectory Tracking.",
    },
    {
      name: "AFAS: Funding AI",
      id: "afas",
      icon: "/assets/work2.jpg",
      description: "Pixel-wise Encoding & XAI",
      shortDesc:
        "Predicting startup funding rounds (Angel to Series-C) using UNet++ and SHAP explanations.",
    },
    {
      name: "ESG AI Solutions",
      id: "esg",
      icon: "/assets/esg2.jpg",
      description: "Automated Sustainability Reporting",
      shortDesc:
        "AI-driven system for ESG data analytics, anomaly detection, and automated report generation.",
    },
  ];

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="text-center mb-12">
        <h4 className="text-lg font-Ovo text-gray-500 mb-2 tracking-wide">
          Technical Portfolio
        </h4>
        <h2 className="text-center text-5xl font-Ovo font-bold">
          Selected Projects
        </h2>
        <p className="text-center max-w-3xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-300 leading-relaxed">
          An overview of technical projects that synthesize interdisciplinary
          expertise into high-impact AI solutions. This portfolio focuses on the
          deployment of <strong>Computer Vision</strong> in biomedical analysis,{" "}
          <strong>Explainable AI (XAI)</strong> in predictive finance, and{" "}
          <strong>Automated Generative Systems</strong> for sustainable
          enterprise reporting.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
        {work.map((project, index) => (
          <Link href={`/${project.id}`} key={index} className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-full border border-gray-200 dark:border-white/10">
              {/* Phần ảnh nền */}
              <div
                className="aspect-video bg-cover bg-center duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.icon})` }}
              ></div>

              {/* Phần thông tin */}
              <div className="p-5 bg-white dark:bg-darkHover h-full">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-xl text-gray-800 dark:text-white group-hover:text-blue-600 transition">
                    {project.name}
                  </h3>
                  <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition">
                    <img
                      src="/assets/right-arrow-bold.png"
                      alt=""
                      className="w-3 dark:hidden group-hover:invert"
                    />
                    <img
                      src="/assets/right-arrow-bold-dark.png"
                      alt=""
                      className="w-3 hidden dark:block group-hover:invert"
                    />
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-500 mb-2">
                  {project.description}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                  {project.shortDesc}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
