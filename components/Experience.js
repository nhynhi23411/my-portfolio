import React from "react";

export default function Experience() {
  const experienceData = [
    {
      company: "N2N AI Solution",
      role: "AI Engineer Intern",
      period: "Jan 2025 - Present",
      location: "Ho Chi Minh City",
      description: [
        "Contributing to a biomedical AI project in collaboration with Vietnam Military Medical University.",
        "Developing a YOLO-based computer vision pipeline for sperm motility and concentration measurement.",
        "Implementing trajectory tracking and heatmap visualization for movement analysis.",
      ],
      techStack: ["YOLO", "OpenCV", "Python", "Tracking Algorithms"],
      icon: "/assets/work-icon.png",
    },
    {
      company: "Business Analytics & AI Lab (UEL)",
      role: "Research Associate",
      period: "Oct 2024 - Present",
      location: "VNU-HCM",
      description: [
        "Applying computer vision and multi-object tracking techniques to biomedical imaging problems.",
        "Developing an explainable AI (XAI) model for startup funding round classification.",
        "Building and evaluating AI models to solve financial and medical data challenges.",
      ],
      techStack: [
        "Explainable AI",
        "Computer Vision",
        "Data Analytics",
        "Research",
      ],
      icon: "/assets/edu-icon.png", // Dùng icon edu vì đây là môi trường Lab/Học thuật
    },
    {
      company: "Innovation AI Lab",
      role: "AI Engineer / Full-Stack Developer",
      period: "Dec 2023 - Dec 2025",
      location: "Ho Chi Minh City",
      description: [
        "Developed a React Native mobile application for forest protection law dissemination (Can Gio).",
        "Designed front-end and business analysis workflows for an aloe vera farm management application.",
        "Built an LMS and educational game system on Roblox Studio using Lua scripting.",
      ],
      techStack: ["React Native", "Lua", "Roblox Studio", "Full-Stack"],
      icon: "/assets/code-icon.png",
    },
  ];

  return (
    <div id="experience" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Journey</h4>
      <h2 className="text-center text-5xl font-Ovo">Experience</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        My professional track record involves hands-on engineering in AI,
        software development, and academic research.
      </p>

      <div className="flex flex-col gap-10 max-w-4xl mx-auto my-10">
        {experienceData.map((job, index) => (
          <div
            key={index}
            className="flex gap-4 sm:gap-8 items-start relative group"
          >
            {/* Vertical Line */}
            <div className="absolute left-[19px] top-12 bottom-[-40px] w-[2px] bg-gray-300 dark:bg-white/20 last:hidden"></div>

            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 dark:border-white/30 rounded-full shrink-0 z-10 dark:bg-darkHover shadow-md">
              <img src={job.icon} alt="" className="w-5 dark:invert" />
            </div>

            {/* Card Content */}
            <div className="flex-1 border border-gray-300 dark:border-white/30 rounded-xl p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover/50 bg-white dark:bg-transparent shadow-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between mb-2 items-start sm:items-center">
                <div>
                  <h3 className="font-bold text-xl text-gray-800 dark:text-white">
                    {job.role}
                  </h3>
                  <h4 className="font-semibold text-gray-600 dark:text-white/80 text-base">
                    {job.company}
                  </h4>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-full mt-2 sm:mt-0 whitespace-nowrap border dark:border-white/20">
                  {job.period}
                </span>
              </div>

              <ul className="list-disc list-outside ml-5 text-gray-600 dark:text-white/80 space-y-2 text-sm md:text-base mt-4 mb-4">
                {job.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 border-t border-gray-200 dark:border-white/10 pt-4">
                {job.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200 border border-blue-100 dark:border-blue-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
