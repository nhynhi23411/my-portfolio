"use client"; // <--- Thêm dòng này để xử lý sự kiện onError
import React from "react";

export default function Awards() {
  const awards = [
    {
      title: "Second Prize - National Student Scientific Research Competition",
      organization: "Ministry of Education and Training",
      year: "2025",
      icon: "/assets/second-price.png",
    },
    {
      title: "Excellent Paper Award",
      organization: "ICFICE 2025, Guam, USA",
      year: "2025",
      icon: "/assets/best-paper.jpg",
    },
    {
      title: "Vallet Scholarship for Academic Excellence",
      organization: "Rencontres du Vietnam",
      year: "2025",
      icon: "/assets/schoolarship.png",
    },
    {
      title: "Second Prize - UEL Young Scientific Researcher Award",
      organization: "University of Economics and Law (VNU-HCM)",
      year: "2025",
      icon: "/assets/second-price.png",
    },
    {
      title: '"Five-Good Student" Honor',
      organization: "Vietnam National University, Ho Chi Minh City",
      year: "2024-2025",
      icon: "/assets/cup.jpg",
    },
    {
      title: "Honorary Delegate",
      organization: "Vietnam National Student Association Congress (UEL)",
      year: "2025",
      icon: "/assets/danhdu.webp",
    },
  ];

  return (
    <div id="awards" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Achievements</h4>
      <h2 className="text-center text-5xl font-Ovo">Awards & Honors</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 max-w-5xl mx-auto">
        {awards.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-6 border border-gray-300 dark:border-white/30 rounded-xl hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover/50"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-sm dark:bg-darkHover dark:border-white/20 shrink-0">
              {/* onError chỉ hoạt động trong Client Component ('use client') */}
              <img
                src={item.icon}
                alt=""
                className="w-6"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <span className="text-xl hidden">🏆</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-700 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-white/60">
                {item.organization}
              </p>
              <p className="text-xs font-bold text-gray-600 dark:text-white/80 mt-1 px-2 py-0.5 border border-gray-400 rounded-full w-max">
                {item.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
