import React from "react";

export default function About() {
  // 1. Danh sách Tools - Giữ nguyên
  const tools = [
    { name: "Python", icon: "/assets/python.webp" },
    { name: "PyTorch", icon: "/assets/pytorch.png" },
    { name: "n8n", icon: "/assets/n8n.png" },
    { name: "React", icon: "/assets/react.webp" },
    { name: "Google Colab", icon: "/assets/cola.png" },
    { name: "VS Code", icon: "/assets/vscode.png" },
  ];

  // 2. Thông tin tóm tắt - ĐÃ THÊM GOOGLE SCHOLAR
  const infoData = [
    {
      title: "Core Expertise",
      icon: "/assets/code-icon.png",
      description: "AI & Data Science",
      sub: "Computer Vision & XAI",
    },
    {
      title: "Interdisciplinary",
      icon: "/assets/project-icon.png",
      description: "Domain Fusion",
      sub: "Fintech & Biomedicine",
    },
    {
      title: "Education",
      icon: "/assets/edu-icon.png",
      description: "E-Commerce Honors",
      sub: "GPA: 8.89/10",
    },
    {
      title: "Research",
      icon: "/assets/edu-icon.png", // Bạn có thể thay bằng icon scholar nếu có
      description: "Google Scholar",
      sub: "View Publications",
      link: "https://scholar.google.com/citations?user=iFUtThYAAAAJ&hl=vi",
    },
  ];

  // 3. Nhóm kỹ năng - Giữ nguyên
  const skillsGroups = [
    {
      title: "Technical Foundation",
      skills: [
        "Python (PyTorch, Pandas)",
        "Computer Vision (YOLO)",
        "C++",
        "SQL & Data Architecture",
        "React JS / React Native",
        "Automation (n8n)",
      ],
    },
    {
      title: "Strategic & Adaptive",
      skills: [
        "Problem Solving",
        "Interdisciplinary Research",
        "Technical Writing",
        "English (IELTS 6.0)",
        "Leadership",
      ],
    },
  ];

  return (
    <div id="about" className="w-full px-[10%] py-16 scroll-mt-20">
      <div className="text-center mb-12">
        <h4 className="text-lg font-Ovo text-gray-500 mb-2">Introduction</h4>
        <h2 className="text-4xl md:text-5xl font-Ovo font-bold">About Me</h2>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        <div className="w-64 sm:w-72 mx-auto lg:mx-0 relative shrink-0 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-red-100 rounded-3xl -rotate-6 group-hover:rotate-0 transition duration-500"></div>
          <img
            src="/assets/user-image.png"
            alt="Nhi-Yen Nguyen-Huynh"
            className="w-full rounded-3xl relative z-10 shadow-lg group-hover:-translate-y-2 transition duration-500"
          />
        </div>

        <div className="flex-1 w-full">
          <p className="mb-8 font-Ovo text-gray-600 dark:text-gray-300 leading-7 text-justify">
            I am an <strong>Interdisciplinary AI Engineer</strong> driven by a{" "}
            <strong>multi-domain mindset</strong>. My work lives at the
            convergence of technology, finance, and healthcare, where I
            specialize in translating complex, high-dimensional data into
            actionable intelligence. Whether it is optimizing sperm motility
            analysis through <strong>Computer Vision</strong> or decoding
            startup fundability using <strong>Explainable AI</strong>, my focus
            remains on building transparent and reliable systems.
          </p>

          {/* 4 Thẻ Info Cards - Đã chỉnh lại Grid sang grid-cols-2 và lg:grid-cols-4 */}
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {infoData.map((item, index) => (
              <li key={index} className="h-full">
                <a
                  href={item.link || "#"}
                  target={item.link ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`flex flex-col h-full border border-gray-200 dark:border-white/20 rounded-xl p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition duration-300 hover:shadow-sm text-center sm:text-left ${
                    item.link
                      ? "cursor-pointer border-blue-100 dark:border-blue-900/30"
                      : "cursor-default"
                  }`}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-6 h-6 mb-3 mx-auto sm:mx-0 dark:invert"
                  />
                  <h3 className="font-bold text-sm text-gray-800 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {item.description}
                  </p>
                  <p className="text-[10px] text-blue-500 dark:text-blue-400 font-medium mt-auto italic">
                    {item.sub}
                  </p>
                </a>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {skillsGroups.map((group, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-gray-700 dark:text-white mb-3 text-sm uppercase tracking-wide border-b pb-1 border-gray-200 dark:border-gray-700 inline-block">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 bg-white border border-gray-200 dark:bg-white/5 dark:border-white/10 rounded-full text-xs text-gray-600 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-500 mb-3">
              Tools & Frameworks:
            </p>
            <ul className="flex flex-wrap items-center gap-4">
              {tools.map((tool, index) => (
                <li
                  key={index}
                  className="w-10 h-10 flex items-center justify-center border border-gray-200 dark:border-white/20 rounded-lg hover:scale-110 transition bg-white dark:bg-transparent shadow-sm"
                  title={tool.name}
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-5 h-5 object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
